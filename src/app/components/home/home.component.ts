import { ListKeyManager } from '@angular/cdk/a11y';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FavoriteGame } from 'src/app/models/favorite-game';
import { APIResponse, Game } from 'src/app/models/game-model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {
  public sort: string;
  public games:Array<Game>;
  private routeSub: Subscription;
  private gameSub: Subscription;
  public favoriteGames: Array<FavoriteGame>;

  constructor(
    private httpService:HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router)
 { }

  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params)=>
    {
      if(params['game-search']){
        this.searchGames('metacrit', params['game-search']);
      }
      else {
        this.searchGames('metacrit');
      }
    });
  }
  searchGames(sort: string, search?: string):void{
    this.gameSub = this.httpService
    .getGameList(sort,search)
    .subscribe((gameList:APIResponse<Game>)=>{
      this.games = gameList.results;
      console.log(gameList);
    }
    )
  }

  openGameDetails(id:string):void{
    this.router.navigate(['details',id]);
  }

  addGameToFavorites(game: Game):void{
    let newGame : FavoriteGame;
    newGame = {id:game.id, name:game.name, background_image: game.background_image};
    this.favoriteGames.push(newGame);
    localStorage.setItem('favoriteGames', JSON.stringify(this.favoriteGames));
  }
  
  ngOnDestroy(): void {
    if(this.gameSub){
    this.gameSub.unsubscribe();
    }
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }
}
