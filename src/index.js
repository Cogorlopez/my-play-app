import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import { Button } from 'reactstrap';
import './index.css'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={searchTerm: ''};
    this.vipSearch = this.vipSearch.bind(this);
    // this.vipSearch("test");
    // this.setState = this.setState.bind(this);
    this.onSearchTermChange = this.onSearchTermChange.bind(this);

  }

  vipSearch(term) {
     term => this.setState({searchTerm: term});
  }

  render() {
    // this.vipSearch(term);

    return (
      <div className="App">
        <p>Enter search words:</p>
        <span>
          <SearchBox onSearchTermChange={ vipSearch }  />
          <SubmitButton searchWord={this.state.searchTerm}/>
        </span>
      </div>
    );
  }
}

class SearchBox extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {term: ''};
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
    this.props.vipSearch(term);
    console.log(this.state.term);
  }
}



class SubmitButton extends React.Component {
  render() {
    return (
      // <button className="button" onClick={e => alert('You are searching for: ' + this.props.searchTerm)}>Submit</button>
      <button className="button" onClick={e => console.log(this.props.searchWord)}>Submit</button>
    );
  }

  onClick(term){
    alert('You are searching for: ' + this.props.term);
    console.log(term);
  }
}

// class SearchOptions extends React.Component {
//   render() {
//     return (
//       <div>
//       </div>
//     );
//   }
// }

// class Vip extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state={value: ''};
//
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleClear = this.handleClear.bind(this);
//   }
//
//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }
//
//   handleSubmit(event) {
//     alert('You are searching for: ' +this.state.value)
//     event.preventDefault();
//   }
//
//   handleClear() {
//     this.setState({value: ''});
//   }
//
//   render () {
//     return (
//         <div className="Vip">
//           <p>Enter search words:</p>
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//           <button className="button" onClick={this.handleSubmit}>Submit</button>
//           <button className="button" onClick={this.handleClear}>Clear</button>
//         </div>
//     );
//   }
// }



ReactDOM.render(<App />, document.getElementById('root'));
