import { Component, Input, OnInit } from '@angular/core';

import { UtilsService } from '../../../infrastructure/services';
import { MovieItem } from './../../../infrastructure/models/movie';

@Component({
  selector: 'app-card-full-size',
  templateUrl: './card-full-size.component.html',
  styleUrls: ['./card-full-size.component.scss'],
})
export class CardFullSizeComponent implements OnInit {
  @Input()
  media!: MovieItem;
  @Input()
  showOverview: boolean = false;

  constructor(
    public utilsService: UtilsService
  ) {}

  ngOnInit(): void {}
}
