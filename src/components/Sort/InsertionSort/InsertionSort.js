import { useRef, useEffect } from 'react';
import './InsertionSort.css';
import Card from '../../UI/Card/Card';
import { useSort } from '../SortProvider';

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
    if (insertionSort.pointerMinor < 0) {
      insertionSort.pointerMain++;
      insertionSort.pointerMinor = insertionSort.pointerMain - 1;
    }
    if (insertionSort.pointerMain >= insertionSort.quantity) {
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

    const { num, numList, defaultX, defaultY, movingUp, rightOfMinor } =
      insertionSort;

    changeNumColorToSelected(
      insertionSort,
      pointerMain,
      pointerMinor,
      ...insertionSort.indexes
    );

    switch (true) {
      case numList[pointerMain].y >= defaultY[pointerMain] * 0.2 && movingUp:
        moveNumbersUp(
          insertionSort,
          pointerMain,
          pointerMinor,
          ...insertionSort.indexes
        );
        break;

      case num[pointerMain] < num[pointerMinor] && pointerMinor === 0:
        if (numList[pointerMain].x > defaultX[pointerMinor]) {
          moveNumbersLeft(insertionSort, pointerMain);
          if (numList[pointerMinor].x < defaultX[pointerMinor + 1]) {
            moveNumbersRight(
              insertionSort,
              ...insertionSort.indexes,
              pointerMinor
            );
          }
        } else {
          insertionSort.num.splice(0, 0, insertionSort.num[pointerMain]);
          insertionSort.num.splice(pointerMain + 1, 1);
          insertionSort.rightOfMinor = false;
        }
        break;

      case num[pointerMain] >= num[pointerMinor] && rightOfMinor:
        if (numList[pointerMain].x > defaultX[pointerMinor + 1]) {
          moveNumbersLeft(insertionSort, pointerMain);
          if (numList[pointerMinor + 1].x < defaultX[pointerMinor + 2]) {
            moveNumbersRight(insertionSort, ...insertionSort.indexes);
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
        updateNumList(
          insertionSort,
          pointerMain,
          pointerMinor,
          ...insertionSort.indexes
        );
        insertionSort.movingUp = true;
        if (num[pointerMain] >= num[pointerMinor]) {
          insertionSort.pointerMain++;
          insertionSort.pointerMinor = insertionSort.pointerMain - 1;
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
    <>
      <Card>
        <h1>Insertion Sort</h1>
        <button onClick={updateCanvas}>Start</button>
        <button onClick={reload}>Reload</button>
        <canvas {...canvasSize} ref={canvasRef} />
      </Card>
    </>
  );
}

export default InsertionSort;
