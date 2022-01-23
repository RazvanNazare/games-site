import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { FavoriteGamesComponent } from './components/favorite-games/favorite-games.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'search/:game-search',
    component:HomeComponent
  },
  {
    path:'details/:id',
    component:DetailsComponent
  },
  {
    path:'favorite-games',
    component:FavoriteGamesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
