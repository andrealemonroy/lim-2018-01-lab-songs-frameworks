import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../service/api.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  @Input() artistas: any = {};

  constructor(public apiService: ApiService) {

  }
  ngOnInit() {
  }

}
