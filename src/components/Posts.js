import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }

    // componentWillReceiveProps(nextProps) {
    //     if (nextProps.newPost) {
    //         this.props.posts.unshift(nextProps.newPost);
    //     }
    // }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log(nextProps)
    //     return null
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.newPost.id) {
    //         console.log(this.state)
    //         console.log(this.props.newPost.id)
    //         prevProps.posts.unshift({ id: 102, title: 'sdfsdf', body: 'sdflsdfjsdkjf', userId: 1 })
    //     }
    // }

    render() {
        let postItems = this.props.posts.map(post => (
            <div key={ post.id }>
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                { postItems }
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
