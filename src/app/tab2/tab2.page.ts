import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../services/category.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private categoryService:CategoryService,
    private router:Router,
   ) {}
  data:any
  
  
   getId(name:string){
    
     this.categoryService.getCategoryId(name).subscribe(res=> (
      this.data= res,
      console.log(this.data.id),
      this.router.navigateByUrl('categorized/'+this.data.categoryId)
     ))
    
      
  
  }
}

