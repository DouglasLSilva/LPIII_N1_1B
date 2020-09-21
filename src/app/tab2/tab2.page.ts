import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Card {
  imageUrlHiRes: string;
}

export interface Cards {
  cards: Card[];
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {

  name:string;
  itemsArray: Card[];
  constructor(private http : HttpClient) {}

  BuscarPokemom(){
      this.http.get<Cards>(`https://api.pokemontcg.io/v1/cards?name=${this.name}`).subscribe(data => {
        this.itemsArray = data.cards
        console.log(data);
      },
      error => {
        alert("Não existe esse pokemom")
      });
  }
}
