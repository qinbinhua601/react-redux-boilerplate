import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import ChessItem from './chess-item'

class ChessBoard extends Component {
  render() {
    return ( <
      div id = "chess-board-wrapper" >
      <
      ul id = "chess-board" > {
        this.props.chessData.map((ele, i) => {
          return <ChessItem key = {
            i
          }
          index = {
            i
          }
          chessItem = {
            ele
          } > < /ChessItem>
        })
      } <
      /ul> <
      /div>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {
    chessData: state.chessData
  };
}

export default connect(mapStateToProps)(ChessBoard);