import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type' : 'applications/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor( private HttpClient : HttpClient) {
    httpOptions.headers.append('Access-Control-Allow-Origin', '*"');
    httpOptions.headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    httpOptions.headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    httpOptions.headers.append('Access-Control-Allow-Credentials', 'true');
  }

  API_KEY = '4bf558d6703a571b73fb51bc44fa5f70';

  getMeteo(city){
    return this.HttpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=fr&APPID=${this.API_KEY}`)
  }
}
