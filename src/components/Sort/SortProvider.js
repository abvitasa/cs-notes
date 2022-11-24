import React, { createContext, useContext } from 'react';

const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const canvasSize = {
    width: window.innerWidth,
    height: window.innerWidth * 0.35,
  };

  const createSortObj = () => {
    return {
      numIsSorted: false,
      movingUp: true,
      quantity: 8,
      defaultX: [],
      defaultY: [],
      numList: [],
      num: [],
      sortedNum: [],
      indexes: [],
    };
  };

  const createNumList = (sortObj, canvasSize) => {
    const numObj = {
      tileSize: 0.11 * canvasSize.width,
      speedX: canvasSize.width * 0.007,
      speedY: canvasSize.width * 0.007,
      num: '',
      x: '',
      y: '',
      font: `${0.08 * canvasSize.width}px Georgia, serif`,
      fontColor: 'black',
      selectedColor: '#FCE38A',
      fillColor: '#FEF5ED',
      defaultColor: '#FEF5ED',
    };

    for (let i = 0; i < sortObj.quantity; i++) {
      sortObj.num[i] = Math.floor(Math.random() * 90) + 10; // Numbers between 10 and 99

      let newNum = { ...numObj };

      newNum.num = sortObj.num[i];

      // Set position on X-axis
      if (sortObj.numList.length !== 0) {
        newNum.x =
          sortObj.numList[i - 1].x +
          sortObj.numList[i - 1].tileSize +
          (canvasSize.width * 0.94 - newNum.tileSize * sortObj.quantity) /
            (sortObj.quantity - 1);
      } else {
        newNum.x = 0.03 * canvasSize.width;
      }
      sortObj.defaultX.push(newNum.x);

      // Set position on Y-axis
      newNum.y = 0.7 * canvasSize.height - newNum.tileSize / 2;
      sortObj.defaultY.push(newNum.y);

      sortObj.numList.push(newNum);
    }
    sortObj.sortedNum = [...sortObj.num].sort(function (a, b) {
      return a - b;
    });
  };

  const drawCanvas = (sortObj, canvasRef) => {
    const ctx = canvasRef.current.getContext('2d');
    const scale = window.devicePixelRatio;

    canvasRef.current.width = canvasSize.width * scale;
    canvasRef.current.height = canvasSize.height * scale;
    ctx.scale(scale, scale);
    ctx.shadowColor = '#16213E';
    for (let i = 0; i < sortObj.numList.length; i++) {
      // Tiles-------------------------------------
      ctx.shadowBlur = 5;
      ctx.fillStyle = sortObj.numList[i].fillColor;
      ctx.fillRect(
        sortObj.numList[i].x,
        sortObj.numList[i].y,
        sortObj.numList[i].tileSize,
        sortObj.numList[i].tileSize
      );

      // Numbers-------------------------------------
      let textX = sortObj.numList[i].x + sortObj.numList[i].tileSize * 0.1;
      let textY = sortObj.numList[i].y + sortObj.numList[i].tileSize * 0.8;

      ctx.shadowBlur = 0;
      ctx.fillStyle = sortObj.numList[i].fontColor;
      ctx.font = sortObj.numList[i].font;
      ctx.fillText(sortObj.numList[i].num, textX, textY);
    }
  };

  const changeNumColorToSelected = (
    sortObj,
    pointerMain,
    pointerMinor,
    ...indexes
  ) => {
    indexes.forEach((i) => {
      sortObj.numList[i].fillColor = sortObj.numList[i].selectedColor;
    });
    if (pointerMain || pointerMinor) {
      sortObj.numList[pointerMinor].fillColor = '#FF6F3C';
      sortObj.numList[pointerMain].fillColor = '#FFC93C';
    }
  };

  const redrawCanvas = (sortObj, canvas) => {
    const ctx = canvas.current.getContext('2d');
    ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
    drawCanvas(sortObj, canvas);
  };

  const moveNumbersUp = (sortObj, ...indexes) => {
    indexes.forEach((i) => {
      sortObj.numList[i].y -= sortObj.numList[i].speedY;
    });
  };

  const moveNumbersDown = (sortObj, ...indexes) => {
    indexes.forEach((i) => {
      sortObj.numList[i].y += sortObj.numList[i].speedY;
    });
    sortObj.movingUp = false;
  };

  const moveNumbersRight = (sortObj, ...indexes) => {
    indexes.forEach((i) => {
      sortObj.numList[i].x += sortObj.numList[i].speedX;
    });
  };

  const moveNumbersLeft = (sortObj, ...indexes) => {
    indexes.forEach((i) => {
      sortObj.numList[i].x -= sortObj.numList[i].speedX;
    });
  };

  const updateNumList = (sortObj, ...indexes) => {
    indexes.forEach((i) => {
      sortObj.numList[i].num = sortObj.num[i];
      sortObj.numList[i].x = sortObj.defaultX[i];
      sortObj.numList[i].y = sortObj.defaultY[i];
      sortObj.numList[i].fillColor = sortObj.numList[i].defaultColor;
    });
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <SortContext.Provider
      value={{
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
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

export const useSort = () => useContext(SortContext);
