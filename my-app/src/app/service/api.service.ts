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

  getTracks() {
    const artists = { name: 'Kanye+West' };
      // { name: 'Rihanna' },
      // { id: 2, name: 'Taylor+Swift' },
      // { id: 3, name: 'Daft+Punk' },
      // { id: 4, name: 'Cher' }
    return this.http.get
      (`http://ws.audioscrobbler.com/2.0/?method=user.getartisttracks&user=rj&artist=${artists.name}&api_key=1d2f26286c0cebdf680d54cb5dda654d&format=json`);
  }
}
