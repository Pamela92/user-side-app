import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController, LoadingController } from '@ionic/angular';
import { from } from 'rxjs';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

 
  showpassword = false;
  passwordToggleIcon = 'eye';
  togglePassword() {
    this.showpassword = !this.showpassword;
  }
  constructor( public accountServices: SignInSignUpService,private formBuilder:FormBuilder, private accountService: SignInSignUpService,private router: Router,public nav: NavController,
    public loadingCtrl: LoadingController,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.LoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  get email() {
    return this.LoginForm.get("email");
  }
  get password() {
    return this.LoginForm.get('password');
  }

  LoginForm = this.formBuilder.group({
    email: [''],
    password: [''],
  });

  public errorMessages = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'password number is required' },
      { type: 'pattern', message: 'Please enter a valid password' }
    ],
  };
  async submit() {
    const loading = await this.loadingCtrl.create();
    console.log(this.LoginForm.value);
    this.accountService.SignIn(this.LoginForm.value.email, this.LoginForm.value.password).then((res) => {
        this.accountServices.usersGroup(this.accountServices.getUserSession(),'user')
    }).then(() => {
      loading.dismiss().then(() => {
        // this.router.navigateByUrl('/update-space');
      });
    },
      error => {
        loading.dismiss().then(() => {
          console.log(error);
        });
      }
    );
    return await loading.present();
  }
}
