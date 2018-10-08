import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  track: any;
  // list: any;
  // arrayList = [];
  // artists: any;
  // albumes: any;

  constructor(public apiService: ApiService) {
    this.apiService.getTracks().subscribe(data => {
      this.track = data.artisttracks.track;
      console.log(data.artisttracks.track);
    });
  } ngOnInit() {
  }

}
