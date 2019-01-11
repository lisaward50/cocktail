import React     from 'react';
import DefaultLayout from '../DefaultLayout';

const DrinkList = ( drinks ) => {
  console.log('this is drink:', drinks);
  const drinkArr = drinks.drinks.map((drink,i) => {
    return (
        <div key={i}>
        <img className="image is-128x128" src={drink.dataValues.image}/>
        <h3>{drink.dataValues.drink_name}</h3>
        <p>{drink.dataValues.ingredients}</p>
        <p><i>{drink.dataValues.instructions}</i></p>
        <div className="tags">
          <a className="tag is-primary" href="#">Edit Drink</a>
          <a className="tag is-primary" href="#">Delete Drink</a>
        </div>
        <br/>
        <br/>
        </div>
      )
  })

  return (
<DefaultLayout title="Drinks App">
  <article className="media box">
  <div className="media-content">
  <div className="content">
    <p>
      <br/>    
      <br/>
      {drinkArr}
    </p>
  </div>
  </div>
  </article>
  <article className="media box">
  <div className="media-content">
  <div className="content">
    <p>
    </p>
    </div>
      <form method="POST" action="/drinks">
        <div className="field">
          <label className="label">New Drink Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter new drink name, e.g. Screwdriver"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Ingredients</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter list of ingredients"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Instructions</label>
          <div className="control">
            <input className="input" type="text" placeholder="Provide instructions"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input className="input" type="text" placeholder="Provide an image link"/>
          </div>
        </div>
        <input
          type="submit"
          className="button is-block is-primary is-outlined is-medium is-quarterwidth"
          value="Add New Drink"
        />
      </form>
    </div>
    </article>
</DefaultLayout>
  );
}

export default DrinkList;