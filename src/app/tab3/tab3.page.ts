import { GlobalVariables } from './../global-var/global-variables';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
export interface imageData{
  fileName:string;
  filePath:string;
  size:string;
}
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
user:any;
fileName:string;
fileSize:string;
isLoading:boolean;
isLoaded:boolean;
private imageCollection:AngularFirestoreCollection<imageData>;
  constructor(
    private login:LoginService,
    private router:Router,
    private toastr:ToastController,
    private storage:AngularFireStorage,
    private database:AngularFirestore,
  ) {
    this.isLoaded=false;
    this.isLoading=false;
  }

logout()
{
  GlobalVariables.log=true
  console.log(GlobalVariables.log)
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
addImage(event){
  const file = event.target.files;
  console.log(file);
   var fileName=file[0];
  console.log(fileName);

  if(fileName.type.split('/')[0] !=="image"){
    console.error("file is not image");
    return;
  }
}
}

