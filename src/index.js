import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import { Button } from 'reactstrap';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      searchTerm: '',
      hasSubmitted: false
    };

    this.vipSearch = this.vipSearch.bind(this);
    this.setSubmitted = this.setSubmitted.bind(this);

  }

  vipSearch(term) {
     this.setState({searchTerm: term});
     console.log('This is the state of Parent: ' + this.state.searchTerm);
  }

  setSubmitted(bool) {
    this.setState({hasSubmitted: bool});
    console.log('Submitted set to: ' + this.state.hasSubmitted);
  }

  render() {
    // this.vipSearch(term);

    return (
      <div className="App">
        <p>Enter search words:</p>
        <span>
          <SearchBox onSearchTermChange={ this.vipSearch }  />
          <SubmitButton onSubmitted={ this.setSubmitted }/>
        </span>
        <DisplayOutput parentState={this.state} />
      </div>
    );
  }
}

class SearchBox extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return(
      <div>
        <input
          value={this.state.term}
          onChange={e => this.onInputChange(e.target.value)}
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange({term});
    console.log(this.state.term);
  }
}

class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  render() {
    return (
      //<button className="button" onClick={e => alert('You are searching for: ' + this.props)}>Submit</button>
      <button className="button" onClick={e => this.onSubmit(true)}>Submit</button>
    );
  }

  onSubmit(bool){
    // console.log(this.props.searchWord.term);
    // alert('You are searching for: ' + this.props.searchWord.term);
    this.props.onSubmitted({bool});
    console.log({bool})

  }
}

class DisplayOutput extends React.Component{
  render() {
    if (this.props.parentState.hasSubmitted.bool)
    {
      return (
        <p>Results for : {this.props.parentState.searchTerm.term}</p>
      );
    } else {
      return (
        <p>Results for : </p>
      );
    }

  }
}

ReactDOM.render(<App />, document.getElementById('root'));
