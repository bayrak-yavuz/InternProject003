import { GlobalVariables } from './../global-var/global-variables';
import { LoginGuard } from './../guards/login.guard';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { Location } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { UserService } from '../services/user.service';
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
    private userService:UserService,
    private afsg: AngularFireAuthGuard) {
  }

  ionViewWillEnter() {
    
    
    // this.router.events.subscribe(res=>{
    //   if(res instanceof NavigationEnd){
    //     this.id=res.url
        
    //   }
     
    // })
   this.id=this.route.snapshot.params.id
   
    console.log(this.router.url)
    console.log(this.id)
    this.getRescipe(this.id)
    
  }
  ionViewDidEnter(){
    this.checkSaved();
  }
  ngOnInit() {

    this.checkSaved();
  }  
  back() {
    this.location.back();
  }
  async getRescipe(id: string){
    await this.recipeService.getRecipe(id).subscribe(res=>{
     this.recipe=res.data();
     this.photo=this.recipe.photo;
     this.name=this.recipe.name;
     this.id=this.recipe.id;
     this.resText=this.recipe.recipes;
     this.items=this.recipe.checkList;
    console.log(this.recipe)
    console.log(this.items)
    });
   
  }
  addSaved(){
    this.userService.addSaved(this.id)
    console.log("click çalıştı")
  }
  data2:any
  check:boolean=true

  async checkSaved(){
    this.userService.listSaved(((await this.auth.currentUser).uid)).subscribe((res:any[])=> {
      this.data2=res.map(r=>r.recipeId),
      this.data2.forEach(recipeId => {
         if(recipeId==this.id){
           this.check=false;
         }
         else
         {
           this.check=true;
         }
        
      });
  
 
     })
  }


}
