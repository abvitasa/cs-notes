import React, { useRef, useEffect } from 'react';
import { useSort } from './SortProvider';
import '../../App.css';

const BubbleSort = () => {
  const {
    canvasSize,
    createSortObj,
    createNumList,
    drawCanvas,
    changeNumColorToSelected,
    redrawCanvas,
    moveNumbersUp,
    moveNumbersDown,
    moveNumbersRight,
    moveNumbersLeft,
    updateNumList,
    reload,
  } = useSort();
  const canvasRef = useRef(null);
  const bubbleSort = createSortObj();

  const updateIndex = () => {
    if (bubbleSort.indexes[1] >= bubbleSort.quantity) {
      if (bubbleSort.num.toString() === bubbleSort.sortedNum.toString()) {
        bubbleSort.numIsSorted = true;
      }
      bubbleSort.indexes = [0, 1];
    }
  };

  const updateCanvas = () => {
    redrawCanvas(bubbleSort, canvasRef);
    updateIndex();
    if (bubbleSort.numIsSorted) return;
    changeNumColorToSelected(bubbleSort, false, false, ...bubbleSort.indexes);

    const [i1, i2] = [...bubbleSort.indexes];
    const { num, numList, defaultY, defaultX, movingUp } = bubbleSort;

    switch (true) {
      case numList[i1].y >= defaultY[i1] * 0.2 && movingUp:
        moveNumbersUp(bubbleSort, ...bubbleSort.indexes);
        break;

      case num[i1] > num[i2]:
        if (numList[i1].x < defaultX[i2]) {
          moveNumbersRight(bubbleSort, i1);
          moveNumbersLeft(bubbleSort, i2);
        } else {
          bubbleSort.num[i1] = bubbleSort.numList[i2].num;
          bubbleSort.num[i2] = bubbleSort.numList[i1].num;
        }
        break;

      case numList[i1].y < defaultY[i1]:
        moveNumbersDown(bubbleSort, ...bubbleSort.indexes);
        break;

      default:
        updateNumList(bubbleSort, ...bubbleSort.indexes);
        bubbleSort.movingUp = true;
        bubbleSort.indexes[0]++;
        bubbleSort.indexes[1]++;
        break;
    }
    requestAnimationFrame(updateCanvas);
  };

  useEffect(() => {
    if (!bubbleSort.num.length) {
      bubbleSort.indexes = [0, 1];
      createNumList(bubbleSort, canvasSize);
      drawCanvas(bubbleSort, canvasRef);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='body'>
      <h1>Bubble Sort</h1>
      <button onClick={updateCanvas}>Start</button>
      <button onClick={reload}>Reload</button>
      <canvas {...canvasSize} className='canvas' ref={canvasRef} />
    </div>
  );
};

export default BubbleSort;
