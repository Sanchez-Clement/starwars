import { Component, OnInit } from '@angular/core';
import { SwRequestService } from '../sw-request.service';
import {Location} from '@angular/common';
import {RouterModule, Routes, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
title = 'Star Wars';

  constructor(private swrequestservice:SwRequestService, private location:Location,private route: ActivatedRoute,) {}

  ngOnInit() {
let chanche = this.route.snapshot.paramMap.get('swrequestservice.urlEnvoi');
let resultats = this.route.snapshot.paramMap.get( 'swrequestservice.recupId(resultat["url"])');
console.log(chanche +"/" +resultats);
this.swrequestservice.affichedetailUrl(chanche +"/" +resultats)
  }
  goBack(): void {
    this.location.back();

  }

}
