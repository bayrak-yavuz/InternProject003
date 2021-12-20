import { CategoryService } from './../services/category.service';
import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { time } from 'console';
import { Router, ActivatedRoute } from '@angular/router';
import { threadId } from 'worker_threads';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorized-recipes',
  templateUrl: './categorized-recipes.page.html',
  styleUrls: ['./categorized-recipes.page.scss'],
})
export class CategorizedRecipesPage implements OnInit {
  
  constructor(private recipeService:RecipesService,
    private auth: AngularFireAuth,
    private router:Router,
    private toastr:ToastController,
    private categoryService:CategoryService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }
  beko:Boolean;
  data: any;
  cate:any
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

    this.getHeader()
    this.getRecipes0()

    //this.data.filter(res => res.id == this.idies);

  }

  Index(Isim:string){
    window.localStorage.setItem('myId',Isim)
    console.log(window.localStorage.getItem('myId'))
    
    // console.log(Isim)
    // this.idies=Isim
    // console.log(this.idies)
  }
  async getHeader(){
    await
    this.categoryService.getCategoryName(this.route.snapshot.params.categoryId).subscribe(res=> (
      this.cate= res[0],
      console.log(this.cate.name)
     ))
      
  }

  async getRecipes0(){
    await 
    

      this.recipeService.getRecipesWithCategory(this.route.snapshot.params.categoryId).subscribe(res=> (
        this.data= res
       ))
    
  }
  
}
