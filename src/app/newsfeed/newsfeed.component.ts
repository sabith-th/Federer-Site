import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from './newsfeed.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
  providers: [NewsfeedService]
})
export class NewsfeedComponent implements OnInit {
  errorMessage: string;
  news: Object[] = [];
  page: number = 0;

  constructor(private newsfeedService: NewsfeedService) { }

  ngOnInit() {
     this.getNews();
  }

  getNews(){
    this.newsfeedService.getNews(this.page)
                        .subscribe(
                          news => this.news = this.news.concat(news),
                          error => this.errorMessage = <any>error
                        );
  }

  onScroll(){
    this.page += 1;
    this.getNews();
  }

}
