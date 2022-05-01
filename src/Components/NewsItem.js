import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
     let {title, description, imageUrl, newsUrl} = this.props; 
    return (<>
             <div>
                <a className="card text-decoration-none" >
                <a href={newsUrl} target="_blank"><img src={!imageUrl?"https://images.hindustantimes.com/tech/img/2022/04/30/1600x900/2_1651217259728_1651323495328.jpg":imageUrl} className="card-img-top" alt="..."/></a>  
                    <div className="card-body text-dark">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                 </a>
            </div>
            </>
    )
  }
}

export default NewsItem