import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject, Item } from './../models/book.model'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class BookService {


    public serchEmitter: EventEmitter<RootObject> = 
                        new EventEmitter<RootObject>();
    

    searchInAction:Boolean=false;
    constructor(private httpClient: HttpClient) { }


    public searchBookByQuery(str: string,callBack:(x:RootObject)=>void): void {
        this.searchInAction=true;
        this.httpClient
            .get<RootObject>(`https://www.googleapis.com/books/v1/volumes?q=${str}&maxResults=40&fields=items(id%2CsaleInfo%2FlistPrice%2CvolumeInfo(authors%2Cdescription%2CimageLinks(smallThumbnail%2Cthumbnail)%2Clanguage%2CmainCategory%2CpageCount%2CpublishedDate%2Cpublisher%2Csubtitle%2Ctitle))`)
            .subscribe((x)=>{
                this.searchInAction=false;               
                x.items=x.items.map((el)=>Object.assign(new Item(),el));
                callBack(x);
        });
    }

}


