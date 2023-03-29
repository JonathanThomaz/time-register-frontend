import { Loading } from 'components';
import { EmployeeProvider } from 'context/Employee';
import React from 'react';

const Home = React.lazy(() => import('screens/Home'));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <EmployeeProvider>
        <Home />
      </EmployeeProvider>
    </React.Suspense>
  );
}

export default App;
