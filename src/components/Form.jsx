import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      /* hasTrunfo, */
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        ADICIONE NOVA CARTA
        <form>
          <label htmlFor="name-input">
            Nome
            <br />
            <input
              type="text"
              name="name-input"
              data-testid="name-input"
              id="name-input"
              placeholder="Digite o nome da carta"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="description-input">
            Descrição
            <br />
            <textarea
              name="description-input"
              data-testid="description-input"
              id="description-input"
              placeholder="Digite a descrição da carta"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr1-input">
            Attr1
            <input
              type="number"
              name="attr1-input"
              data-testid="attr1-input"
              id="attr1-input"
              placeholder="Digite o valor do atributo 1 aqui"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr1-input">
            Attr2
            <input
              type="number"
              name="attr2-input"
              data-testid="attr2-input"
              id="attr2-input"
              placeholder="Digite o valor do atributo 2 aqui"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="attr3-input">
            Attr3
            <input
              type="number"
              name="attr3-input"
              data-testid="attr3-input"
              id="attr3-input"
              placeholder="Digite o valor do atributo 3 aqui"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="attr3-input">
            <br />
            <input
              type="text"
              name="image-input"
              data-testid="image-input"
              id="image-input"
              placeholder="Inserir o caminho para imagem da carta"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <br />
          <label htmlFor="rare-input">
            Raridade
            <select
              name="favoritePlace"
              data-testid="rare-input"
              id="rare-input"
              placeholder="Raridade"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            <br />
            Super Trunfo
            <input
              type="checkbox"
              name="trunfo-input"
              data-testid="trunfo-input"
              id="trunfo-input"
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
