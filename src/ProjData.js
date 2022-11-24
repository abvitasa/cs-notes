import Homepage from './components/Homepage';
import BubbleSort from './components/Sort/BubbleSort/BubbleSort';
import InsertionSort from './components/Sort/InsertionSort/InsertionSort';

export const projData = {
  Home: {
    path: '/',
    element: <Homepage />,
  },
  'Bubble Sort': {
    path: '/bubble-sort',
    element: <BubbleSort />,
    bestTime: 'Ω(n)',
    averageTime: 'O(n<sup>2</sup>)',
    worstTime: 'O(n<sup>2</sup>)',
    worstSpace: 'O(1)',
  },
  'Insertion Sort': {
    path: '/insertion-sort',
    element: <InsertionSort />,
    bestTime: 'Ω(n)',
    averageTime: 'O(n<sup>2</sup>)',
    worstTime: 'O(n<sup>2</sup>)',
    worstSpace: 'O(1)',
  },
};
