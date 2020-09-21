import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface responseApi {
  id: number;
  type: string;
  setup: string;
  punchline: string
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  setup: string
  punchline: string
  constructor(private http : HttpClient) {this.BuscarNovaPiada()}

  BuscarNovaPiada(){
    this.http.get<responseApi[]>('https://official-joke-api.appspot.com/jokes/programming/random').subscribe(data => {
      console.log(data);
      this.setup = data[0].setup;
      this.punchline = data[0].punchline
    },
    error => {
      alert("Ocorreu um erro ao consultar a API")
    });
  }
}


