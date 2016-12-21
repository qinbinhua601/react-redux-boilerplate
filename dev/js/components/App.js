import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import ChessBoard from '../containers/chess-board';

require('../../sass/style.sass');

const App = () => ( <
  div >
  <
  h2 > User List < /h2> <
  UserList / >
  <
  hr / >
  <
  h2 > User Details < /h2> <
  UserDetails / >
  <
  ChessBoard / >
  <
  /div>
);

export default App;