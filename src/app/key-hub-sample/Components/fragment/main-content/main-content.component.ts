import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  of = true;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.of = false;
    }, 2000);
  }

}
