import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  name:string;
  email:string;
  phone:string;
  password:any;

  constructor(
    private afs:AngularFirestore,
    private afaut:AngularFireAuth,
    private router:Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private loginService:LoginService,
    private location: Location,

    
  ) { }
  goBack(): void {
    this.location.back();

  }
  ngOnInit() {} 
 async register()
 {
   if(this.name && this.email && this.phone && this.password){
     const loading=await this.loadingCtrl.create({
      message:'Yükleniyor...',
      spinner:'crescent',
      showBackdrop:true
     });

     loading.present();

     this.afaut.createUserWithEmailAndPassword(this.email, this.password)
     .then((data)=>{
       this.afs.collection('user').doc(data.user.uid).set({
       'userId':data.user.uid,
       'userName':this.name,
       'userEmail':this.email,
       'userPhone':this.phone,
       'createdAt': Date.now()
       })
       .then(()=> {
         loading.dismiss();
<<<<<<< HEAD
         this.toast('Kayıt başarılı lütfen e-postanızı kontrol edin!','success');
         this.router.navigate(['tabs/tab3']);
=======
         this.toast('Kayıt başarılı lütfen e-postanızı kontrl edin!','success');
         this.router.navigate(['/login']);
>>>>>>> c1c16f6da6a9658d1a3798b3cd3a1f2cd5418749
       })
       .catch(error =>{
        loading.dismiss();
        this.toast(error.message,'darger');
       })
     })
   }
<<<<<<< HEAD
   else{
    this.toast('Bilgileri tam','success');

   }
=======
>>>>>>> c1c16f6da6a9658d1a3798b3cd3a1f2cd5418749
 }//end register

async toast(message,status)
{
  const toast=await this.toastr.create({
    message:message,
    color:status,
    position:'top',
    duration:2000,
  }) ;
  toast.present();
}

}