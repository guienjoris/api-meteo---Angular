import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MeteoService} from './service/meteo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mon api Meteo';
  city:string;
  temperature: string;
  weather: string;
  icon: string;
  constructor ( private meteo : MeteoService){
    this.city=""
  }
  onSubmit( form : NgForm) {
    var city = form.value['city'];
    console.log(city);
    
    this.meteo.getMeteo(city).subscribe((data) => {
      console.log(data);
      this.temperature = data.main.temp;
      this.weather= data.weather[0].description;
      this.icon = data.weather[0].icon;
      console.log(this.icon);
    })
  }
}

