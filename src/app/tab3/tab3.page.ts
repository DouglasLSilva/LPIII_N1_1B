import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface responseApiCEP {
  bairro: string;
  cidade: string;
  logradouro: string;
  estado:string;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  endereco:string;
  cep: string;

  constructor(private http : HttpClient) {}


  BuscarCEP(){
    this.http.get<responseApiCEP>(`https://api.postmon.com.br/v1/cep/${this.cep}`).subscribe(data => {
      this.endereco = `${data.logradouro}, ${data.bairro}, ${data.cidade} - ${data.estado}`;
    },
    error => {
      alert("Não existe esse CEP")
    });
}
}
