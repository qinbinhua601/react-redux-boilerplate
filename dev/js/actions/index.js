export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};

export const selectChessItem = (index, totalMove) => {
    return {
        type: 'SELECT_CHESS_ITEM',
        payload: {
            index,
            totalMove,
        }
    }
}


export const deselectChessItem = (index, totalMove) => {
    return {
        type: 'DESELECT_CHESS_ITEM',
        payload: {
            index,
            totalMove,
        }
    }
}

export const addMove = (chessItem) => {
    return {
        type: 'ADD_MOVE',
        payload: {}
    }
}

export const removeMove = () => {
    return {
        type: 'REMOVE_MOVE',
        payload: {}
    }
}