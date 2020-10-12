import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer';

class Restaurant extends Component {

  handleRemove = () => {
    this.props.removeRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;


    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleRemove}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
