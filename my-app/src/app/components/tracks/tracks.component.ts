import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { $ } from '../../../../node_modules/protractor';
@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  @Input() canciones: any[] = [];
  @Output() cancionesconvotosmodificadas: EventEmitter<any[]>;
  @Output() songsModified: EventEmitter<any[]>;

  track: any;

  constructor(public apiService: ApiService) {
    this.cancionesconvotosmodificadas = new EventEmitter();
    this.songsModified = new EventEmitter();

  }
  add(index) {
    const cancionconvoto = this.apiService.addVotes(index);
    this.cancionesconvotosmodificadas.emit(cancionconvoto);
  }
  less(index, x) {
    console.log(x);
    if (x > 0) {
      const songWithoutVote = this.apiService.dislike(index);
    this.songsModified.emit(songWithoutVote);
    }
  }
  ngOnInit() {
  }

}
