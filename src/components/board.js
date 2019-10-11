import React from 'react';
import Nav from './nav';
import Game from './game';
import './board.css';

export default class Board extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            guess: 0,
            easyguess:0,
            history: [],
            answer: Math.floor(Math.random() * 101), // for expert game
            easyAnswer: Math.floor(Math.random() * 11),// for easy game
            feedback: "Make your Guess!"
        }
    }

    calcFeedback(guessNum){ // checks the input from .game and gives the right response
        let diff = Math.abs(guessNum - this.state.answer);
        if(diff === 0){
            return "You Won! Wanna Play Again?";
        } 
        else if(guessNum <= this.state.answer) return "Higher";
        else return "Lower";
    }

    updateGuess(num){
        if(!isNaN(num)){ // if Not a number is true then it proceeds to continue the function below
            num = parseInt(num, 10);
            if(this.state.history.indexOf(num) > -1){ // referes back to the previus answers
                alert("You've already used this number before clown");
            } else {
                if(num >= 0 && num <= 100){
                    let newFeedback = this.calcFeedback(num);
                    this.setState({
                        guess: num,
                        history: [...this.state.history, num], // spaces out the answers for organization
                        feedback: newFeedback
                    });
                } else alert('Number must be between 0 and 100 goofball');
            }
        } else {
            alert('Are you even paying attention?'); // if its anything other a number
        }
    }
    EasyGuess(num){ // easy game use. Copied from expert to go to easy
        if(!isNaN(num)){ // if Not a number is true then it proceeds to continue the function below
            num = parseInt(num, 10);
            if(this.state.history.indexOf(num) > -1){
                alert("You've already used this number before");
            } else {
                if(num >= 1 && num <= 10){
                    let newFeedback = this.calc(num);
                    this.setState({
                        easyguess: num,
                        history: [...this.state.history, num],
                        feedback: newFeedback
                    });
                } else alert('Number must be between 0 and 100');
            }
        } else {
            alert('Are you even paying attention?');
        }
    }


    reset() {
        this.setState({
            guess: 0,
            history: [],
            answer: Math.floor(Math.random() * 101),
            feedback: "Make your Guess!"
        });
    }

    render() {
        console.log('answer', this.state.answer)
        console.log('history', this.state.history)
        return (
            <div>
                <Nav onClick={() => this.reset()} />
                <h1>Reggie Number Guessing Game</h1>  
                <Game onGuess={guess => this.updateGuess(guess)} history={this.state.history} feedback={this.state.feedback} />
            </div>
        );   
    }
}
