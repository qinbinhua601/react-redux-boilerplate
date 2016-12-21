export default function (state = 0, action) {
  switch (action.type) {
  case 'ADD_MOVE':
    return state + 1
    break;
  case 'REMOVE_MOVE':
    return (state - 1) > 0 ? (state - 1) : 0
    break;
  }
  return state;
}