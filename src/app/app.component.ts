import { Component } from '@angular/core';


@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
reloadedFeature = 'home';


onLoadedFeature(feature: string) {
  this.reloadedFeature = feature;
}



}
