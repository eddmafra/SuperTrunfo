import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const defaultState = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
  hasTrunfo: false,
};
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...defaultState,
      deckOfCards: [],
    };
  }

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    // console.log(this.state);
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    }, () => {
      this.setState({ isSaveButtonDisabled: !this.validateButton() });
    });
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      deckOfCards,
    } = this.state;

    const savedCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState({
      deckOfCards: [...deckOfCards, savedCard],
      ...defaultState,
      hasTrunfo,
    }, () => this.validateTrunfo());
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

  validateTrunfo = () => {
    const { deckOfCards } = this.state;
    if (deckOfCards.some((e) => e.cardTrunfo === true)) {
      return this.setState({ hasTrunfo: true });
    }
    this.setState({ hasTrunfo: false });
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
      deckOfCards,
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
        <section className="deck">
          {
            deckOfCards.map((e, i) => (
              <div key={ i }>
                <Card
                  cardName={ e.cardName }
                  cardDescription={ e.cardDescription }
                  cardImage={ e.cardImage }
                  cardAttr1={ e.cardAttr1 }
                  cardAttr2={ e.cardAttr2 }
                  cardAttr3={ e.cardAttr3 }
                  cardRare={ e.cardRare }
                  cardTrunfo={ e.cardTrunfo }
                />
              </div>
            ))
          }
        </section>
      </div>
    );
  }
}

export default App;
