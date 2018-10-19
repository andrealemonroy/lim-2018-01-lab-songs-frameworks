import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { THIS_EXPR } from '../../../../node_modules/@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() artista: any;
  @Output() next: EventEmitter<any> = new EventEmitter<void>();
  @Output() last: EventEmitter<any> = new EventEmitter<void>();
  constructor(public apiService: ApiService) {
  }
  ngOnInit() {
  }
  after() {
    console.log('next');
    this.next.emit();
  }
  before() {
    this.last.emit();
  }





    // const at = this.artistas.map((artist) => {
    //   if (artist.name === name) {
    //     return { ...artist, position: artist.position++ };
    //   }
      // return artist;
      // console.log(artist);
    // });
    // console.log(name);
    // return name;
    // return this.artistas['name'];
    // this.artistas['position'] = this.artistas['position'].map((data) => {
    // this.artistas = {...this.artistas, position: this.artistas.position + 1};
    // return { ...cancion, position: cancion.position + 1 };
    // });
  // before() {
  //   console.log(this.artistas.position);
  // }
}
