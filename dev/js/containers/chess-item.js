import React, {
  Component
} from 'react';
import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import {
  selectChessItem,
  addMove,
  removeMove,
  deselectChessItem
} from '../actions/index'

class ChessItem extends Component {
  constructor(props) {
    super(props)
    this.handleClickItem = this.handleClickItem.bind(this);
  }

  handleClickItem(e) {
    e.preventDefault()
    if (this.props.chessItem.label !== ' ') {
      this.props.removeMove()
      this.props.deselectChessItem(this.props.index)
    } else {
      this.props.addMove(this.props.chessItem)
      this.props.selectChessItem(this.props.index, this.props.totalMove + 1)
    }
  }

  render() {
    return ( <
      li onClick = {
        (e) => this.handleClickItem(e)
      } > {
        this.props.chessItem.label
      } < /li>
    );
  }
}

function mapStateToProps(state) {
  return {
    chessData: state.chessData,
    totalMove: state.totalMove
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    selectChessItem,
    addMove,
    removeMove,
    deselectChessItem
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(ChessItem);