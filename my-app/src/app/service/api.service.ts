import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface Config {
  nameArtist: string;
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) {

  }
  getSongs() {
    return this.http.get
    (`https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=1d2f26286c0cebdf680d54cb5dda654d&format=json`);
}
}
