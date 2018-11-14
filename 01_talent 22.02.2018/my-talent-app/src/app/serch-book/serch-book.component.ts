import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {BookService} from './../shared/services/book.service';
import { RootObject } from '../shared/models/book.model';
@Component({
  selector: 'app-serch-book',
  templateUrl: './serch-book.component.html',
  styleUrls: ['./serch-book.component.css'],
})
export class SerchBookComponent implements OnInit {
  @ViewChild("bookName")cView:ElementRef;
  constructor(private bookService:BookService) { }

  ngOnInit() {}

  public filterEmit():void{
      this.bookService.
        searchBookByQuery(this.cView.nativeElement.value,(x)=>{
            this.cView.nativeElement.value=""; //prefer not to use this way - use bind
            this.bookService.serchEmitter.emit(x);

        });
  }
}
