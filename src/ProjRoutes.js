import Homepage from './components/Homepage';
import BubbleSort from './components/Sort/BubbleSort';
import InsertionSort from './components/Sort/InsertionSort';

export const projRoutes = {
  Home: {
    path: '/',
    element: <Homepage />,
  },
  'Bubble Sort': {
    path: '/bubble-sort',
    element: <BubbleSort />,
  },
  'Insertion Sort': {
    path: '/insertion-sort',
    element: <InsertionSort />,
  },
};
