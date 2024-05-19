import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Products } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ListAlbumService {

  private url: string = "https://jsonplaceholder.typicode.com/albums/1/photos?_page=1&amp;_limit=10";
  products: Products[] = [];
  private storagewishListItemKey = 'wishlistItems';

  constructor(private http: HttpClient) {
    const storedWishlistItems = localStorage.getItem(this.storagewishListItemKey);
    if (storedWishlistItems){
      this.products = JSON.parse(storedWishlistItems);
      console.log(this.products );
    }
   }

  getData(): Observable<string> {
    return this.http.get<string>(`${this.url}`);
  }

  AddWishlist(item: any) {
      this.products.push(item);
      localStorage.setItem(this.storagewishListItemKey, JSON.stringify(this.products))
  }

  RemoveWishlist(item: any) {
    const index = this.products.indexOf(item.id);
    if (index > -1) { // only splice array when item is found
      this.products.splice(index, 1); 
      localStorage.setItem(this.storagewishListItemKey,JSON.stringify(this.products))
    }

  }

  isInwishlist (list: any): boolean{
    return this.products.some(item=> item.id === list.id);
  }
}
