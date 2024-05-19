import { Component, OnInit } from '@angular/core';
import { ListAlbumService } from 'src/app/list-album/list-album.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit  {

  showingWishlistOnly: any;

  constructor(private _listService: ListAlbumService) { }

  ngOnInit(): void {
    this.getList();
  }

  private getList() {

   this.showingWishlistOnly =  this._listService.products;

  }

}
