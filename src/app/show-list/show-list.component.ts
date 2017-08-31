import { Component, OnInit } from '@angular/core';
import { SwRequestService } from '../sw-request.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private swrequestservice:SwRequestService) {}


  ngOnInit() {
  }

}
