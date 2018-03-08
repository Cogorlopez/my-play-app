import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import { Button } from 'reactstrap';
import './index.css'

class Vip extends React.Component {
  constructor(props) {
    super(props);
    this.state={value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('You are searching for: ' +this.state.value)
    event.preventDefault();
  }

  handleClear() {
    this.setState({value: ''});
  }

  render () {
    return (
        <div className="Vip">
          <p>Enter search words:</p>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button className="button" onClick={this.handleSubmit}>Submit</button>
          <button className="button" onClick={this.handleClear}>Clear</button>
        </div>
    );
  }
}

class SearchOptions extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render(<Vip />, document.getElementById('root'));
