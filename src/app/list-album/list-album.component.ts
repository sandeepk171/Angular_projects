import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ListAlbumService } from './list-album.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-album',
  templateUrl: './list-album.component.html',
  styleUrls: ['./list-album.component.scss']

})
export class ListAlbumComponent implements OnInit {
  list: any;
  products: any;



  elements = [1];
  count = 1;

  constructor(private _listService: ListAlbumService, private _router: Router) { }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {

    this._listService.getData().subscribe({
      next: (response) => {
        this.list = response;
      },
      error: (error) => {
        alert('There was an error in retrieving data from the server');
      }
    });

  }

  toogleWishlist(product: any) {
    if (this.isWishlist(product)) {
      this._listService.RemoveWishlist(product)
    }
    else {
      this._listService.AddWishlist(product)
    }
  }

  isWishlist(list: any): boolean { return this._listService.isInwishlist(list); }

  back() { this._router.navigateByUrl('/'); }

  //for loading on page scroll
  @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.elements = [...this.elements, this.count++];
    }
  }

  bottomReached(): boolean {
    return (window.innerHeight + window.scrollY) >= document.body.offsetHeight;
  }


}
