import { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  // /videos /search /images
  const getResults = async (type) => {
    setIsLoading(true);
    const response = await fetch(`${baseUrl}${type}`, {
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Key': 'e6e1c3a97bmshf95aa1ae646f76bp17a1f2jsnffe5c9fdbe67',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
      },
    });
    const data = await response.json();

    if (type.includes('/news')) setResults(data.entries);
    else if (type.includes('/video')) setResults(data.results);
    else if (type.includes('/image')) setResults(data.image_results);
    else if (type.includes('/search')) setResults(data.results);

    setIsLoading(false);
  };

  return (
    <ResultContext.Provider
      value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}
    >
      {children}
    </ResultContext.Provider>
  );
};

export const useResultContext = () => useContext(ResultContext);
