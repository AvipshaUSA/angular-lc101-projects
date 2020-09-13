import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-link',
  templateUrl: './fav-link.component.html',
  styleUrls: ['./fav-link.component.css']
})
export class FavLinkComponent implements OnInit {
 favLink = ['https://www.amazon.com' ,'https://www.google.com' ]
  constructor() { }

  ngOnInit() {
  }

}
