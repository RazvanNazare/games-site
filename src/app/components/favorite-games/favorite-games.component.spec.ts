import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteGamesComponent } from './favorite-games.component';

describe('FavoriteGamesComponent', () => {
  let component: FavoriteGamesComponent;
  let fixture: ComponentFixture<FavoriteGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
