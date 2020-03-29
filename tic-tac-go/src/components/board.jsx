import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Storage} from './../storage/storage';

import {Box} from './board-box';

import * as utils from '../utils/functions';

export class Board extends Component {
    constructor(props){
        super(props)
        this.state = {
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        }
    }

    storage = new Storage()

    handleBoxClick(index){
        const boxes = this.state.boxes.slice();

        let history = this.state.history;

        if(utils.findWinner(boxes) || boxes[index]){
            return
        }

        boxes[index] = this.state.xIsNext ? 'X' : 'O';

        history.push(this.state.xIsNext ? 'X' : 'O')

        this.setState({
            boxes: boxes,
            history: history,
            xIsNext: !this.state.xIsNext
        })
    }

    handleBoardRestart = () => {
        this.setState({
            boxes: Array(9).fill(null),
            history: [],
            xIsNext: true
        })
    }

    render(){
        const winner = utils.findWinner(this.state.boxes);
        const isFilled = utils.areAllBoxesClicked(this.state.boxes);
        let status;
        if(winner){
            status = `The Winner is: ${winner}`;
            this.storage.update([`${winner} won!!!`])
        }else if(!winner && isFilled){
            status = "Game Drawn!";
            this.storage.update(['Game Drawn'])
        }else{
            status = `It is ${[this.state.xIsNext ? 'X' : 'O']}`
        }
        return(
            <>
                <Link to="/" className="board-link">Regresar al Tablero</Link>
                <div className="board-wrapper">
                    <div className="board"></div>
                </div>
            </>
        )
    }
}