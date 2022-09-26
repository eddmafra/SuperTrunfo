import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="card_name">
          Nome:
          <input
            data-testid="name-input"
            type="text"
            name="nome"
            id="card_name"
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
          />
        </label>
        Atributo1:
        <label htmlFor="attr1">
          <input
            data-testid="attr1-input"
            type="number"
            name="atributo1"
            id="attr1"
          />
        </label>
        <label htmlFor="attr2">
          Atributo2:
          <input
            data-testid="attr2-input"
            type="number"
            name="atributo2"
            id="attr2"
          />
        </label>
        <label htmlFor="attr3">
          Atributo3:
          <input
            data-testid="attr3-input"
            type="number"
            name="atributo3"
            id="attr3"
          />
        </label>
        <label htmlFor="image-src">
          Imagem:
          <input
            data-testid="image-input"
            type="text"
            name="imagem"
            id="image-src"
          />
        </label>
        <label htmlFor="rarity">
          Raridade:
          <select
            data-testid="rare-input"
            name="raridade"
            id="rarity"
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
            name="ehTrunfo"
            id="trunfo"
          />
          É super Trunfo?
        </label>
        <button data-testid="save-button" type="button"> Salvar </button>
      </form>
    );
  }
}

export default Form;
