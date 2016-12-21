const CROSS = '×';
const CIRCLE = '○';
const EMPTY = ' ';

const initChessData = [{
  label: EMPTY
}, {
  label: EMPTY
}, {
  label: EMPTY
}, {
  label: EMPTY
}, {
  label: EMPTY
}, {
  label: EMPTY
}, {
  label: EMPTY
}, {
  label: EMPTY
}, {
  label: EMPTY
}, ]

const compare3 = (a, b, c, target) => {
  return a === b && b === c && a !== target
}

const gameOver = (arr) => {
  console.log(arr)
  if (
    compare3(arr[0], arr[1], arr[2], ' ') ||
    compare3(arr[3], arr[4], arr[5], ' ') ||
    compare3(arr[6], arr[7], arr[8], ' ') ||
    compare3(arr[0], arr[4], arr[8], ' ') ||
    compare3(arr[2], arr[4], arr[6], ' ') ||
    compare3(arr[0], arr[3], arr[6], ' ') ||
    compare3(arr[1], arr[4], arr[8], ' ') ||
    compare3(arr[2], arr[5], arr[7], ' ')
  ) {
    return true
  }

  return false
}

export default function (state = initChessData, action) {
  let newState = [...state]
  switch (action.type) {
  case 'SELECT_CHESS_ITEM':
    newState[action.payload.index] = {
      label: action.payload.totalMove % 2 ? CIRCLE : CROSS
    }
    if (gameOver(newState.map((e) => e.label)) || action.payload.totalMove > 8) {
      alert('winner is ' + (action.payload.totalMove % 2 ? CIRCLE : CROSS))
    }
    return newState;
    break;
  case 'DESELECT_CHESS_ITEM':
    newState[action.payload.index] = {
      label: EMPTY
    }
    return newState;
    break;
  }
  return state;
}