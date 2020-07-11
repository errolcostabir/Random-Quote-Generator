import React from 'react';
import Button from './Button';

const QuoteMachine = ({ assignNewQuoteIndex, selectedQuote }) => (
            <div class="card" style={{width: "90vw", maxHeight: "90vh", borderRadius:"15px", backgroundColor: "rgba(74,74,74,0.6)",position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} >
                <div class="card-body">
                    <blockquote class="blockquote text-center text-monospace">
                        <p class="" id="text" style={{fontSize: "16px",color: "white"}}>{selectedQuote.quote}</p>
                        <footer class="blockquote-footer"><span id="author">{selectedQuote.author}</span></footer>
                    </blockquote>
                </div>
                <div class="mx-auto">
                    <a role="button" class="btn btn-primary mr-3" style={{marginBottom: "7px"}} href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a>
                    <Button buttonName="New Quote" clickHandler={assignNewQuoteIndex} />
                </div>
            </div>
);

export default QuoteMachine;
