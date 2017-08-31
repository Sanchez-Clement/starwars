import { Component, OnInit } from '@angular/core';
import { SwRequestService } from '../sw-request.service';
import {Location} from '@angular/common'


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
title = 'Star Wars';

  constructor(private swrequestservice:SwRequestService, private location:Location) {}

  ngOnInit() {

  }
  goBack(): void {
    this.location.back();

  }

}
