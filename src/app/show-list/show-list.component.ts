import { Component, OnInit } from '@angular/core';
import { SwRequestService } from '../sw-request.service';
import {RouterModule, Routes, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  constructor(private swrequestservice:SwRequestService,   private route: ActivatedRoute,
) {}
// result="planets";

  ngOnInit() {

  let result = this.route.snapshot.paramMap.get('result');
  this.swrequestservice.envoi(result)
  console.log(result);

  }

}
