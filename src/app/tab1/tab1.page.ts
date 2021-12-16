import { GlobalVariables } from './../global-var/global-variables';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { time } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [ GlobalVariables ]
})
export class Tab1Page {

  //currentlyIndex:string;
  beko:Boolean;
  data: any;
  idies:string;
  
 

  constructor(
  //  private globals:GlobalVariables,
    private recipeService:RecipesService,
    private auth: AngularFireAuth,
    private router:Router) {}
  data2:any;



Index(Isim:string){
  window.localStorage.setItem('myId',Isim)
  console.log(window.localStorage.getItem('myId'))
  
  // console.log(Isim)
  // this.idies=Isim
  // console.log(this.idies)
}

  // isIndex(Isim:string){

  // if(Isim==this.data.id  ){
    
  //   console.log(this.data.id)
  //   console.log(Isim)
  //   return Isim
  // }     
  // }

  search(name: string): void {
    console.log("search çalıştı.")
    console.log(name);
    this.recipeService.searchRecipe(name).subscribe(res=> (
    this.data2= res

  ))
  console.log(this.data2)
  }

  ionViewWillEnter(){

    this.auth.authState.subscribe(res => {
      if (res && res.uid) {
        console.log('user  logged in');
        this.beko=false;
      } else {
        console.log('user not logged in');
        this.beko=true
      }
    });


    console.log('çalışıyor')
    console.log(this.beko);


    this.getRecipes0()

    //this.data.filter(res => res.id == this.idies);

  }


  async getRecipes0(){
    
    await this.recipeService.getRecipes().subscribe(res => {this.data = res;
       console.log(this.data); });
    
  }
    
}


