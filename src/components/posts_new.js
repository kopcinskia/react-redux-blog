import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // navigate to index after creating post
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <h4>Create A New Post</h4>

        <div className={ `form-group ${ title.touched && title.invalid ? 'has-danger' : '' } ${ title.touched && title.valid ? 'has-success' : '' }` }>
          <label className="form-control-label">Title</label>
          <input type="text" className="form-control" { ...title } />
          <div className="form-control-feedback text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={ `form-group ${ categories.touched && categories.invalid ? 'has-danger' : '' } ${ categories.touched && categories.valid ? 'has-success' : '' }` }>
          <label className="form-control-label">Categories</label>
          <input type="text" className="form-control" { ...categories } />
          <div className="form-control-feedback text-help">
            { categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={ `form-group ${ content.touched && content.invalid ? 'has-danger' : '' } ${ content.touched && content.valid ? 'has-success' : '' }` }>
          <label className="form-control-label">Content</label>
          <textarea className="form-control" rows="12" { ...content } />
          <div className="form-control-feedback text-help">
            { content.touched ? content.error : '' }
          </div>
        </div>

        <button type="submit" className="btn btn-outline-primary">Submit</button>
        <Link to="/" className="btn btn-outline-danger float-xs-right">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter title';
  }

  if (!values.categories) {
    errors.categories = 'Enter categories';
  }

  if (!values.content) {
    errors.content = 'Enter content';
  }
  
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);