import React from 'react';
import './nav.css';

export default function Nav(props) {
    
    return (
        <header>
            <nav>
            <ul>
                    <li id="new">
                        <button className="new" href="#" onClick={() => props.onClick()}>NEW GAME</button>
                    </li>
                </ul>
            </nav>

            <div className="overlay" id="modal">
                <div className="content">
                    <h3>What do I do?</h3>
                    <div>
                        <p>This is a Number Guessing Game. The Game goes like this: Pick a number 1-100 </p>
                       
                     
                    </div>
                </div>
            </div>

          
        </header>
    );
}