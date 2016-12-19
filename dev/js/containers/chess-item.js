import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectChessItem} from '../actions/index'

class ChessItem extends Component {
    constructor(props) {
        super(props)
        this.handleClickItem = this.handleClickItem.bind(this);
    }

    handleClickItem(e) {
        e.preventDefault()
        this.props.selectChessItem(this.props.chessItem)
    }

    render() {
        return (
            <li onClick={(e) => this.handleClickItem(e)}></li>
        );
    }
}

function matchDispatchToProps(dispatch){
    console.log(dispatch)
    return bindActionCreators({selectChessItem: selectChessItem}, dispatch);
}

export default connect(matchDispatchToProps)(ChessItem);