import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "England vs India cricket LIVE: Third Test, day three, Lord's - scores, radio & highlights",
            "description": "England face India in the third Test at Lord's - follow live scores, radio commentary, video highlights and updates.",
            "url": "http://www.bbc.co.uk/sport/cricket/live/cly1xzp5mjkt",
            "urlToImage": "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/714c/live/058a1b80-5e7f-11f0-b5c5-012c5796682d.jpg",
            "publishedAt": "2025-07-12T09:37:30.8533906Z",
            "content": "Yes, it's another glorious sunny day at Lord's, and we'll resume on day three of the third Test at Lord's with India on 145-3, still 242 runs behind England after they were bowled out for 387 yesterd… [+336 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
            <div className="col-md-4">
                <NewsItem title = "My Title" description = "My Description" imageUrl = "https://ichef.bbci.co.uk/ace/branded_sport/1200/cpsprodpb/714c/live/058a1b80-5e7f-11f0-b5c5-012c5796682d.jpg" />
            </div>

            <div className="col-md-4">
                <NewsItem title = "My Title" description = "My Description" />
            </div>

            <div className="col-md-4">
                <NewsItem title = "My Title" description = "My Description" />
            </div>
            
        </div>
      </div>
    )
  }
}
