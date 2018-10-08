import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  list: any;
  arrayList = [];
  // artists: any;
  // public artists = [
  //   { id: 0, name: 'Lorde' },
  //   { id: 1, name: 'Rihanna' },
  //   { id: 2, name: 'Taylor+Swift' },
  //   { id: 3, name: 'Daft+Punk' },
  //   { id: 4, name: 'Cher' }
  // ];
  // albumes: any;

  constructor(public apiService: ApiService) {
    this.apiService.getSongs().subscribe(data => {
      this.list = data.artists.artist;
      console.log(this.list);
    });
  }
  ngOnInit() {
  }

}
