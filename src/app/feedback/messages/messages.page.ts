import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {

  constructor(private popover:PopoverController) {} 

  ngOnInit() {
  }
  ClosePopover()
  {
    this.popover.dismiss();
  }
}
