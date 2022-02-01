import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Output() loadedFeature = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

onChooseSubject(feature: string) {
  this.loadedFeature.emit(feature);
}



}
