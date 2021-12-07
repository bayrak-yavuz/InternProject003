import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GlobalVariables } from '../global-var/global-variables';
@Component({
  selector: 'app-saved',
  templateUrl: './saved.component.html',
  styleUrls: ['./saved.component.scss'],
})
export class SavedComponent implements OnInit {

  constructor(private location: Location,) { }

  ngOnInit() {
    
  }
  goBack(): void {
    this.location.back();

  }
  ionViewWillEnter(){
    GlobalVariables.log=false;
  }

}
