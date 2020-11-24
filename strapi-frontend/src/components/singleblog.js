import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
class Singleblog extends Component {
    constructor() {
        super()
        this.state = {
            singleblog: [],
            blogimage: ''
        }
    }
    componentDidMount() {
        fetch(`http://localhost:1337/Blogs/${this.props.match.params.postid}`).then((response) => {
            if (response.status >= 400) {
                throw new Error("No respnse from server")
            }
            return response.json();
        }).then((blog) => {
            this.setState({ singleblog: blog });
            this.setState({ blogimage: blog.featuredimage.url })
        })
    }
    render() {
        const { id, blogtitle, blogcontent, categories } = this.state.Singleblog
        return (
            <div className="jumbotron">
                <h1 className="display-8">{blogtitle}</h1>
                <img src={`http://localhost:1337${this.state.blogimage}`}/>
                <p className="lead">{blogcontent}</p>

            </div>
        )
    }
}
export default Singleblog