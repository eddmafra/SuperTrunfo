import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    // console.log(this.state);
    const value = type === 'chekbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({ isSaveButtonDisabled: !this.validateButton() });
    });
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
  };

  validateButton = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3 } = this.state;
    const NINETY = 90;
    const SUMATRR = (+cardAttr1) + (+cardAttr2) + (+cardAttr3);
    const TWO_HUNDRED_TEN = 210;
    if (cardName
        && cardDescription
        && cardImage
        && cardRare
        && cardAttr1 >= 0
        && cardAttr1 <= NINETY
        && cardAttr2 >= 0
        && cardAttr2 <= NINETY
        && cardAttr3 >= 0
        && cardAttr3 <= NINETY
        && SUMATRR <= TWO_HUNDRED_TEN) { return true; }
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardImage={ cardImage }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
