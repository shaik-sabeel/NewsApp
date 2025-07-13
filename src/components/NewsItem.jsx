import React, { Component } from 'react'

export default class NewsItem extends Component {

    render() {
        let {title, description} = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/714c/live/058a1b80-5e7f-11f0-b5c5-012c5796682d.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">
           
            </a>
          </div>
        </div>
      </div>
    )
  }
}
