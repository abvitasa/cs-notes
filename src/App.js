import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SortProvider } from './components/Sort/SortProvider';
import ProjDrawer from './components/UI/Drawer/ProjDrawer';
import { projRoutes } from './ProjRoutes';

const App = () => {
  const routes = Object.keys(projRoutes).map((key) => {
    return (
      <Route
        path={projRoutes[key].path}
        element={projRoutes[key].element}
        key={projRoutes[key].path}
      />
    );
  });
  return (
    <>
      <Router>
        <ProjDrawer>
          <SortProvider>
            <Routes>{routes}</Routes>
          </SortProvider>
        </ProjDrawer>
      </Router>
    </>
  );
};

export default App;
