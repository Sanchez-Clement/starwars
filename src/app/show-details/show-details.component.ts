import { Component, OnInit } from '@angular/core';
import { SwRequestService } from '../sw-request.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  constructor(private swrequestservice:SwRequestService) {}

  ngOnInit() {

  }

}
