import { Loading } from 'components';
import React from 'react';

const Home = React.lazy(() => import('screens/Home'));

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Home />
    </React.Suspense>
  );
}

export default App;
