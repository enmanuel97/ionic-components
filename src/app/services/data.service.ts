import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Componente} from "../interfaces/interfaces";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getMenuOpts() {
    return this.http.get<Componente[]>('/assets/data/menu-opt.json');
  }

  getHeroes() {
    return this.http.get<any[]>('/assets/data/superheroes.json').pipe(delay(1500));
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }
}
