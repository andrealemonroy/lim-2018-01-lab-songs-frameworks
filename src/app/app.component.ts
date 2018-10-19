import { Component } from '@angular/core';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  artists = [{ name: 'eminem' }, { name: 'Kanye+West' }, { name: 'Artict+Monkeys' }
];
  position = 0;
  artist: any;
  songs = [];
  constructor(private _apiService: ApiService) {
    const name = this.artists[this.position].name;
    this._apiService.getCanciones(name).subscribe(gf => {
      // console.log(gf);
      this.artist = {
        name: gf['name'],
        img: gf['img']
      };
      this.songs = gf['songs'];
      console.log(this.songs);
    });
  }

  // getArtist(name) {
  //   this._apiService.getTracks(name);
  // }
}
