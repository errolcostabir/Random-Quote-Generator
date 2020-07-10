import React, { Component } from 'react';
import { random } from 'lodash';
import QuoteMachine from './components/QuoteMachine';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
      .then(data => data.json())
      .then(quotes => this.setState({ quotes }, this.assignNewQuoteIndex));
  }


  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.selectQuoteIndex() });
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return undefined;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    return (
      <div id="quote-box">
      {
        this.selectedQuote?
        <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex} />
        :null
      }       
      </div>
    );
  }
}

export default App;
