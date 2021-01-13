import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.page.html',
  styleUrls: ['./user-group.page.scss'],
})
export class UserGroupPage implements OnInit {

  value_selected:string
  constructor( public accountServices: SignInSignUpService,  private router: Router
) {
  this.accountServices.getEmail();
  this.accountServices.getUserSession();

}
  ngOnInit() {
    this.accountServices.userGroup(this.accountServices.getUserSession(),
                                  "owner",
                                   this.accountServices.getEmail())
                                   
  }

  submit(){
     this.accountServices.userGroup(this.accountServices.getUserSession(),
                                    this.value_selected,
                                    this.accountServices.getEmail()
                                    )
    console.log(this.value_selected)
  }





}
