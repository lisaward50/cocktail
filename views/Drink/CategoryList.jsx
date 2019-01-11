import React     from 'react';
import DefaultLayout from '../DefaultLayout';

const CategoryList = ( categories ) => {
  console.log('this is category:', categories);
  const categoryArr = categories.categories.map((category,i) => {
    return (
        <div key={i}>
        <h3>{category.dataValues.category_name}</h3>
        <p><i>{category.dataValues.description}</i></p>
        <div className="tags">
          <a className="tag is-primary" href="#">Edit Category</a>
          <a className="tag is-primary" href="#">Delete Category</a>
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
      {categoryArr}
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
      <form method="POST" action="/categories">
        <div className="field">
          <label className="label">New Category Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter drink category, e.g. classic cocktails"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <input className="input" type="text" placeholder="Enter short description"/>
          </div>
        </div>
        <input
          type="submit"
          className="button is-block is-primary is-outlined is-medium is-quarterwidth"
          value="Add New Category"
        />
      </form>
    </div>
   </article>
</DefaultLayout>
  );
}

export default CategoryList;