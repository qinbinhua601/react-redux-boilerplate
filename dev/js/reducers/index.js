import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import ChessData from './chess-data';
import TotalMove from './total-move';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    users: UserReducer,
    activeUser: ActiveUserReducer,
    chessData: ChessData,
    totalMove: TotalMove
});

export default allReducers
