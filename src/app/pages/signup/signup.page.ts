import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private formBuilder:FormBuilder, private accountService:SignInSignUpService,private router: Router,public nav: NavController,
    public loadingCtrl: LoadingController,private alertCtrl: AlertController ) { }

  createForm = this.formBuilder.group({
    email: [''],
    password: ['']
});

get email() {
  return this.createForm.get("email");
}
get password() {
  return this.createForm.get("password");
}

public errorMessages = {

  email: [
    { type: 'required', message: 'Email is required' },
    { type: 'pattern', message: 'Please enter a valid email address' }
  ],
  password:[
    { type: 'required', message: 'Email is required' }
  ]



};


  ngOnInit() {
    this.createForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })


  }
  // public submit() {
  //   console.log(this.createForm.value.password);
  //   console.log(this.createForm.value.email);
  //   this.accountService.createAccount(this.createForm.value.email,this.createForm.value.password)
  // }
  async submit() {
    const alert = await this.alertCtrl.create({
      message: `Your account is registered successfully, click Okay to continue to login.`,
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log(this.createForm.value);
            // this.isSubmitted = true;
            if(this.createForm.valid){
              this.accountService.Signup(this.createForm.value.email, this.createForm.value.password).then((res) => {
                return firebase.firestore().collection('Users').doc(res.user.uid).set({
                  // name: this.RegForm.value.name,
                  // lastname: this.RegForm.value.lastname,
                  email: this.createForm.value.email,
                  password: this.createForm.value.password
                }).then(() => {
                  console.log(res.user);
                  this.router.navigate(['/signin']);
                }).catch(function (error) {
                  console.log(error);
                });
              })
            }
          }
        },
      ]
    });
    return await alert.present();
  }
  }


