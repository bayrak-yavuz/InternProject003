import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  beko=GlobalVariables.log;

//   eat: [{
//     src: "/assets/images/1.jpg",
//     text: "Hamburger",
  
//   },
//   {
//     src: "/assets/images/2.jpg",
//     text: "Hamburger",
  
//   },
//   {
//     src: "/assets/images/3.jpg",
//     text: "Hamburger",
  
//   },
//   {
//     src: "/assets/images/4.jpg",
//     text: "Hamburger",
  
//   },
//   {
//     src: "/assets/images/5.jpg",
//     text: "Hamburger",
  
//   }
// ]
  data: any;
  constructor(private recipeService:RecipesService) {}
  
  
  ionViewWillEnter(){
    console.log('çalışıyor')

    this.getRecipes0()
  }


  async getRecipes0(){
    
    await this.recipeService.getRecipes().subscribe(res => {this.data = res;
       console.log(this.data); });
    
  }

}


