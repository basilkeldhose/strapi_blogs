import React from 'react';
import { link } from 'react-router-dom'

const Bloglistitem = ({ blogid, blogtitile, blogcontent, featuredimage, categories }) => {
    const category = categories.map((category) => {
        return category.categoryname
    })
    return (
        <div className="col-12">
            <div className="border-secondary mb-3">
                <div className="card-header">
                    {category}
                </div>
                <div className="card-body">
                    <img width="100%" src={`http://localhosy1337${featuredimage.formats.medium.url}`} />
                    <h4 className="card-titile">{blogtitile}</h4>
                </div>
                <link to={`/single/${blogid}`} className="btn btn-primary btn-lg">Load more</link>
            </div>

        </div>
    )
}
export default Bloglistitem