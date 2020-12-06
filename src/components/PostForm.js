import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createPost } from '../actions/postActions'

class PostForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = e => {
      e.preventDefault()
      const post = {
        title: this.state.title,
        body: this.state.body,
        userId: 1
      }

      this.props.createPost(post)
    }

    render() {
        return (
          <div>
            <h1>Add Post</h1>
            <form onSubmit={ this.onSubmit }>
              <div>
                <label htmlFor="title">Title</label>
                <br />
                <input onChange={ this.onChange } type="text" name="title" id="title" />
              </div>
              <div>
                <label htmlFor="body">Body</label>
                <br />
                <textarea onChange={ this.onChange } name="body" id="body" />
              </div>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        );
    }
}

PostForm.protoTypes = {
  createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(PostForm)
