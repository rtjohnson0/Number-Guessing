import React from 'react';
import './game.css';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }
    //we need to make a form that will activate the code to the board

    sendGuess(event){
        event.preventDefault(); // this will be an event for when their typing in the form
        const text = this.state.text;
        if(text && this.props.onGuess){
            this.props.onGuess(text);
        }
    }

    render() {
        const guesses = this.props.history.map((guess, index) => 
            <li key={index}>{guess}</li>
        );
        if(this.props.feedback === "You Won! Wanna Play Again?"){
            return (
                <section className="game">
                    <h2>{this.props.feedback}</h2>
                    <form onSubmit={e => this.sendGuess(e)}> 
                        <input type="text" onChange={input => this.setState({text:input.target.value})}
                        placeholder="Enter your Guess" 
                        id="userGuess" 
                        className="text" 
                        name="userGuess" required/>
                        
                    </form>
                    <p>
                        Guess #<span id="count">{this.props.history.length}</span>!
                    </p>
                    <ul id="guessList" className="guessBox clearfix">
                        {guesses}
                    </ul>
                </section>
            );
        }
        return ( // game format
            <section className="game">
                <h2>{this.props.feedback}</h2>
                <form onSubmit={e => this.sendGuess(e)}> 
                    <input type="text" onChange={input => this.setState({text:input.target.value})}
                    placeholder="Enter your Guess" 
                    id="userGuess" 
                    className="text" 
                    name="userGuess" required/>
                    <input type="submit" 
                    id="guessButton" className="button" name="submit" value="Guess" />
                    <input type="button" 
                    id="guessButton" className="button" name="submit" value="Easy" />
                     <input type="button" 
                    id="guessButton" className="button" name="submit" value="Expert" />
                </form>
                <p>
                    Guess Number <span id="count">{this.props.history.length}</span>! 
                </p>
                <ul id="guessList" className="guessBox clearfix">
                    {guesses}
                </ul>
            </section>
        );
    }
}

