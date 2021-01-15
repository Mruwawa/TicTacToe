import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  places: any[9] = [];
  currentPlayer: 'X' | 'O' = 'X';
  currentMove: number = 0;
  winningPlaces: number[];
  winner: string = null;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.places.push(null);
    }
  }



  move(i: number) {
    if (!this.winner && this.places[i] == null) {
      this.places[i] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
      this.currentMove++;
    }
    if (this.checkWin()) {
      this.winningPlaces = this.checkWin();
      this.winner = this.places[this.winningPlaces[0]];
    }

  }

  checkWin(): number[] {
    let p = this.places;
    let winConfigurations =
      [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [6, 4, 2],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ];

    for (let conf of winConfigurations) {
      if (p[conf[0]] && p[conf[1]] && p[conf[2]]) {
        if (p[conf[0]] == p[conf[1]] && p[conf[1]] == p[conf[2]]) return conf;
      }
    }
    return null;
  }

  reset(): void {
    this.places.fill(null);
    this.currentPlayer = this.getRandomIntInclusive(0, 1) == 0 ? 'X' : 'O';
    this.winner = null;
    if(this.winningPlaces) this.winningPlaces.fill(null);
  }


  private getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  winning(i: number): boolean {
    if (this.winningPlaces) {
      return this.winningPlaces.find(x => x == i) != null;
    }
  }

}
