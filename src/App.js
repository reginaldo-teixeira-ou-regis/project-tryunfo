import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedDeckCards: [],
      filterName: '',
      filterRare: 'todas',
      /* filterTrunfo: false, */
    };
  }

  ValidationInput = () => {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.state;

    const errorCases = [
      !cardName.length,
      !cardDescription.length,
      !cardImage.length,
      !cardRare.length,
    ];

    const validationTextLength = errorCases.every((error) => error !== true);

    const totalSun = 211;
    const pointsMax = 90;
    const newCardAttr1 = Number(cardAttr1);
    const newCardAttr2 = Number(cardAttr2);
    const newCardAttr3 = Number(cardAttr3);
    const maxPoint = newCardAttr1 > pointsMax
    || newCardAttr2 > pointsMax
    || newCardAttr3 > pointsMax
    || newCardAttr1 < 0
    || newCardAttr2 < 0
    || newCardAttr3 < 0;

    if ((newCardAttr1 + newCardAttr2 + newCardAttr3) < totalSun
      && validationTextLength
      && !maxPoint) {
      this.setState({
        isSaveButtonDisabled: false,
      });
      return;
    }
    this.setState({
      isSaveButtonDisabled: true,
    });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.ValidationInput);
  };

  clearFields = () => {
    this.setState((prevState) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: prevState.savedDeckCards.some((card) => card.cardTrunfo),
    }), this.ValidationInput);
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
      savedDeckCards,
    } = this.state;

    const saveCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    const newSavedCards = [...savedDeckCards, saveCard];

    this.setState({ savedDeckCards: newSavedCards }, this.clearFields);
  };

  buttonExcluir = (index) => {
    const { savedDeckCards } = this.state;
    const updatedDeck = savedDeckCards;
    updatedDeck.splice(index, 1);
    this.setState({
      savedDeckCards: updatedDeck,
    });
    this.setState({
      hasTrunfo: savedDeckCards.some((card) => card.cardTrunfo),
    });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      savedDeckCards,
      isSaveButtonDisabled,
      filterName,
      filterRare } = this.state;

    const defaultProps = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
    };

    let filterDeck = savedDeckCards
      .filter((name) => (name.cardName.includes(filterName)));
    filterDeck = filterRare === 'todas' ? filterDeck : filterDeck
      .filter((rare) => rare.cardRare === filterRare);

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...defaultProps }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...defaultProps } />
        <h2>TODAS AS CARTAS</h2>
        <label htmlFor="filterName">
          Filtrar por nome
          <input
            type="text"
            name="filterName"
            data-testid="name-filter"
            id="filterName"
            placeholder="Digite o nome da carta desejada"
            value={ filterName }
            onChange={ this.onInputChange }
          />
        </label>
        <label htmlFor="filterRare">
          Filtrar por raridade
          <select
            name="filterRare"
            data-testid="rare-filter"
            id="filterRare"
            value={ filterRare }
            onChange={ this.onInputChange }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Filtrar por Super Trunfo
          <input
            type="checkbox"
            name="trunfoFilter"
            data-testid="trunfo-filter"
            id="trunfoFilter"
          />
        </label>
        { filterDeck.map((cardSaved, index) => (
          <section key={ cardSaved.cardName + index }>
            <Card
              { ...cardSaved }
            />
            <button
              type="button"
              onClick={ () => this.buttonExcluir(index) }
              data-testid="delete-button"
            >
              Excluir
            </button>
          </section>
        ))}
      </div>
    );
  }
}

export default App;
