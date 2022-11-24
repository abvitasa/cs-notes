import React, { useRef, useEffect } from 'react';
import { useSort } from '../SortProvider';
import SortTitle from '../../UI/Title/SortTitle';
import CanvasContent from '../../UI/Canvas/CanvasContent';
import SortTable from '../../UI/Table/SortTable';
import '../../../App.css';
import InsertionSortWiki from './InsertionSortWiki';

function InsertionSort() {
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
  const insertionSort = createSortObj();

  const updatePointer = () => {
    const { pointerMinor, pointerMain, quantity } = insertionSort;
    if (pointerMinor < 0) {
      insertionSort.pointerMain++;
      insertionSort.pointerMinor = pointerMain - 1;
    }
    if (pointerMain >= quantity) {
      insertionSort.numIsSorted = true;
    }
  };

  const updateCanvas = () => {
    redrawCanvas(insertionSort, canvasRef);
    updatePointer();
    if (insertionSort.numIsSorted) return;

    const [pointerMain, pointerMinor] = [
      insertionSort.pointerMain,
      insertionSort.pointerMinor,
    ];

    const {
      num,
      numList,
      defaultX,
      defaultY,
      movingUp,
      rightOfMinor,
      indexes,
    } = insertionSort;

    changeNumColorToSelected(
      insertionSort,
      pointerMain,
      pointerMinor,
      ...insertionSort.indexes
    );

    switch (true) {
      case numList[pointerMain].y >= defaultY[pointerMain] * 0.2 && movingUp:
        moveNumbersUp(insertionSort, pointerMain, pointerMinor, ...indexes);
        break;

      case num[pointerMain] < num[pointerMinor] && pointerMinor === 0:
        if (numList[pointerMain].x > defaultX[pointerMinor]) {
          moveNumbersLeft(insertionSort, pointerMain);
          if (numList[pointerMinor].x < defaultX[pointerMinor + 1]) {
            moveNumbersRight(insertionSort, ...indexes, pointerMinor);
          }
        } else {
          insertionSort.num.splice(0, 0, num[pointerMain]);
          insertionSort.num.splice(pointerMain + 1, 1);
          insertionSort.rightOfMinor = false;
        }
        break;

      case num[pointerMain] >= num[pointerMinor] && rightOfMinor:
        if (numList[pointerMain].x > defaultX[pointerMinor + 1]) {
          moveNumbersLeft(insertionSort, pointerMain);
          if (numList[pointerMinor + 1].x < defaultX[pointerMinor + 2]) {
            moveNumbersRight(insertionSort, ...indexes);
          }
        } else {
          insertionSort.num.splice(
            pointerMinor + 1,
            0,
            insertionSort.num[pointerMain]
          );
          insertionSort.num.splice(pointerMain + 1, 1);
          insertionSort.rightOfMinor = false;
        }
        break;

      case numList[pointerMain].y < defaultY[pointerMain]:
        moveNumbersDown(
          insertionSort,
          ...insertionSort.indexes,
          pointerMain,
          pointerMinor
        );
        break;

      default:
        updateNumList(insertionSort, pointerMain, pointerMinor, ...indexes);
        insertionSort.movingUp = true;
        if (num[pointerMain] >= num[pointerMinor]) {
          insertionSort.pointerMain++;
          insertionSort.pointerMinor = pointerMain;
          insertionSort.indexes = [];
        } else {
          insertionSort.rightOfMinor = true;
          insertionSort.indexes.push(pointerMinor);
          insertionSort.pointerMinor--;
        }
    }

    requestAnimationFrame(updateCanvas);
  };

  useEffect(() => {
    if (!insertionSort.num.length) {
      insertionSort.pointerMain = 1;
      insertionSort.pointerMinor = 0;
      insertionSort.rightOfMinor = true;
      createNumList(insertionSort, canvasSize);
      drawCanvas(insertionSort, canvasRef);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className='body'>
      <SortTitle title={'Insertion Sort'} />
      <InsertionSortWiki />
      <SortTable sortType={'Insertion Sort'} />
      <CanvasContent
        updateCanvas={updateCanvas}
        reload={reload}
        canvasSize={canvasSize}
        canvasRef={canvasRef}
      />
    </div>
  );
}

export default InsertionSort;
