/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChattingComponent } from '../chatting/chatting.component';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss'],
})
export class ChatlistComponent implements OnInit {
  chatData: any;
  segmentTab: any;
  buttonClicked: boolean;
  clickData: any;
  imageData: any;
  constructor(public modalCtrl: ModalController) {
    this.chatData = [{
      'name': 'Enappd',
      'image': '../../assets/chat/enappd.png',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': '11:32 PM',

      'distance': '6km',
      'type': 'PRO', 'crown': '../../assets/chat/crown.png'

    }, {
      'name': 'Jovenica Alba',
      'image': '../../assets/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': '12:17',
      'distance': '6km',
      'type': 'PRO',
      'crown': '../../assets/chat/crown.png',


    }, {
      'name': 'Oliver',
      'image': ' ../../assets/chat/chat2.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': '12:17',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../assets/chat/crown1.png',

    }, {
      'name': 'George',
      'image': ' ../../assets/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '2',
      'time': 'Yesterday',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../assets/chat/crown1.png',

    }, {
      'name': 'Harry',
      'image': ' ../../assets/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Sunday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../assets/chat/crown.png',

    }, {
      'name': 'Jack',
      'image': ' ../../assets/chat/chat5.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'time': '11:15',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../assets/chat/crown1.png',

    }, {
      'name': 'Jacob',
      'image': ' ../../assets/chat/chat6.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '1',
      'time': 'Yesterday',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../assets/chat/crown1.png',

    }, {
      'name': 'Noah',
      'image': ' ../../assets/chat/chat7.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Monday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../assets/chat/crown.png',

    }, {
      'name': 'Charlie',
      'image': ' ../../assets/chat/chat8.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'count': '6',
      'time': '07:00',
      'distance': '6km',
      'type': 'Basic',
      'crown': '../../assets/chat/crown1.png',

    }, {
      'name': 'Logan',
      'image': ' ../../assets/chat/chat1.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Yesterday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../assets/chat/crown.png',

    }, {
      'name': 'Harrison',
      'image': ' ../../assets/chat/chat2.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'time': 'Yesterday',
      'distance': '6km',
      'type': 'Basic', 'crown': '../../assets/chat/crown1.png',

    }, {
      'name': 'Sebastian',
      'image': ' ../../assets/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',

      'time': 'Yesterday',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../assets/chat/crown.png'
    }, {
      'name': 'Zachary',
      'image': ' ../../assets/chat/chat3.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': 'Today',
      'distance': '6km',
      'type': 'Basic', 'crown': '../../assets/chat/crown1.png',

    }, {
      'name': 'Elijah',
      'image': ' ../../assets/chat/chat5.jpg',
      'description': ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim laboriosam sunt nulla minima ratione, pariatur quaerat aut ex a ullam? Officia, explicabo optio. Dolores, ab exercitationem? Neque illo soluta sapiente!',
      'time': '18:25',
      'distance': '6km',
      'type': 'PRO', 'crown': '../../assets/chat/crown.png',

    }
    ];
  }

  ngOnInit() { }
  async goforChat(chat) {
    const modal = await this.modalCtrl.create({
      component: ChattingComponent,
      componentProps: { value: chat }
    });
    return await modal.present();
  }
}
