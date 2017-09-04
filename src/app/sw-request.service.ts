import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SwRequestService {
  results: any;
  resultatEnvoi : any;
  resultatEnvoiNon : any;
  urlEnvoi : any;
  resultatDetail : Object;
  resultatDetailNom : any;
  urlresult  : any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://swapi.co/api/').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = Object.keys(data);

    });
  }
  envoi(test) {
    this.http.get('https://swapi.co/api/' + test).subscribe(data => {
      // Read the result field from the JSON response.
      this.resultatEnvoi = data['results'];
      this.urlEnvoi =  test;

  this.resultatEnvoiNon = Object.keys(data['results'][0])[0];

    });
  }
  affichedetail(test) {

    this.http.get(test).subscribe(data => {
      // Read the result field from the JSON response.
      this.resultatDetail = data;


      this.resultatDetailNom = Object.keys(data);
    


    });
  }

recupId(test){
  return test.match(/\d+/g)[0];
}


  affichedetailUrl(test3) {

    this.http.get('https://swapi.co/api/' + test3).subscribe(data => {
      // Read the result field from the JSON response.
      this.resultatDetail = data;


      this.resultatDetailNom = Object.keys(data);


    });
  }
}
