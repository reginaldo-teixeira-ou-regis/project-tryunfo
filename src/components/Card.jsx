import { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  DisplayCardTrunfo() {
    const { cardTrunfo } = this.props;
    return (cardTrunfo) ? (<p data-testid="trunfo-card">Super Trunfo</p>) : '';
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare } = this.props;
    return (
      <div>
        <p data-testid="name-card">
          {cardName}
        </p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card">
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          {cardRare}
        </p>
        { this.DisplayCardTrunfo() }
      </div>
    );
  }
}

export default Card;

Card.propTypes = {
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
