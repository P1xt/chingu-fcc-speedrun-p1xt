import { Component, OnInit } from '@angular/core';
import { GetWikipediaService } from '../../services/wikipedia.service';

@Component({
  selector: 'app-wiki-viewer',
  templateUrl: './wiki-viewer.component.html',
  styleUrls: ['./wiki-viewer.component.scss']
})
export class WikiViewerComponent implements OnInit {
  query = "artificial intelligence";
  entries: any = [];
  constructor(private getWikipediaService: GetWikipediaService) { }

  ngOnInit() {
  }
  getEntries() {
    this.entries = [];
    this.getWikipediaService.searchWiki(this.query)
      .subscribe(entries => {
        var articles = entries.query.pages;
        for (let key in articles) {
          this.entries.push({ title: articles[key]['title'], text: articles[key]['extract'], url: articles[key]['fullurl'] })
        }
      })
   }
}
