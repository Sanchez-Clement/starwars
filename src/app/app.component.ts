import { Component, OnInit } from '@angular/core';


import { SwRequestService } from './sw-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent implements OnInit{
  title = 'Star Wars';
  propriety : any;
constructor(private swrequestservice:SwRequestService) {}
ngOnInit (){
this.swrequestservice.ngOnInit();

};

// Inject HttpClient into your component or service.


}
