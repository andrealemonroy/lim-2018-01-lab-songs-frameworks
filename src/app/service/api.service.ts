import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  artist = {};
  constructor(private http: HttpClient) {

  }


  getCanciones(name) {
    // tslint:disable-next-line:max-line-length
    return this.http.get(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=1d2f26286c0cebdf680d54cb5dda654d&limit=10&format=json`)
      .pipe(map(data => {
        this.artist['name'] = data['toptracks']['@attr'].artist,
          this.artist['img'] = data['toptracks'].track[0].image[2]['#text'];
        this.artist['songs'] = data['toptracks'].track;
        this.artist['songs'] = this.artist['songs'].map((song, index) => ({ ...song, votes: 0, id: index }));
        return this.artist;
      }));
  }

  addVotes(id) {
    this.artist['songs'] = this.artist['songs'].map((cancion) => {
      if (cancion.id === id) {
        return { ...cancion, votes: cancion.votes + 1 };
      }
      return cancion;
    });
    return this.artist['songs'];
  }
  dislike(id) {
    this.artist['songs'] = this.artist['songs'].map((cancion) => {
      if (cancion.id === id) {
        return { ...cancion, votes: cancion.votes - 1 };
      }
      return cancion;
    });
    return this.artist['songs'];
  }

}
