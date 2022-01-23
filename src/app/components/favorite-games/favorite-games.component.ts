import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { FavoriteGame } from 'src/app/models/favorite-game';

@Component({
  selector: 'app-favorite-games',
  templateUrl: './favorite-games.component.html',
  styleUrls: ['./favorite-games.component.scss']
})
export class FavoriteGamesComponent implements OnInit {
  public games: FavoriteGame[];

  constructor() { }

  ngOnInit(): void {
    var favoriteGames = JSON.parse(localStorage.getItem("favoriteGames")?? "No games found") ;
    this.games = favoriteGames ?? "No games found";
    }

  deleteAllFavoriteGames(): void {
    localStorage.clear();
  }

}


