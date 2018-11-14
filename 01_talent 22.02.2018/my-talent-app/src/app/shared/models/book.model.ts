export interface RootObject {
    items: Item[];
}



export class Item {
    id: string;
    volumeInfo: VolumeInfo;
    saleInfo?: SaleInfo;

    public reduceItem():string{
        return Object.values(this.volumeInfo).reduce(
            (prevRes,current)=>
            prevRes+ ((`${current}`!= "[object Object]")?` ${current}\n`:'')
        );
    }

    public *getIterator():Iterable<string> {
        for (let x in this.volumeInfo) {
            if (typeof (this.volumeInfo[x]) !== "object")
                yield `${x}: 
              ${this.volumeInfo[x].toString().substring(0, 200)}`;
        }
    }
}


export interface VolumeInfo {
    title?: string;
    subtitle?: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    pageCount?: number;
    imageLinks?: ImageLinks;
    language?: string;
}


export interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
}


export interface ListPrice {
    amount?: number;
    currencyCode?: string;
}

export interface SaleInfo {
    listPrice?: ListPrice;
}

