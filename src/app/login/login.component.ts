import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators, FormControl, FormControlName} from '@angular/forms';
import {LoginService} from 'src/app/services/login.service'
import { Router } from '@angular/router';
import { GlobalService } from '../services/global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
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
  constructor(private router: Router,private location: Location, public formbuilder:FormBuilder,public loginservice: LoginService, public global:GlobalService) { //router ile yap
    
  }
  goBack(): void {
    this.location.back();

  }
  ngOnInit(): void {
    this.validationFormUser=this.formbuilder.group({
      email: new FormControl('',Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('',Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ]))
    })
  }
   LoginUser(value){
    this.loginservice.loginFirelogin(value).then(res=> {
      console.log('Giriş Başarılı')
      this.router.navigateByUrl('/tabs/tab3', { replaceUrl:true });

    },err=>{
      console.log('Giriş Başarısız')
    }); 
   }
}
