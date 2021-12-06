import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoginService } from '../services/login.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { threadId } from 'worker_threads';
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss'],
})
export class ForgotComponent implements OnInit {
  email: string;
   
  constructor(private location:Location,
    private afs: AngularFirestore,
    private afaut: AngularFireAuth,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private loginService: LoginService,
    ) { }

  ngOnInit() {}
  goBack(): void {
    this.location.back();

  }
  async resetPassword(){
      if(this.email){
        const loading= await this.loadingCtrl.create({
         message:'lütfen bekleyin..',
         spinner:'crescent',
         showBackdrop:true,

        });
        loading.present();
        this.afaut.sendPasswordResetEmail(this.email).then(()=>{
          loading.dismiss();
          this.toast('Mail adresinizden şifrenizi güncelleyiniz', 'danger');
          this.router.navigate(['/tabs/login']);
        })
      } 
      else{
        this.toast('Lütfen kayıtlı bir mail adresini giriniz!!', 'danger');
      }
  }
  
  
    async toast(message, status) {
      const toast = await this.toastr.create({
        message: message,
        color: status,
        position: 'top',
        duration: 2000,
      });
      toast.present();
    }
   }
 


// if(this.newpassword== this.newpassword2){
//   this.password=this.newpassword2;
//  this.toast('Şifreler Eşleşti', 'success');
// }
// else{
//  this.toast('Şifreler Eşleşmiyor', 'success');