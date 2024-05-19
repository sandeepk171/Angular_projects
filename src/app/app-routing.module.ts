import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListAlbumComponent } from './list-album/list-album.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'list', component: ListAlbumComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
