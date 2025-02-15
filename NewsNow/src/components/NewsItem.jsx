import React from 'react'
import Image from "../assets/download.jpg";

const NewsItem = ({title,description,src,url}) => {
  return (
    <>
      
          <div className="col-md-4 mb-4 d-flex justify-content-center ">
            <div className="card border border-1 shadow p-3 mb-5 bg-body rounded" style={{ maxWidth:"345px", padding: "10px"}}>
              <img src={src?src:Image} className="card-img-top" alt="..."/>
               <div className="card-body">
               <h5 className="card-title">{title.slice(0,50)}</h5>
               <p className="card-text">{description ? description.slice(0, 90) : "... 📢 Read the full article below! Get the latest insights and updates. Click to learn more! 🚀"}</p>
               <a href={url} className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default NewsItem