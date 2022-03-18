import { PlatformLocation } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { WhetherService } from 'src/app/services/whether/whether.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(private whetherService: WhetherService) {}

  ngOnInit(): void {

  }

}
