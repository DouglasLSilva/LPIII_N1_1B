import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface responseApiMeme {
  data: responseApiMemeData;
  sucess: boolean;
}

export interface responseApiMemeData {
  memes: Memes[];
}

export interface Memes {
  url : string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})

export class Tab4Page implements OnInit {

  constructor(private http : HttpClient) {}

  ngOnInit() {
  }

  imagesrc:string;

  BuscarMeme(){
    this.http.get<responseApiMeme>(`https://api.imgflip.com/get_memes`).subscribe(data => {
      let meme = this.getRandomInt(0,101);
      this.imagesrc = data.data.memes[meme].url;
    },
    error => {
      alert("Ocorreu um erro")
    });
  }

   getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; 
  }

}
