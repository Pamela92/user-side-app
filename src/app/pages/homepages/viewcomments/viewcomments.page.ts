import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import 'firebase/auth';

import { OwnerServiceService } from 'src/app/services/owner.service';
import { SignInSignUpService } from 'src/app/sign-in-sign-up.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-viewcomments',
  templateUrl: './viewcomments.page.html',
  styleUrls: ['./viewcomments.page.scss'],
})
export class ViewcommentsPage implements OnInit {

  getProfuid = this.route.snapshot.params.getProfuid;
  getSpaceuid = this.route.snapshot.params.getSpaceuid;
  getSpaceId= this.route.snapshot.params.getSpaceId;
  previewArray:any[]=[]



  constructor(private router: Router,public userservice :UserService,private route:ActivatedRoute,public ownerservice:OwnerServiceService,public account:SignInSignUpService) {
        console.log(this.account.getUserSession())
    firebase.firestore().collection("profiles")
    .doc(this.getProfuid)
  
    .collection("profile").doc(this.getSpaceuid).collection("space").doc(this.getSpaceId).collection("previews").where("space_uid","==",this.getSpaceId).get().then(doc=>{
        

      doc.forEach(list=>{
          this.previewArray.push(list.data())  
          console.log(this.previewArray)
      })

    }) }

  ngOnInit() {
  }

}
