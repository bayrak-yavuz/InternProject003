import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  
  beko:Boolean;
  data: any;
<<<<<<< HEAD
  constructor(private recipeService:RecipesService) {}

=======
  constructor(
    
    private recipeService:RecipesService) {}
>>>>>>> 1f2bc39b99c3db6966d544f1329815b51328a97d
  data2:any;

  Index(Isim:string){
    console.log(Isim)
    //console.log(this.data.name)
    //recipesIndex = this.data.indexOf(Isim)
    
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
>>>>>>> 1f2bc39b99c3db6966d544f1329815b51328a97d
  
  ionViewWillEnter(){
    console.log('çalışıyor')
    this.beko=GlobalVariables.log;
    console.log(this.beko);
    console.log
    this.getRecipes0()
  }


  async getRecipes0(){
    
    await this.recipeService.getRecipes().subscribe(res => {this.data = res;
       console.log(this.data); });
    
  }
    
}


