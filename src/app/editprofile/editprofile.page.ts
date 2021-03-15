/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.page.html',
  styleUrls: ['./editprofile.page.scss'],
})
export class EditprofilePage implements OnInit {
  bioData: any;

  constructor(public actvRouter: ActivatedRoute, public service: DataService, public camera: Camera, public toastCtrl: ToastController, public route: Router) {
    this.bioData = service.biograph;
   }

  ngOnInit() {
  }
  takeProfilePic() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      const base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      // Handle error
    });
  }
  async showdataSavedToast() {
    const toast = await this.toastCtrl.create({
      message: 'Your data have been saved successfully.',
      duration: 2000,
      cssClass: 'toastCss'
    });
    toast.present();
    this.route.navigate(['/tabs/profile']);
  }

}
