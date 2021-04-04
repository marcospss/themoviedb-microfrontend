import { Component, Input, OnInit } from '@angular/core';

import { UtilsService } from '../../../infrastructure/services';

@Component({
  selector: 'app-card-full-size',
  templateUrl: './card-full-size.component.html',
  styleUrls: ['./card-full-size.component.scss'],
})
export class CardFullSizeComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  overview!: string;
  @Input()
  image!: string;
  @Input()
  showOverview: boolean = false;

  constructor(
    public utilsService: UtilsService
  ) {}

  ngOnInit(): void {}
}
