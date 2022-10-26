import { Component } from 'react';

class Form extends Component {
  render() {
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
            />
          </label>
          <button
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

/* data-testid="image-input" */
