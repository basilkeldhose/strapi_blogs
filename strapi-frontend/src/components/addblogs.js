import React, { Component } from 'react'
import axios from 'axios'
class Addblog extends Component {
    constructor(props) {
        super(props)
        this.state = {
            blogtitle: "",
            blogcontent: "",
            featuredimage: "",
            categories: ""
        }
    }
    changeHandler =(event)=>{
        this.setState({
            blogtitle:event.target.value,
            blogcontent:event.target.value,
            featuredimage:event.target.value,
            category:event.target.value
        });
    }

    submitHandler = async e => {
        e.preventdefault();
        try {
            const response = axios.post("http://localhost:1337/blogs",
             this.state);
            console.lofg(response);
            alert("Blog added sucessfully")

        }
        catch (error) {
            console.log(error)
        }

    }
    render() {
        const { error,blogtitle, blogcontent, featuredimage, categories } = this.state
        if (error) {
            return <div>An error occured: {error.message}</div>;
          }
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                        <h1>Add Blog</h1>
                        <div className="form-group">
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Blog Title</label>
                                <input type="text" className="form-control-text" placeholder="blog title" name="blogtitle" value={blogtitle} onChange={this.changeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Example textarea</label>
                                <textarea className="form-control-textarea" id="exampleTextarea" rows="3" name="blogcontent" value={blogcontent} onChange={this.changeHandler}></textarea>
                            </div>
                            <div className="form-group">
                                <label>Select Image</label>
                                <input type="file" className="form-control-fileupload" id="exampleInputFile" aria-describedby="fileHelp" name="featuredimage" value={featuredimage} onChange={this.changeHandler}/>
                            </div>
                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Which Category</label>
                                <input type="text" className="orm-control-plaintext" placeholder="type category" name="categories" value={categories} onChange={this.changeHandler} />
                            </div>
                            <input type="submit" className="btn btn-primary" value="Add Blog" />
                        </div>
                </form>
            </div>
        )
    }
}
export default Addblog