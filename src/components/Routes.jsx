import { Route } from 'react-router-dom';
import { Routes as Switch, Navigate } from 'react-router-dom';

import Results from './Results';

const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route path="/" element={<Navigate replace to="/search" />} />
        {['/search', '/image', '/news', '/video'].map((item) => (
          <Route key={item} path={item} element={<Results />} />
        ))}
      </Switch>
    </div>
  );
};

export default Routes;
