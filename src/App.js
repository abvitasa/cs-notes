import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SortProvider } from './components/Sort/SortProvider';
import ProjDrawer from './components/UI/Drawer/ProjDrawer';
import { projData } from './ProjData';
// import './App.css';

const App = () => {
  const routes = Object.keys(projData).map((key) => {
    return (
      <Route
        path={projData[key].path}
        element={projData[key].element}
        key={projData[key].path}
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
