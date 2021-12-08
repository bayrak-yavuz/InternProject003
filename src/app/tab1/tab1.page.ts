import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ GlobalVariables ]
})
export class Tab1Page {

  index:number;
  beko:Boolean;
  data: any;
<<<<<<< HEAD
 
   constructor(
    
    private recipeService:RecipesService) {}
   data2:any;
=======

  constructor(
    private globals:GlobalVariables,
    private recipeService:RecipesService) {}
  data2:any;
>>>>>>> c77303212b0d0ee4a34404423b578ff1809a5778

  Index(Isim:string):void{
    
    // localStorage.setItem("index",this.data.indexOf(Isim))
    // console.log(localStorage.getItem("index"))
    this.globals.recipesIndex = this.data.indexOf(Isim)
    console.log(this.globals.recipesIndex)
    
  }

  search(name: string): void {
    console.log("search çalıştı.")
    console.log(name);
    this.recipeService.searchRecipe(name).subscribe(res=> (
    this.data2= res
  ))
  console.log(this.data2)
  }
<<<<<<< HEAD
   

   
=======

>>>>>>> c77303212b0d0ee4a34404423b578ff1809a5778
  ionViewWillEnter(){
    console.log('çalışıyor')
    this.beko=GlobalVariables.log;
    console.log(this.beko);
    this.getRecipes0()
  }


  async getRecipes0(){
    
    await this.recipeService.getRecipes().subscribe(res => {this.data = res;
       console.log(this.data); });
    
  }
    
}


