import React from 'react';
import Proptypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      // hasTrunfo,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form>
        <label htmlFor="card_name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="nome"
            id="card_name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="card_description">
          Descrição:
          <textarea
            data-testid="description-input"
            name="descricao"
            id="card_description"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        Atributo1:
        <label htmlFor="attr1">
          <input
            data-testid="attr1-input"
            type="number"
            name="atributo1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr2">
          Atributo2:
          <input
            data-testid="attr2-input"
            type="number"
            name="atributo2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="attr3">
          Atributo3:
          <input
            data-testid="attr3-input"
            type="number"
            name="atributo3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image-src">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imagem"
            id="image-src"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select
            data-testid="rare-input"
            name="raridade"
            id="rarity"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="superTrunfo"
            id="trunfo"
            checked={ cardTrunfo }
            onChange={ onInputChange }
          />
          É super Trunfo?
        </label>
        <button
          data-testid="save-button"
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onInputChange: Proptypes.func.isRequired,
  onSaveButtonClick: Proptypes.func.isRequired,
  cardAttr1: Proptypes.string.isRequired,
  cardAttr2: Proptypes.string.isRequired,
  cardAttr3: Proptypes.string.isRequired,
  cardDescription: Proptypes.string.isRequired,
  cardImage: Proptypes.string.isRequired,
  cardName: Proptypes.string.isRequired,
  cardRare: Proptypes.string.isRequired,
  cardTrunfo: Proptypes.bool.isRequired,
  // hasTrunfo: Proptypes.bool.isRequired,
  isSaveButtonDisabled: Proptypes.bool.isRequired,
};

export default Form;
