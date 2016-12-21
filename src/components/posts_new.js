import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.props.createPost) }>
        <h4>Create A New Post</h4>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" { ...title } />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" { ...categories } />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" rows="12" { ...content } />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }

}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);