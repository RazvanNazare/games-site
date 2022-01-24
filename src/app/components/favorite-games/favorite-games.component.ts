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
    let itemsFromStorage = localStorage.getItem('favoriteGames');
    this.games = itemsFromStorage ? JSON.parse(itemsFromStorage) : [];
  }

  deleteAllFavoriteGames(): void {
    localStorage.clear();
    this.games = [];
  }

  deleteOneGame(toDeleteGame: FavoriteGame): void {

    this.games.splice(this.games.indexOf(toDeleteGame), 1);
    localStorage.clear();
    localStorage.setItem('favoriteGames', JSON.stringify(this.games));

  }
}


