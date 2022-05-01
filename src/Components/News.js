import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor(){
    super()
    console.log("Hello Constructor from News Component");
    this.state = {
      articles: [],
      loading:true
    }
}

async componentDidMount() {
let url = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=37aca35a1c154df49e6aab9bf5eb9028&page=1&pageSize=20";
let data = await fetch (url);
let parsedData = await data.json()
console.log(parsedData);
this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
}

handlePrevClick = async () => {
  console.log("Previous");
  let url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=37aca35a1c154df49e6aab9bf5eb9028&page=${this.state.page - 1}`;
  let data = await fetch (url);
  let parsedData = await data.json()
  console.log(parsedData);
  
  this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })

}

handleNextClick = async () => {
  console.log("Next");
  if(this.state.page + 1 > Math.ceil (this.state.totalResults/20)){

      } else{
    let url = `https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=37aca35a1c154df49e6aab9bf5eb9028&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch (url);
    let parsedData = await data.json()
    console.log(parsedData);

    this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles
      })
    }

}

  render() {
    return (
       <div className='container my-3'> 
          <h1>Daily News - Top Headlines</h1>
              <div className="grid">
                    {this.state.articles.map((element) => {
                      return <div className="grid-item" key ={element.url}>
                      <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.description.slice(0,100):""} imageUrl ={element.urlToImage} newsUrl={element.url}/>
                    </div>
                  }          
                  )}
        </div>
               <div className="container d-flex justify-content-between my-3">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
              </div> 
              
              {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn" onClick={this.handleNextClick}>Next &rarr;</button>
              </div> */}

        </div>
    )
  }
}

export default News