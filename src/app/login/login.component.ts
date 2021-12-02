import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName} from '@angular/forms';
import {LoginService} from 'src/app/services/login.service'
import { Router } from '@angular/router';
<<<<<<< HEAD
import { GlobalService } from '../services/global.service';
import { ToastController } from '@ionic/angular';
=======

>>>>>>> c1c16f6da6a9658d1a3798b3cd3a1f2cd5418749
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
<<<<<<< HEAD
    email:string;
    password:string;
   constructor(private location: Location,
              private login:LoginService,
              private toastr:ToastController,
              private router:Router,
    ) {}
=======
  validationUserMessage={
    email:[
      {type:"required", message:"Email giriniz!"},
      {type:"pattern",message:"geçerli bir email giriniz.."}
    ],
    password:[
      {type:"required", message:"Şifre giriniz"},
      {type:"minlength",message:"En az 5 karakter içeren şifre giriniz.."}
    ]
  }
 validationFormUser:FormGroup;
  constructor(private router: Router,private location: Location, public formbuilder:FormBuilder,public loginservice: LoginService) { //router ile yap
    
  }
>>>>>>> c1c16f6da6a9658d1a3798b3cd3a1f2cd5418749
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









 