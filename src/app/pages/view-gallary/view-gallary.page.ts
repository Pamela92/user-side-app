import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';
import { IonInfiniteScroll } from '@ionic/angular';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { OwnerServiceService } from 'src/app/services/owner.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

import {  PopoverController } from '@ionic/angular';
import { MessagesPage } from 'src/app/feedback/messages/messages.page';


@Component({
  selector: 'app-view-gallary',
  templateUrl: './view-gallary.page.html',
  styleUrls: ['./view-gallary.page.scss'],
})
export class ViewGallaryPage implements OnInit {
  spaceId= this.route.snapshot.params.spaceid;
  gallaryArray:any=[]
  constructor(private popover:PopoverController,private router: Router,public userservice :UserService,private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) { 
    this.gallary();
  }

  ngOnInit() {
  }

  gallary(){
    firebase.firestore().collectionGroup("gallary").where("spaceuid","==",this.spaceId).get().then(doc=>{
      doc.forEach(dat=>{
         this.gallaryArray.push(dat.data())
         console.log(this.gallaryArray)
      })
    })
  }




}
