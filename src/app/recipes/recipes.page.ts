import { GlobalVariables } from './../global-var/global-variables';
import { LoginGuard } from './../guards/login.guard';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  photo :any
  resText :any
  items = []
  name :any
  id:any
  recipe:any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private auth: AngularFireAuth,
    private recipeService: RecipesService,
    private loginGuard: LoginGuard,
    private afsg: AngularFireAuthGuard) {
  }

  ionViewWillEnter() {
    this.id=window.localStorage.getItem('myId')
    console.log(this.id)
    this.getRescipe(this.id)
    
  }
  ionViewDidEnter(){

  }
  ngOnInit() {


  }  
  back() {
    this.location.back();
  }
  async getRescipe(id: string){
    await this.recipeService.getRecipe(id).subscribe(res=>{
     this.recipe=res.data();
     this.photo=this.recipe.photo;
     this.name=this.recipe.name;
     this.resText=this.recipe.recipes;
     this.items=this.recipe.checkList;
    console.log(this.recipe)
    console.log(this.items)
    });
   
  }


}
