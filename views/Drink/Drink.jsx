import React     from 'react';
import DefaultLayout from '../DefaultLayout';

const Drink = ( {drink} ) => {
 console.log(drink)
  return (
 <DefaultLayout title="Drinks App">
  <article className="media box">
  <div className="media-content">
  <div className="content">
    <p>
    <strong>{drink.drink_name}</strong>
      <br/>
      <p>{drink.ingredients}</p>
      <p><i>{drink.instructions}</i></p>
    </p>
  </div>
  <figure className="media-left">
      <p className="image is-128x128">
        <img src={drink.image}/>
      </p>
  </figure>
  <br/>
  <nav className="level is-mobile">
  <div className="tags">
    <a className="tag is-primary" href="/drinks/">Return to List</a>
    <a className="tag is-primary" href="#">Edit Drink</a>
    <a className="tag is-primary" href="#">Delete Drink</a>
  </div>
  </nav>
  </div>
  </article>
</DefaultLayout>
  );
}

export default Drink;