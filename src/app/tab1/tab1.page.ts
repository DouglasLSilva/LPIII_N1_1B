import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface responseApi {
  type: string;
  value: Joke;
}

export interface Joke {
  joke: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  piada: string
  constructor(private http : HttpClient) {}

  BuscarNovaPiada(){
    this.http.get<responseApi>('http://api.icndb.com/jokes/random').subscribe(data => {
      this.piada = data.value.joke;
    },
    error => {
      alert("Ocorreu um erro ao consultar a API")
    });
  }
}


