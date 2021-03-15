/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonContent } from '@ionic/angular';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.scss'],
})
export class ChattingComponent implements OnInit {

  @ViewChild('IonContent', {static: false}) content: IonContent;

  data: {}[];
  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };
  paramData: any;
  msgList: any;
  userName: any;
  user_input = '';
  User = 'Me';
  toUser = 'HealthBot';
  start_typing: any;
  loader: boolean;
  show: boolean;
  footerJson: { 'icon': string; 'label': string; }[];

  constructor(public navParams: NavParams, public modaCtrl: ModalController) {
    this.data = [{
      'text': 'Thursday 31 January 2019',
    }];
    this.paramData = this.navParams.get('value');
    this.msgList = [
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../assets/chat/chat3.jpg',
        time: '12:00',
        message: 'Hello, have you been to New Delhi ever?',
        id: 0,
        status: 'checkmark'
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: this.paramData.image ? this.paramData.image : '../../assets/chat/chat5.jpg',
        time: '12:03',
        message: 'Yeah, I have been there a lot of times',
        id: 1,
        status: 'checkmark',
        name: 'Diana Nicole'

      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../assets/chat/chat3.jpg',
        time: '12:05',
        message: '... are you having any ride in future?',
        id: 3,
        status: 'done-all'
      },
      {
        userId: 'Me',
        userName: 'Me',
        userAvatar: '../../assets/chat/chat5.jpg',
        time: '12:06',
        message: 'Yes ! you can check in book a ride',
        id: 4,
        status: 'checkmark',
        name: 'Diana Nicole'

      },
      {
        userId: 'HealthBot',
        userName: 'HealthBot',
        userAvatar: '../../assets/chat/chat3.jpg',
        time: '12:07',
        message: 'Ok ! checking for the same',
        id: 5,
        status: 'done-all'
      }
    ];
    this.footerJson = [{
      'icon': 'images',
      'label': 'Image'
    }, {
      'icon': 'call',
      'label': 'Phone'
    }, {
      'icon': 'mail-unread',
      'label': 'Red'
    }, {
      'label': 'Document',
      'icon': 'radio-button-on'
    }, {
      'icon': 'pin',
      'label': 'Position'
    }, {
      'icon': 'videocam',
      'label': 'Video'
    }
    ];
  }

  ngOnInit() {
  }
  typeSelected(type: any) {
    console.log(type);
    if (this.user_input === '' && type.icon === 'images') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        image: '../../assets/chat/chat3.jpg',
        id: this.msgList.length + 1,
        status: 'checkmark'
      });
      this.user_input = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    } else if (this.user_input === '' && type.icon === 'videocam') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        video: '../../assets/chat/video.mp4',
        id: this.msgList.length + 1,
        status: 'checkmark'
      });
      this.user_input = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    } else if (this.user_input === '' && type.icon === 'pin') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        time: '12:01',
        map: { lat: 52.678418, lng: 7.809007 },
        id: this.msgList.length + 1,
        status: 'checkmark'

      });
      this.user_input = '';
      this.show = false;
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    }
  }

  toggleList(item: any) {
    this.show = !this.show;
    console.log(this.show);
    this.scrollDown();

  }
  sendMsg() {
    if (this.user_input !== '') {
      this.msgList.push({
        userId: this.toUser,
        userName: this.toUser,
        userAvatar: this.paramData.image ? this.paramData.image : '../../assets/chat/chat5.jpg',
        time: '12:01',
        message: this.user_input,
        id: this.msgList.length + 1,
        status: 'checkmark'

      });
      this.user_input = '';
      this.scrollDown();
      setTimeout(() => {
        this.senderSends();
      }, 500);
    }
    this.show = false;
  }
  senderSends() {
    this.loader = true;
    setTimeout(() => {
      this.msgList.push({
        userId: this.User,
        userName: this.User,
        userAvatar: '../../assets/chat/chat5.jpg',
        time: '12:01',
        message: 'Hii, will be pleased by helping you',
        status: 'checkmark',
        name: 'Diana Nicole'

      });
      this.loader = false;
      this.scrollDown();
    }, 2000);
    this.scrollDown();
  }
  scrollDown() {
    setTimeout(() => {
      this.content.scrollToBottom(50);
    }, 200);
  }
  something($event: any) {
    $event.preventDefault();
    console.log($event);
  }
  userTyping(event: any) {
    this.show = false;
    console.log(event);
    this.start_typing = event.target.value;
    this.scrollDown();
  }
  focusFunction(event: any) {
    this.show = false;
    console.log(event);
  }
  closeModal() {
    this.modaCtrl.dismiss();
  }
}

