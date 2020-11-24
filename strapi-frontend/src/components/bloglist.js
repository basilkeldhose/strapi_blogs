import React, { Component } from 'react';
import Bloglistitem from './bloglistitem'
import axios from 'axios'

class Bloglist extends Component{
    constructor(){
        super()
        this.state={
            blogs:[]
        }
    }

    componetWillMount(){
        axios.get('http://localhost:1337/Blogs').then((response)=>{
            if(response.status >=400){
                throw new Error("No respnse from server")
            }
            return response.json();
        }).then((blogs)=>{
            this.setState({blogs:blogs});
        })

    }
    render(){
        return(
            <div>
                {
                    this.state.blogs.map(({id,blogtitile,blogcontent,featuredimage,categories})=>(
                    <div className="container">
                        <div className="row">
                <Bloglistitem key={id}blogid={id} blogtitile={blogtitile} blogcontent={blogcontent} featuredimage={featuredimage} categories ={categories}/>

                        </div>
                    </div>
        ))
                }

            </div>
        )
    }
}
export default Bloglist;