import BubbleSort from './components/Sort/BubbleSort/BubbleSort';
import InsertionSort from './components/Sort/InsertionSort/InsertionSort';
import { SortProvider } from './components/Sort/SortProvider';
import SiteDrawer from './components/UI/SiteDrawer/SiteDrawer';

function App() {
  return (
    <>
      <SiteDrawer>
        <SortProvider>
          <BubbleSort />
          <InsertionSort />
        </SortProvider>
      </SiteDrawer>
    </>
  );
}

export default App;
