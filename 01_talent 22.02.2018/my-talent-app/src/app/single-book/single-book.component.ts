import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../shared/models/book.model';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {

  @Input("selectedBook")book:any;
  @Input("bookImg")img:string;
  constructor() { }
  ngOnInit() {
     
  }

}
