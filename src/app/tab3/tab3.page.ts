import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
user:any;
  constructor(
    private login:LoginService,
    private router:Router,
    private toastr:ToastController,

  ) {}

logout()
{
  this.login.signOut();
  
}
async toast(message,status)
{
  const toast=await this.toastr.create({
    message:message,
    color:status,
    position:'top',
    duration:2000,
  }) ;
  toast.present();
}//end tas t

ngOnInit()
{
  this.login.user$.subscribe(user=>{
    this.user=user;
   })
}
}

