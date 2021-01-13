import { Component, OnInit, ViewChild } from '@angular/core';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  array: any=[];
  db =firebase.firestore();
  bookingsHistory:any[]=[]
  constructor(public account:SignInSignUpService) {
    firebase.firestore().collectionGroup("user-profile")
    .where("uid", "==", this.account.getUserSession())
    .get()
    .then(snap => {
      snap.forEach(doc => {
      this.array.push(doc.data() )
        console.log(this.array)
      });
    });
   }

  ngOnInit() {
  }

}
