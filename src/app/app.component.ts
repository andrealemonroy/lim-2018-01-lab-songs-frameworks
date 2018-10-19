import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  artists = [{ name: 'Dua+Lipa' }, { name: 'Justin+Bieber' }, { name: 'Artict+Monkeys' }, { name: 'Taylor+Swift' }, { name: 'Rihanna' }
  ];
  position = 0;
  artist: any;
  songs = [];
  constructor(private _apiService: ApiService) {
    this.dataArtist(this.position);
  }
  afterArtist() {
    if (this.position === 4) {
      this.position = 0;
      this.dataArtist(this.position);
    } else {
      this.position++;
      this.dataArtist(this.position);
    }
  }
  beforeArtist() {
    if (this.position === 0) {
      this.position = 0;
      this.dataArtist(this.position);
    } else {
      this.position--;
      this.dataArtist(this.position);
    }
}
  dataArtist(index) {
    const nameArtist = this.artists[index].name;
    this._apiService.getCanciones(nameArtist).subscribe(nextArtist => {
      this.artist = {
        name: nextArtist['name'],
        img: nextArtist['img']
      };
      this.songs = nextArtist['songs'];
    });
  }




}
