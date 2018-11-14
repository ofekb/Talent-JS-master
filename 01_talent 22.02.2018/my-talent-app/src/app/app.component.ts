import { Component, OnInit } from '@angular/core';
import { BookService } from './shared/services/book.service';
import { Item } from './shared/models/book.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private bookService: BookService) { }
    currentBook: any;
    image:string;
    ngOnInit() {
        this.bookService.serchEmitter.subscribe(x => {
            this.currentBook = null;
            this.image="";
        })
    }

    public onItemChange(item: Item): void {
        this.currentBook = item.getIterator();
        this.image=item.volumeInfo.imageLinks.smallThumbnail;
    }
}
