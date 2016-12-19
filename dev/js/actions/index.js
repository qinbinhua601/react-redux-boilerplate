export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectChessItem = (chessItem) => {
    return {
        type: 'SELECT_CHESS_ITEM',
        payload: chessItem
    }
}