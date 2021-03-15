/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './signup/signup.module#SignupPageModule' },
  { path: 'loginform', loadChildren: './loginform/loginform.module#LoginformPageModule' },
  { path: 'forgotpassword', loadChildren: './forgotpassword/forgotpassword.module#ForgotpasswordPageModule' },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'pickup',
        children: [
          {
            path: '',
            loadChildren: './pickup/pickup.module#PickupPageModule'
          }
        ]
      },

      {
        path: 'inbox',
        children: [
          {
            path: '',
            loadChildren: './inbox/inbox.module#InboxPageModule'
          }
        ]
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: './profile/profile.module#ProfilePageModule'
          }
        ]
      },
      {
        path: 'findride',
        children: [
          {
            path: '',
            loadChildren: './findride/findride.module#FindridePageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'inbox', loadChildren: './inbox/inbox.module#InboxPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'editprofile', loadChildren: './editprofile/editprofile.module#EditprofilePageModule' },
  { path: 'preferences', loadChildren: './preferences/preferences.module#PreferencesPageModule' },
  { path: 'addcar', loadChildren: './addcar/addcar.module#AddcarPageModule' },
  { path: 'verifyphone', loadChildren: './verifyphone/verifyphone.module#VerifyphonePageModule' },
  { path: 'verifyid', loadChildren: './verifyid/verifyid.module#VerifyidPageModule' },
  { path: 'verifyemail', loadChildren: './verifyemail/verifyemail.module#VerifyemailPageModule' },
  { path: 'addnewvehicle', loadChildren: './addnewvehicle/addnewvehicle.module#AddnewvehiclePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'dropoff', loadChildren: './dropoff/dropoff.module#DropoffPageModule' },
  { path: 'pickup', loadChildren: './pickup/pickup.module#PickupPageModule' },
  { path: 'calender', loadChildren: './calender/calender.module#CalenderPageModule' },
  { path: 'selecttime', loadChildren: './selecttime/selecttime.module#SelecttimePageModule' },
  { path: 'middleseat', loadChildren: './middleseat/middleseat.module#MiddleseatPageModule' },
  { path: 'totalpassengers', loadChildren: './totalpassengers/totalpassengers.module#TotalpassengersPageModule' },
  { path: 'recommendedprice', loadChildren: './recommendedprice/recommendedprice.module#RecommendedpricePageModule' },
  { path: 'bookinstantly', loadChildren: './bookinstantly/bookinstantly.module#BookinstantlyPageModule' },
  { path: 'comingback', loadChildren: './comingback/comingback.module#ComingbackPageModule' },
  { path: 'addreturndescription', loadChildren: './addreturndescription/addreturndescription.module#AddreturndescriptionPageModule' },
  { path: 'offerrideconfirmation', loadChildren: './offerrideconfirmation/offerrideconfirmation.module#OfferrideconfirmationPageModule' },
  { path: 'editprice', loadChildren: './editprice/editprice.module#EditpricePageModule' },
  { path: 'editpricelist', loadChildren: './editpricelist/editpricelist.module#EditpricelistPageModule' },
  { path: 'returntime', loadChildren: './returntime/returntime.module#ReturntimePageModule' },
  { path: 'editride', loadChildren: './editride/editride.module#EditridePageModule' },
  { path: 'journey', loadChildren: './journey/journey.module#JourneyPageModule' },
  { path: 'stopover', loadChildren: './stopover/stopover.module#StopoverPageModule' },
  { path: 'direction', loadChildren: './direction/direction.module#DirectionPageModule' },
  { path: 'passengersoption', loadChildren: './passengersoption/passengersoption.module#PassengersoptionPageModule' },
  { path: 'deleteride', loadChildren: './deleteride/deleteride.module#DeleteridePageModule' },
  { path: 'findride', loadChildren: './findride/findride.module#FindridePageModule' },
  { path: 'findridesearch-result', loadChildren: './findridesearch-result/findridesearch-result.module#FindridesearchResultPageModule' },
  { path: 'ridedetails', loadChildren: './ridedetails/ridedetails.module#RidedetailsPageModule' },
  { path: 'checkbooking', loadChildren: './checkbooking/checkbooking.module#CheckbookingPageModule' },
  { path: 'bookingconfirmation', loadChildren: './bookingconfirmation/bookingconfirmation.module#BookingconfirmationPageModule' },
  { path: 'phoneverification', loadChildren: './phoneverification/phoneverification.module#PhoneverificationPageModule' },
  { path: 'drivinglicense', loadChildren: './drivinglicense/drivinglicense.module#DrivinglicensePageModule' },
  { path: 'signupwithemail', loadChildren: './signupwithemail/signupwithemail.module#SignupwithemailPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
