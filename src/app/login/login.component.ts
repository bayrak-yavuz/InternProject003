import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName} from '@angular/forms';
import {LoginService} from 'src/app/services/login.service'
import { Router } from '@angular/router';
 import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

    email:string;
    password:string;
   constructor(private location: Location,
              private login:LoginService,
              private toastr:ToastController,
              private router:Router,
    ) {}

   
    

  goBack(): void {
    this.location.back();

  }
  ngOnInit(): void {
   
  }
  logIn()
   {
     if(this.email,this.password)
     {
          this.login.signIn(this.email,this.password);
     }
     else{
       this.toast('Kayıtlı e-mail şifre giriniz','warning')

     }
 
  
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
  }//end tast
}

 







 