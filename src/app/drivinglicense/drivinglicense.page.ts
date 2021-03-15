/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-drivinglicense',
  templateUrl: './drivinglicense.page.html',
  styleUrls: ['./drivinglicense.page.scss'],
})
export class DrivinglicensePage implements OnInit {

  public documents = [{
    'name': 'Update Profile',
    'icon': 'person',
  }];
  Card_number: any = '';
  Expiration_date: any = '';
  photos: any = [];

  constructor(public actionCtrl: ActionSheetController, public camera: Camera) { }

  ngOnInit() {
  }

  async openActionsheet() {
    const action = await this.actionCtrl.create({
      buttons: [{
        text: 'Take a picture',
        role: 'destructive',
        cssClass: 'buttonCss',
        handler: () => {
          this.openCamera();
          console.log('Take a picture clicked');
        }
      }, {
        text: 'Choose a picture',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'buttonCss_Cancel',

        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await action.present();
  }
  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    await this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(base64Image);
    }, (err) => {
      // Handle error
    });
  }

}
