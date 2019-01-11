import React from 'react';
import DefaultLayout from './DefaultLayout';

export default ({ type }) => (
  <DefaultLayout title="Drinks App">
    <section className="hero is-fullheight is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-white">Hello Cocktail Enthusiast!</h3>
            <p className="subtitle has-text-white">Please pick a user type to proceed.</p>
            <div className="box">
              <form method="GET" action="/drinks">
                <input
                  type="submit"
                  className="button is-block is-primary is-outlined is-large is-fullwidth"
                  value="Drinker"
                />
              </form>
              <br/>
              <form method="GET" action="/categories">
                <input
                  type="submit"
                  className="button is-block is-primary is-outlined is-large is-fullwidth"
                  value="Bartender"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
);
