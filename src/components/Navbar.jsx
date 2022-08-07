import { Link } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi';
import Search from './Search';
const Navbar = (props) => {
  return (
    <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="">
          <p className="flex items-center text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">
            <span className="px-2">Axcel</span> <BiSearch />
          </p>
        </Link>
        <button
          className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py1 hover:shadow-lg"
          type="button"
          onClick={() => props.setDarkTheme((prevState) => !prevState)}
        >
          {props.darkTheme ? 'Light ☀️' : 'Dark 🌙'}
        </button>
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
