import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page : 1,

    };
  }

  componentDidMount = async () => {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=94cb54ecc0db4bb88a7c0d110e8ca65f&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  };

  handleNextClick = async () => {

    if(this.state.page + 1 > Math.ceil(this.state.totalResults / 20)){

    }
    else{
 
    let url =
      `https://newsapi.org/v2/everything?q=apple&from=2025-07-19&to=2025-07-19&sortBy=popularity&apiKey=94cb54ecc0db4bb88a7c0d110e8ca65f&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  }
  };

  handlePreviousClick = async () => {
    console.log("Previous");
    let url =
      `https://newsapi.org/v2/everything?q=apple&from=2025-07-19&to=2025-07-19&sortBy=popularity&apiKey=94cb54ecc0db4bb88a7c0d110e8ca65f&page=${this.state.page -1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row my-5">
          {this.state.articles &&
            this.state.articles.length > 0 &&
            this.state.articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={
                    element.title ? element.title.slice(0, 45) + "..." : ""
                  }
                  description={
                    element.description
                      ? element.description.slice(0, 88) + "..."
                      : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
