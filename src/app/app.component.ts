import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My YouTube Video';
  private apiLoaded = false;

  constructor(@Inject(DOCUMENT) private _document: Document) {

  }
  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      this._document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}
