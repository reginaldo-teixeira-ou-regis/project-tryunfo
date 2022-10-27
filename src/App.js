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
    };
  }

  handleClick() {

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
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: prev.savedDeckCards.some((card) => card.cardTrunfo),
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
      isSaveButtonDisabled } = this.state;

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
      handleClick: this.handleClick,
    };
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...defaultProps }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card { ...defaultProps } />
      </div>
    );
  }
}

export default App;
