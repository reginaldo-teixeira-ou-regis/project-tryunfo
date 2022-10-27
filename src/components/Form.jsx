import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { onInputChange, cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo, */
      isSaveButtonDisabled,
      onSaveButtonClick } = this.props;
    return (
      <div>
        ADICIONE NOVA CARTA
        <form>
          <label htmlFor="cardName">
            Nome
            <br />
            <input
              type="text"
              name="cardName"
              data-testid="name-input"
              id="cardName"
              placeholder="Digite o nome da carta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardDescription">
            Descrição
            <br />
            <textarea
              name="cardDescription"
              data-testid="description-input"
              id="cardDescription"
              placeholder="Digite a descrição da carta"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardAttr1">
            Attr1
            <input
              type="number"
              name="cardAttr1"
              data-testid="attr1-input"
              id="cardAttr1"
              placeholder="Digite o valor do atributo 1 aqui"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardAttr2">
            Attr2
            <input
              type="number"
              name="cardAttr2"
              data-testid="attr2-input"
              id="cardAttr2"
              placeholder="Digite o valor do atributo 2 aqui"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardAttr3">
            Attr3
            <input
              type="number"
              name="cardAttr3"
              data-testid="attr3-input"
              id="cardAttr3"
              placeholder="Digite o valor do atributo 3 aqui"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            <br />
            <input
              type="text"
              name="cardImage"
              data-testid="image-input"
              id="cardImage"
              placeholder="Inserir o caminho para imagem da carta"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              data-testid="rare-input"
              id="cardRare"
              placeholder="Raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="cardTrunfo">
            <br />
            Super Trunfo
            <input
              type="checkbox"
              name="cardTrunfo"
              data-testid="trunfo-input"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.boolean,
  hasTrunfo: PropTypes.boolean,
  isSaveButtonDisabled: PropTypes.boolean,
  onInputChange: PropTypes.callback,
  onSaveButtonClick: PropTypes.callback,
}.isRequired;
