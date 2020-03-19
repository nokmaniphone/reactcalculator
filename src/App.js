import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Display from './Components/Display'
import NumberPad from './Components/NumberPad'

class App extends React.Component {
  state = {
    op: '',
    numOne: '',
    numTwo: '',
    result: '',
    displayVal: 0
  };

  resetCalc = () => {
    this.setState({
      op: '',
      numOne: '',
      numTwo: '',
      result: '',
      displayVal: 0
    });
  };

  handleNumberInput = value => {
    if (!(this.state.numOne === '' && value === '0')) {
      if (!this.state.op) {
        console.log(this.state.numOne);
        this.setState({
          numOne: this.state.numOne + value,
          displayVal: this.state.numOne + value
        });
      } else
        this.setState({
          numTwo: this.state.numTwo + value,
          displayVal: `${this.state.numOne} ${this.state.op} ${this.state.numTwo + value}`
        });
    }
  };

  handleOpInput = value => {
    if (this.state.numOne && !this.state.numTwo) {
      if (!this.state.op)
        this.setState({
          op: value,
          displayVal: this.state.displayVal + ' ' + value
        });
      else
        this.setState({
          op: value,
          displayVal:
            this.state.displayVal.slice(0, this.state.displayVal.length - 1) + value
        });
    }
  };

  handleEqualInput = () => {
    if (this.state.numOne && this.state.numTwo) {
      let num1 = parseInt(this.state.numOne);
      let num2 = parseInt(this.state.numTwo);
      switch (this.state.op) {
        case '+':
          this.setState({ result: num1 + num2 });
          break;
        case '-':
          this.setState({ result: num1 - num2 });
          break;
        case 'x':
          this.setState({ result: num1 * num2 });
          break;
        case '/':
          this.setState({ result: num1 / num2 });
          break;
      }
    }
  };

  render() {
    return (
      <>
        <Header />
        <Main>
          <Display result={this.state.result} displayVal={this.state.displayVal} />
          <NumberPad
            handleNumberInput={this.handleNumberInput}
            handleOpInput={this.handleOpInput}
            handleEqualInput={this.handleEqualInput}
            resetCalc={this.resetCalc}
          />
        </Main>
      </>
    );
  }
}

export default App;
