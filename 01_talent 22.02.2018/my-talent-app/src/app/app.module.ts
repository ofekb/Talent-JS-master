import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { SerchBookComponent } from './serch-book/serch-book.component';
import { BookListComponent } from './book-list/book-list.component'


import {BookService} from './shared/services/book.service';
import { SingleBookComponent } from './single-book/single-book.component';

@NgModule({
  declarations: [
    AppComponent,
    SerchBookComponent,
    BookListComponent,
    SingleBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
