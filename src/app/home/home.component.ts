import { Component, OnInit } from '@angular/core';
import { SwRequestService } from '../sw-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Star Wars';
  propriety : any;

constructor(private swrequestservice:SwRequestService) {}
ngOnInit (){
this.swrequestservice.ngOnInit();

};

}
