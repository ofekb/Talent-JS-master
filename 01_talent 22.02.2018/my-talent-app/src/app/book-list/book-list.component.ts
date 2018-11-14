import { Item } from './../shared/models/book.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BookService } from '../shared/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
   @Output("onChangeBook") changeBookEmitter:EventEmitter<Item>
                            =new EventEmitter<Item>();

    bookList:Item[]=[];
    constructor(public bookService:BookService) { }

    ngOnInit() {
      
      this.bookService.serchEmitter.subscribe( (x)=>{        
          this.bookList=x.items;
      });

      this.bookService.
           searchBookByQuery("a",(x)=>{this.bookList=x.items;});
    
    }


    public emitBookChange(item:Item):void{
        this.changeBookEmitter.emit(item);
    }
  
}
