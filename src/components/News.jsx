import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  componentDidMount = async () => {
   let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=94cb54ecc0db4bb88a7c0d110e8ca65f"
   let data = await fetch(url);
   let parsedData = await data.json();
   this.setState({ articles: parsedData.articles, loading: false });
  }
  
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row my-5">

          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title?element.title.slice(0, 45) + "...":""}
                description={element.description?element.description.slice(0, 88) + "...":""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
