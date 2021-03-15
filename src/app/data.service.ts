/**
  * Car Pool starter (https://store.enappd.com/product/blablacar-cloneionic-4-car-pooling-app-starter)
 *
 * Copyright © 2019-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Injectable, NgZone } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { Observable, BehaviorSubject } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { MapsAPILoader } from '@agm/core';
declare var google;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public loadingCtrl: LoadingController, public modalCtrl: ModalController, public geolocation: Geolocation, public __zone: NgZone, public mapLoader: MapsAPILoader) {
    this.cardDetails = false;
    this.reRoutePickup = false;
    this.reRouteDestination = false;
    this.journey = true;
    this.dateTime = true;
    this.bookRideConfirmation = false;
    this.showInfo = true;
  }
  cardDetails: boolean;
  zoom = 15;
  showbutton = true;
  logIn = false;
  distance;
  path = '';
  flag = true;
  showdestination = '';
  carname = '';
  pickup = '';
  street = '';
  building = '';
  lat_lng = [];
  latarr = [];
  lanarr = [];
  mylatlng;
  showInfo: boolean;
  pickupLocation = '';
  journey: boolean;
  findridePickup = '';
  dateTime: boolean;
  destination: '';
  directionlat: any;
  directionlng: any;
  lat: number;
  lng: number;
  map: any;
  block: any;
  origin: { lat: number; lng: number; };
  marker: boolean;
  totalFare = '';
  totalpassengerCount = '';
  bookRideConfirmation: boolean;
  // Obsevables filters
  public latitudeOrigin = new BehaviorSubject<any>('');
  originlatitude = this.latitudeOrigin.asObservable();
  public longitudeOrigin = new BehaviorSubject<any>('');
  originlongititude = this.longitudeOrigin.asObservable();

  // pickup
  public pickupShow = new BehaviorSubject<any>('');
  showPickup = this.pickupShow.asObservable();

  // destination
  public destinationShow = new BehaviorSubject<any>('');
  showDestination = this.destinationShow.asObservable();

  // destination latitude
  public latitudeDestiation = new BehaviorSubject<any>('');
  destinationLatitude = this.latitudeDestiation.asObservable();

  // destination longitude
  public longitudeDestiation = new BehaviorSubject<any>('');
  destinationLongitude = this.longitudeDestiation.asObservable();

  // time selected
  public timeSelected = new BehaviorSubject<any>('');
  selectedTime = this.timeSelected.asObservable();

  // date selected
  public dateSelected = new BehaviorSubject<any>('');
  selectedDate = this.dateSelected.asObservable();

  // no of seats
  public passengerTotal = new BehaviorSubject<any>('');
  totalPassenger = this.passengerTotal.asObservable();
  // return journey date
  public dateReturn = new BehaviorSubject<any>('');
  returnDate = this.dateReturn.asObservable();

  // return journey time
  public timeReturn = new BehaviorSubject<any>('');
  returnTime = this.timeReturn.asObservable();

  // complete offer ride details
  public rideOffer = new BehaviorSubject<any>('');
  offerRide = this.rideOffer.asObservable();

  // re route latitude
  rerouteLat = new BehaviorSubject<any>('');
  latRerouting = this.rerouteLat.asObservable();

  // re route longitude
  rerouteLng = new BehaviorSubject<any>('');
  lngRerouting = this.rerouteLng.asObservable();

  // re route location
  rerouteLoc = new BehaviorSubject<any>('');
  locaReroutin = this.rerouteLoc.asObservable();

  // find ride pickup latitude , longitude & location
  public findrideLat = new BehaviorSubject<any>('');
  latitudeFindRide = this.findrideLat.asObservable();
  public findrideLng = new BehaviorSubject<any>('');
  longitudeFindRide = this.findrideLng.asObservable();
  public findrideLoc = new BehaviorSubject<any>('');
  locationFindRide = this.findrideLoc.asObservable();

  // find ride destination latitude , longitude & location
  public findrideDesLat = new BehaviorSubject<any>('');
  latitudeFindRideDes = this.findrideDesLat.asObservable();
  public findrideDesLng = new BehaviorSubject<any>('');
  longitudeFindRideDes = this.findrideDesLng.asObservable();
  public findrideLocDes = new BehaviorSubject<any>('');
  locationFindRideDes = this.findrideLocDes.asObservable();


  // findRide journey date
  public findrideDate = new BehaviorSubject<any>('');
  dateForFindride = this.findrideDate.asObservable();

  // findRide journey time
  public findrideTime = new BehaviorSubject<any>('');
  timeForFindride = this.findrideTime.asObservable();

  showpickupLocation: string;
  reRoute: boolean;
  reRoutePickup: boolean;
  reRouteDestination: boolean;

  tabrouting = [{
    tab: 'home',
    iconName: 'calendar',
    label: 'Rides',

  }, {
    tab: 'findride',
    iconName: 'search',
    label: 'Search',

  }, {
    tab: 'pickup',
    iconName: 'add-circle',
    label: 'Offer',

  }, {
    tab: 'inbox',
    iconName: 'chatbubbles',
    label: 'Inbox',

  }, {
    tab: 'profile',
    iconName: 'contact',
    label: 'Profile',

  }];
  profileData = [{
    image: '../../assets/image/Home.png',
    name: 'Enappd',
    userType: 'Newcomer',
  }];


  profileDetails = [{
    chooseProfile: 'Choose profile photo',
    header: 'About you',
    icon: 'more',
    headerText: 'write my mini biography',
    headerText1: 'Add my preferences'
  },
  {
    header: 'verification',
    icon: 'more',
    headerText: 'Verify my id',
    headerText1: 'Verify +91 123 325 452',
    headerText2: 'verify my Email',
    verifyId: [{ name: 'passport' }, { name: 'passport' }, { name: 'passport' }],
    verifyNo: [{
      icon: 'phone',
      head: 'just one thing',
      subheade: 'please verify your mobile number',
      items: [{ name: 'Region' }, { name: 'Phone number' }]
    }]
  },
  {
    header: 'car',
    headerText: 'add a car',
  }
  ];

  biograph = [{
    headerText: 'About you',
    header: 'Gender',
    model: 'Male'
  }, {
    header: 'First name',
    model: 'Enappd'
  }, {
    header: 'Last name',
    model: 'Youstart'
  }, {
    header: 'Year of birth',
    model: '1993'
  }, {
    header: 'your Bio',
    model: 'Describe yourself...',
    button: 'Save profile info'
  }, {
    header: 'email',
    label: 'Email',
    model: 'store.enappd.com',
    button: 'save email'
  }, {
    header: 'Mobile number',
    label: 'Region',
    model: 'India(+91)',
    label1: 'Phone number',
    model1: '123 1234 123',
    button1: 'save mobile number'
  }];

  preference = [{
    icon: 'chatbubbles',
    header: 'Chattiness',
    placeholder: 'I\'m the quiet type',
    list: [{
      model: 'the',
      chattiness: 'I\'m the quiet type'
    },
    {
      model: 'depending',
      chattiness: 'I talk depending on my mood'
    }, {
      model: 'love',
      chattiness: 'I love to chat'
    }]
  }, {
    placeholder: 'no smoking in the car please',
    icon: 'pin',
    header: 'Smoking',
    list: [{
      model: 'no',
      chattiness: 'no smoking in the car please'
    },
    {
      model: 'know',
      chattiness: 'don\'t know'
    }, {
      model: 'ciggrette',
      chattiness: 'ciggrette smoke doesn\'t bother me'
    }]
  }, {
    placeholder: 'silence is golden',
    icon: 'musical-notes',
    header: 'music',
    list: [{
      model: 'silence',
      chattiness: 'silence is golden'
    },
    {
      model: 'do',
      chattiness: 'don\'t know'
    }, {
      model: 'it',
      chattiness: 'it\'s all about the playlist'
    }]
  }, {
    placeholder: 'no pets please',
    icon: 'paw',
    header: 'pets',
    list: [{
      model: 'pets',
      chattiness: 'no pets please'
    },
    {
      model: 'don',
      chattiness: 'don\'t know'
    }, {
      model: 'welcome',
      chattiness: 'pets welcome. Woof!'
    }]
  }];
  countries = [
    {
      'name': 'Afghanistan',
      'dial_code': '+93',
      'code': 'AF',
    },
    {
      'name': 'Aland Islands',
      'dial_code': '+358',
      'code': 'AX',
    },
    {
      'name': 'Albania',
      'dial_code': '+355',
      'code': 'AL',
    },
    {
      'name': 'Algeria',
      'dial_code': '+213',
      'code': 'DZ',

    },
    {
      'name': 'AmericanSamoa',
      'dial_code': '+1 684',
      'code': 'AS',
    },
    {
      'name': 'Andorra',
      'dial_code': '+376',
      'code': 'AD',
    },
    {
      'name': 'Angola',
      'dial_code': '+244',
      'code': 'AO',
    },
    {
      'name': 'Anguilla',
      'dial_code': '+1 264',
      'code': 'AI',
    },
    {
      'name': 'Antarctica',
      'dial_code': '+672',
      'code': 'AQ',
    },
    {
      'name': 'Antigua and Barbuda',
      'dial_code': '+1268',
      'code': 'AG',
    },
    {
      'name': 'Argentina',
      'dial_code': '+54',
      'code': 'AR'
    },
    {
      'name': 'Armenia',
      'dial_code': '+374',
      'code': 'AM'
    },
    {
      'name': 'Aruba',
      'dial_code': '+297',
      'code': 'AW'
    },
    {
      'name': 'Australia',
      'dial_code': '+61',
      'code': 'AU'
    },
    {
      'name': 'Austria',
      'dial_code': '+43',
      'code': 'AT'
    },
    {
      'name': 'Azerbaijan',
      'dial_code': '+994',
      'code': 'AZ'
    },
    {
      'name': 'Bahamas',
      'dial_code': '+1 242',
      'code': 'BS'
    },
    {
      'name': 'Bahrain',
      'dial_code': '+973',
      'code': 'BH'
    },
    {
      'name': 'Bangladesh',
      'dial_code': '+880',
      'code': 'BD'
    },
    {
      'name': 'Barbados',
      'dial_code': '+1 246',
      'code': 'BB'
    },
    {
      'name': 'Belarus',
      'dial_code': '+375',
      'code': 'BY'
    },
    {
      'name': 'Belgium',
      'dial_code': '+32',
      'code': 'BE'
    },
    {
      'name': 'Belize',
      'dial_code': '+501',
      'code': 'BZ'
    },
    {
      'name': 'Benin',
      'dial_code': '+229',
      'code': 'BJ'
    },
    {
      'name': 'Bermuda',
      'dial_code': '+1 441',
      'code': 'BM'
    },
    {
      'name': 'Bhutan',
      'dial_code': '+975',
      'code': 'BT'
    },
    {
      'name': 'Bolivia, Plurinational State of',
      'dial_code': '+591',
      'code': 'BO'
    },
    {
      'name': 'Bosnia and Herzegovina',
      'dial_code': '+387',
      'code': 'BA'
    },
    {
      'name': 'Botswana',
      'dial_code': '+267',
      'code': 'BW'
    },
    {
      'name': 'Brazil',
      'dial_code': '+55',
      'code': 'BR'
    },
    {
      'name': 'British Indian Ocean Territory',
      'dial_code': '+246',
      'code': 'IO'
    },
    {
      'name': 'Brunei Darussalam',
      'dial_code': '+673',
      'code': 'BN'
    },
    {
      'name': 'Bulgaria',
      'dial_code': '+359',
      'code': 'BG'
    },
    {
      'name': 'Burkina Faso',
      'dial_code': '+226',
      'code': 'BF'
    },
    {
      'name': 'Burundi',
      'dial_code': '+257',
      'code': 'BI'
    },
    {
      'name': 'Cambodia',
      'dial_code': '+855',
      'code': 'KH'
    },
    {
      'name': 'Cameroon',
      'dial_code': '+237',
      'code': 'CM'
    },
    {
      'name': 'Canada',
      'dial_code': '+1',
      'code': 'CA'
    },
    {
      'name': 'Cape Verde',
      'dial_code': '+238',
      'code': 'CV'
    },
    {
      'name': 'Cayman Islands',
      'dial_code': '+ 345',
      'code': 'KY'
    },
    {
      'name': 'Central African Republic',
      'dial_code': '+236',
      'code': 'CF'
    },
    {
      'name': 'Chad',
      'dial_code': '+235',
      'code': 'TD'
    },
    {
      'name': 'Chile',
      'dial_code': '+56',
      'code': 'CL'
    },
    {
      'name': 'China',
      'dial_code': '+86',
      'code': 'CN'
    },
    {
      'name': 'Christmas Island',
      'dial_code': '+61',
      'code': 'CX'
    },
    {
      'name': 'Cocos (Keeling) Islands',
      'dial_code': '+61',
      'code': 'CC'
    },
    {
      'name': 'Colombia',
      'dial_code': '+57',
      'code': 'CO'
    },
    {
      'name': 'Comoros',
      'dial_code': '+269',
      'code': 'KM'
    },
    {
      'name': 'Congo',
      'dial_code': '+242',
      'code': 'CG'
    },
    {
      'name': 'Congo, The Democratic Republic of the Congo',
      'dial_code': '+243',
      'code': 'CD'
    },
    {
      'name': 'Cook Islands',
      'dial_code': '+682',
      'code': 'CK'
    },
    {
      'name': 'Costa Rica',
      'dial_code': '+506',
      'code': 'CR'
    },
    {
      'name': 'Cote d\'Ivoire',
      'dial_code': '+225',
      'code': 'CI'
    },
    {
      'name': 'Croatia',
      'dial_code': '+385',
      'code': 'HR'
    },
    {
      'name': 'Cuba',
      'dial_code': '+53',
      'code': 'CU'
    },
    {
      'name': 'Cyprus',
      'dial_code': '+357',
      'code': 'CY'
    },
    {
      'name': 'Czech Republic',
      'dial_code': '+420',
      'code': 'CZ'
    },
    {
      'name': 'Denmark',
      'dial_code': '+45',
      'code': 'DK'
    },
    {
      'name': 'Djibouti',
      'dial_code': '+253',
      'code': 'DJ'
    },
    {
      'name': 'Dominica',
      'dial_code': '+1 767',
      'code': 'DM'
    },
    {
      'name': 'Dominican Republic',
      'dial_code': '+1 849',
      'code': 'DO'
    },
    {
      'name': 'Ecuador',
      'dial_code': '+593',
      'code': 'EC'
    },
    {
      'name': 'Egypt',
      'dial_code': '+20',
      'code': 'EG'
    },
    {
      'name': 'El Salvador',
      'dial_code': '+503',
      'code': 'SV'
    },
    {
      'name': 'Equatorial Guinea',
      'dial_code': '+240',
      'code': 'GQ'
    },
    {
      'name': 'Eritrea',
      'dial_code': '+291',
      'code': 'ER'
    },
    {
      'name': 'Estonia',
      'dial_code': '+372',
      'code': 'EE'
    },
    {
      'name': 'Ethiopia',
      'dial_code': '+251',
      'code': 'ET'
    },
    {
      'name': 'Falkland Islands (Malvinas)',
      'dial_code': '+500',
      'code': 'FK'
    },
    {
      'name': 'Faroe Islands',
      'dial_code': '+298',
      'code': 'FO'
    },
    {
      'name': 'Fiji',
      'dial_code': '+679',
      'code': 'FJ'
    },
    {
      'name': 'Finland',
      'dial_code': '+358',
      'code': 'FI'
    },
    {
      'name': 'France',
      'dial_code': '+33',
      'code': 'FR'
    },
    {
      'name': 'French Guiana',
      'dial_code': '+594',
      'code': 'GF'
    },
    {
      'name': 'French Polynesia',
      'dial_code': '+689',
      'code': 'PF'
    },
    {
      'name': 'Gabon',
      'dial_code': '+241',
      'code': 'GA'
    },
    {
      'name': 'Gambia',
      'dial_code': '+220',
      'code': 'GM'
    },
    {
      'name': 'Georgia',
      'dial_code': '+995',
      'code': 'GE'
    },
    {
      'name': 'Germany',
      'dial_code': '+49',
      'code': 'DE'
    },
    {
      'name': 'Ghana',
      'dial_code': '+233',
      'code': 'GH'
    },
    {
      'name': 'Gibraltar',
      'dial_code': '+350',
      'code': 'GI'
    },
    {
      'name': 'Greece',
      'dial_code': '+30',
      'code': 'GR'
    },
    {
      'name': 'Greenland',
      'dial_code': '+299',
      'code': 'GL'
    },
    {
      'name': 'Grenada',
      'dial_code': '+1 473',
      'code': 'GD'
    },
    {
      'name': 'Guadeloupe',
      'dial_code': '+590',
      'code': 'GP'
    },
    {
      'name': 'Guam',
      'dial_code': '+1 671',
      'code': 'GU'
    },
    {
      'name': 'Guatemala',
      'dial_code': '+502',
      'code': 'GT'
    },
    {
      'name': 'Guernsey',
      'dial_code': '+44',
      'code': 'GG'
    },
    {
      'name': 'Guinea',
      'dial_code': '+224',
      'code': 'GN'
    },
    {
      'name': 'Guinea-Bissau',
      'dial_code': '+245',
      'code': 'GW'
    },
    {
      'name': 'Guyana',
      'dial_code': '+595',
      'code': 'GY'
    },
    {
      'name': 'Haiti',
      'dial_code': '+509',
      'code': 'HT'
    },
    {
      'name': 'Holy See (Vatican City State)',
      'dial_code': '+379',
      'code': 'VA'
    },
    {
      'name': 'Honduras',
      'dial_code': '+504',
      'code': 'HN'
    },
    {
      'name': 'Hong Kong',
      'dial_code': '+852',
      'code': 'HK'
    },
    {
      'name': 'Hungary',
      'dial_code': '+36',
      'code': 'HU'
    },
    {
      'name': 'Iceland',
      'dial_code': '+354',
      'code': 'IS'
    },
    {
      'name': 'India',
      'dial_code': '+91',
      'code': 'IN'
    },
    {
      'name': 'Indonesia',
      'dial_code': '+62',
      'code': 'ID'
    },
    {
      'name': 'Iran, Islamic Republic of Persian Gulf',
      'dial_code': '+98',
      'code': 'IR'
    },
    {
      'name': 'Iraq',
      'dial_code': '+964',
      'code': 'IQ'
    },
    {
      'name': 'Ireland',
      'dial_code': '+353',
      'code': 'IE'
    },
    {
      'name': 'Isle of Man',
      'dial_code': '+44',
      'code': 'IM'
    },
    {
      'name': 'Israel',
      'dial_code': '+972',
      'code': 'IL'
    },
    {
      'name': 'Italy',
      'dial_code': '+39',
      'code': 'IT'
    },
    {
      'name': 'Jamaica',
      'dial_code': '+1 876',
      'code': 'JM'
    },
    {
      'name': 'Japan',
      'dial_code': '+81',
      'code': 'JP'
    },
    {
      'name': 'Jersey',
      'dial_code': '+44',
      'code': 'JE'
    },
    {
      'name': 'Jordan',
      'dial_code': '+962',
      'code': 'JO'
    },
    {
      'name': 'Kazakhstan',
      'dial_code': '+7 7',
      'code': 'KZ'
    },
    {
      'name': 'Kenya',
      'dial_code': '+254',
      'code': 'KE'
    },
    {
      'name': 'Kiribati',
      'dial_code': '+686',
      'code': 'KI'
    },
    {
      'name': 'Korea, Democratic People\'s Republic of Korea',
      'dial_code': '+850',
      'code': 'KP'
    },
    {
      'name': 'Korea, Republic of South Korea',
      'dial_code': '+82',
      'code': 'KR'
    },
    {
      'name': 'Kuwait',
      'dial_code': '+965',
      'code': 'KW'
    },
    {
      'name': 'Kyrgyzstan',
      'dial_code': '+996',
      'code': 'KG'
    },
    {
      'name': 'Laos',
      'dial_code': '+856',
      'code': 'LA'
    },
    {
      'name': 'Latvia',
      'dial_code': '+371',
      'code': 'LV'
    },
    {
      'name': 'Lebanon',
      'dial_code': '+961',
      'code': 'LB'
    },
    {
      'name': 'Lesotho',
      'dial_code': '+266',
      'code': 'LS'
    },
    {
      'name': 'Liberia',
      'dial_code': '+231',
      'code': 'LR'
    },
    {
      'name': 'Libyan Arab Jamahiriya',
      'dial_code': '+218',
      'code': 'LY'
    },
    {
      'name': 'Liechtenstein',
      'dial_code': '+423',
      'code': 'LI'
    },
    {
      'name': 'Lithuania',
      'dial_code': '+370',
      'code': 'LT'
    },
    {
      'name': 'Luxembourg',
      'dial_code': '+352',
      'code': 'LU'
    },
    {
      'name': 'Macao',
      'dial_code': '+853',
      'code': 'MO'
    },
    {
      'name': 'Macedonia',
      'dial_code': '+389',
      'code': 'MK'
    },
    {
      'name': 'Madagascar',
      'dial_code': '+261',
      'code': 'MG'
    },
    {
      'name': 'Malawi',
      'dial_code': '+265',
      'code': 'MW'
    },
    {
      'name': 'Malaysia',
      'dial_code': '+60',
      'code': 'MY'
    },
    {
      'name': 'Maldives',
      'dial_code': '+960',
      'code': 'MV'
    },
    {
      'name': 'Mali',
      'dial_code': '+223',
      'code': 'ML'
    },
    {
      'name': 'Malta',
      'dial_code': '+356',
      'code': 'MT'
    },
    {
      'name': 'Marshall Islands',
      'dial_code': '+692',
      'code': 'MH'
    },
    {
      'name': 'Martinique',
      'dial_code': '+596',
      'code': 'MQ'
    },
    {
      'name': 'Mauritania',
      'dial_code': '+222',
      'code': 'MR'
    },
    {
      'name': 'Mauritius',
      'dial_code': '+230',
      'code': 'MU'
    },
    {
      'name': 'Mayotte',
      'dial_code': '+262',
      'code': 'YT'
    },
    {
      'name': 'Mexico',
      'dial_code': '+52',
      'code': 'MX'
    },
    {
      'name': 'Micronesia, Federated States of Micronesia',
      'dial_code': '+691',
      'code': 'FM'
    },
    {
      'name': 'Moldova',
      'dial_code': '+373',
      'code': 'MD'
    },
    {
      'name': 'Monaco',
      'dial_code': '+377',
      'code': 'MC'
    },
    {
      'name': 'Mongolia',
      'dial_code': '+976',
      'code': 'MN'
    },
    {
      'name': 'Montenegro',
      'dial_code': '+382',
      'code': 'ME'
    },
    {
      'name': 'Montserrat',
      'dial_code': '+1664',
      'code': 'MS'
    },
    {
      'name': 'Morocco',
      'dial_code': '+212',
      'code': 'MA'
    },
    {
      'name': 'Mozambique',
      'dial_code': '+258',
      'code': 'MZ'
    },
    {
      'name': 'Myanmar',
      'dial_code': '+95',
      'code': 'MM'
    },
    {
      'name': 'Namibia',
      'dial_code': '+264',
      'code': 'NA'
    },
    {
      'name': 'Nauru',
      'dial_code': '+674',
      'code': 'NR'
    },
    {
      'name': 'Nepal',
      'dial_code': '+977',
      'code': 'NP'
    },
    {
      'name': 'Netherlands',
      'dial_code': '+31',
      'code': 'NL'
    },
    {
      'name': 'Netherlands Antilles',
      'dial_code': '+599',
      'code': 'AN'
    },
    {
      'name': 'New Caledonia',
      'dial_code': '+687',
      'code': 'NC'
    },
    {
      'name': 'New Zealand',
      'dial_code': '+64',
      'code': 'NZ'
    },
    {
      'name': 'Nicaragua',
      'dial_code': '+505',
      'code': 'NI'
    },
    {
      'name': 'Niger',
      'dial_code': '+227',
      'code': 'NE'
    },
    {
      'name': 'Nigeria',
      'dial_code': '+234',
      'code': 'NG'
    },
    {
      'name': 'Niue',
      'dial_code': '+683',
      'code': 'NU'
    },
    {
      'name': 'Norfolk Island',
      'dial_code': '+672',
      'code': 'NF'
    },
    {
      'name': 'Northern Mariana Islands',
      'dial_code': '+1 670',
      'code': 'MP'
    },
    {
      'name': 'Norway',
      'dial_code': '+47',
      'code': 'NO'
    },
    {
      'name': 'Oman',
      'dial_code': '+968',
      'code': 'OM'
    },
    {
      'name': 'Pakistan',
      'dial_code': '+92',
      'code': 'PK'
    },
    {
      'name': 'Palau',
      'dial_code': '+680',
      'code': 'PW'
    },
    {
      'name': 'Palestinian Territory, Occupied',
      'dial_code': '+970',
      'code': 'PS'
    },
    {
      'name': 'Panama',
      'dial_code': '+507',
      'code': 'PA'
    },
    {
      'name': 'Papua New Guinea',
      'dial_code': '+675',
      'code': 'PG'
    },
    {
      'name': 'Paraguay',
      'dial_code': '+595',
      'code': 'PY'
    },
    {
      'name': 'Peru',
      'dial_code': '+51',
      'code': 'PE'
    },
    {
      'name': 'Philippines',
      'dial_code': '+63',
      'code': 'PH'
    },
    {
      'name': 'Pitcairn',
      'dial_code': '+872',
      'code': 'PN'
    },
    {
      'name': 'Poland',
      'dial_code': '+48',
      'code': 'PL'
    },
    {
      'name': 'Portugal',
      'dial_code': '+351',
      'code': 'PT'
    },
    {
      'name': 'Puerto Rico',
      'dial_code': '+1 939',
      'code': 'PR'
    },
    {
      'name': 'Qatar',
      'dial_code': '+974',
      'code': 'QA'
    },
    {
      'name': 'Romania',
      'dial_code': '+40',
      'code': 'RO'
    },
    {
      'name': 'Russia',
      'dial_code': '+7',
      'code': 'RU'
    },
    {
      'name': 'Rwanda',
      'dial_code': '+250',
      'code': 'RW'
    },
    {
      'name': 'Reunion',
      'dial_code': '+262',
      'code': 'RE'
    },
    {
      'name': 'Saint Barthelemy',
      'dial_code': '+590',
      'code': 'BL'
    },
    {
      'name': 'Saint Helena, Ascension and Tristan Da Cunha',
      'dial_code': '+290',
      'code': 'SH'
    },
    {
      'name': 'Saint Kitts and Nevis',
      'dial_code': '+1 869',
      'code': 'KN'
    },
    {
      'name': 'Saint Lucia',
      'dial_code': '+1 758',
      'code': 'LC'
    },
    {
      'name': 'Saint Martin',
      'dial_code': '+590',
      'code': 'MF'
    },
    {
      'name': 'Saint Pierre and Miquelon',
      'dial_code': '+508',
      'code': 'PM'
    },
    {
      'name': 'Saint Vincent and the Grenadines',
      'dial_code': '+1 784',
      'code': 'VC'
    },
    {
      'name': 'Samoa',
      'dial_code': '+685',
      'code': 'WS'
    },
    {
      'name': 'San Marino',
      'dial_code': '+378',
      'code': 'SM'
    },
    {
      'name': 'Sao Tome and Principe',
      'dial_code': '+239',
      'code': 'ST'
    },
    {
      'name': 'Saudi Arabia',
      'dial_code': '+966',
      'code': 'SA'
    },
    {
      'name': 'Senegal',
      'dial_code': '+221',
      'code': 'SN'
    },
    {
      'name': 'Serbia',
      'dial_code': '+381',
      'code': 'RS'
    },
    {
      'name': 'Seychelles',
      'dial_code': '+248',
      'code': 'SC'
    },
    {
      'name': 'Sierra Leone',
      'dial_code': '+232',
      'code': 'SL'
    },
    {
      'name': 'Singapore',
      'dial_code': '+65',
      'code': 'SG'
    },
    {
      'name': 'Slovakia',
      'dial_code': '+421',
      'code': 'SK'
    },
    {
      'name': 'Slovenia',
      'dial_code': '+386',
      'code': 'SI'
    },
    {
      'name': 'Solomon Islands',
      'dial_code': '+677',
      'code': 'SB'
    },
    {
      'name': 'Somalia',
      'dial_code': '+252',
      'code': 'SO'
    },
    {
      'name': 'South Africa',
      'dial_code': '+27',
      'code': 'ZA'
    },
    {
      'name': 'South Georgia and the South Sandwich Islands',
      'dial_code': '+500',
      'code': 'GS'
    },
    {
      'name': 'Spain',
      'dial_code': '+34',
      'code': 'ES'
    },
    {
      'name': 'Sri Lanka',
      'dial_code': '+94',
      'code': 'LK'
    },
    {
      'name': 'Sudan',
      'dial_code': '+249',
      'code': 'SD'
    },
    {
      'name': 'Suriname',
      'dial_code': '+597',
      'code': 'SR'
    },
    {
      'name': 'Svalbard and Jan Mayen',
      'dial_code': '+47',
      'code': 'SJ'
    },
    {
      'name': 'Swaziland',
      'dial_code': '+268',
      'code': 'SZ'
    },
    {
      'name': 'Sweden',
      'dial_code': '+46',
      'code': 'SE'
    },
    {
      'name': 'Switzerland',
      'dial_code': '+41',
      'code': 'CH'
    },
    {
      'name': 'Syrian Arab Republic',
      'dial_code': '+963',
      'code': 'SY'
    },
    {
      'name': 'Taiwan',
      'dial_code': '+886',
      'code': 'TW'
    },
    {
      'name': 'Tajikistan',
      'dial_code': '+992',
      'code': 'TJ'
    },
    {
      'name': 'Tanzania, United Republic of Tanzania',
      'dial_code': '+255',
      'code': 'TZ'
    },
    {
      'name': 'Thailand',
      'dial_code': '+66',
      'code': 'TH'
    },
    {
      'name': 'Timor-Leste',
      'dial_code': '+670',
      'code': 'TL'
    },
    {
      'name': 'Togo',
      'dial_code': '+228',
      'code': 'TG'
    },
    {
      'name': 'Tokelau',
      'dial_code': '+690',
      'code': 'TK'
    },
    {
      'name': 'Tonga',
      'dial_code': '+676',
      'code': 'TO'
    },
    {
      'name': 'Trinidad and Tobago',
      'dial_code': '+1 868',
      'code': 'TT'
    },
    {
      'name': 'Tunisia',
      'dial_code': '+216',
      'code': 'TN'
    },
    {
      'name': 'Turkey',
      'dial_code': '+90',
      'code': 'TR'
    },
    {
      'name': 'Turkmenistan',
      'dial_code': '+993',
      'code': 'TM'
    },
    {
      'name': 'Turks and Caicos Islands',
      'dial_code': '+1 649',
      'code': 'TC'
    },
    {
      'name': 'Tuvalu',
      'dial_code': '+688',
      'code': 'TV'
    },
    {
      'name': 'Uganda',
      'dial_code': '+256',
      'code': 'UG'
    },
    {
      'name': 'Ukraine',
      'dial_code': '+380',
      'code': 'UA'
    },
    {
      'name': 'United Arab Emirates',
      'dial_code': '+971',
      'code': 'AE'
    },
    {
      'name': 'United Kingdom',
      'dial_code': '+44',
      'code': 'GB'
    },
    {
      'name': 'United States',
      'dial_code': '+1',
      'code': 'US'
    },
    {
      'name': 'Uruguay',
      'dial_code': '+598',
      'code': 'UY'
    },
    {
      'name': 'Uzbekistan',
      'dial_code': '+998',
      'code': 'UZ'
    },
    {
      'name': 'Vanuatu',
      'dial_code': '+678',
      'code': 'VU'
    },
    {
      'name': 'Venezuela, Bolivarian Republic of Venezuela',
      'dial_code': '+58',
      'code': 'VE'
    },
    {
      'name': 'Vietnam',
      'dial_code': '+84',
      'code': 'VN'
    },
    {
      'name': 'Virgin Islands, British',
      'dial_code': '+1 284',
      'code': 'VG'
    },
    {
      'name': 'Virgin Islands, U.S.',
      'dial_code': '+1 340',
      'code': 'VI'
    },
    {
      'name': 'Wallis and Futuna',
      'dial_code': '+681',
      'code': 'WF'
    },
    {
      'name': 'Yemen',
      'dial_code': '+967',
      'code': 'YE'
    },
    {
      'name': 'Zambia',
      'dial_code': '+260',
      'code': 'ZM'
    },
    {
      'name': 'Zimbabwe',
      'dial_code': '+263',
      'code': 'ZW'
    }
  ];
  emailVerification = [{
    para: 'Control the emails you want to get - all of them, just the important stuff or the bare minimum.you can always unsubscribe from the bottom of email.',
  },
  {
    email: 'Enappd@Enappd.com.',
    toggle: false,
    emailDesc: 'Email not verified.Tap below to request a verification email.'
  }, {
    head: 'New Rides',
    toggle: true

  }, {
    head: 'Ride offerings',
    toggle: true

  }, {
    head: 'Promotions',
    toggle: true,
    des: 'I want to receive news, updates and offers from Carpool.'
  }];
  cards = [{
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  },
  {
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  },
  {
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  },
  {
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  },
  {
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  },
  {
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  },
  {
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  },
  {
    'iconName': 'arrow-dropdown-circle',
    'iconName2': 'pin',
    'label': 'Near Delhi To Ajmer Bypass',
    'image': '../../assets/image/mini.png',
    'label2': 'Benar Road, Dadi Ka Phatak,',
    'text': '10/13/17 at 20:26',
    'text2': '325 Rs.',
    'head': 'Maruti Suzuki alto(Sedan)',
  }
  ];

  changeFilterPicup(lat, lng, pickup) {
    this.latitudeOrigin.next(lat);
    this.longitudeOrigin.next(lng);
    this.pickupShow.next(pickup);
  }

  changefilterDestination(des_lat, des_lng, destination) {
    this.latitudeDestiation.next(des_lat);
    this.longitudeDestiation.next(des_lng);
    this.destinationShow.next(destination);

  }
  rerouteLocation(reroute_lat, reroute_lng, reroute_destination) {
    this.rerouteLat.next(reroute_lat);
    this.rerouteLng.next(reroute_lng);
    this.rerouteLoc.next(reroute_destination);
  }

  planTime(time_selected) {
    this.timeSelected.next(time_selected);
  }

  planDate(date_Selected) {
    this.dateSelected.next(date_Selected);
  }
  findrideplanTime(date_Selected) {
    this.findrideTime.next(date_Selected);
  }
  findrideplanDate(date_Selected) {
    this.findrideDate.next(date_Selected);
  }


  planPassenger(total_Passenger) {
    this.passengerTotal.next(total_Passenger);
  }

  returnPlan(return_journey_Date) {
    this.dateReturn.next(return_journey_Date);
  }

  returnTimePlan(return_journey_time) {
    this.timeReturn.next(return_journey_time);
  }
  completeRideInfo(ride_offer_details) {
    this.rideOffer.next(ride_offer_details);
  }

  findRidePickup(findRide_lat, findRide_Lng, findRide_loc) {
    this.findrideLat.next(findRide_lat);
    this.findrideLng.next(findRide_Lng);
    this.findrideLoc.next(findRide_loc);
  }
  findRideDestination(findRide_lat, findRide_Lng, findRide_loc) {
    this.findrideDesLat.next(findRide_lat);
    this.findrideDesLng.next(findRide_Lng);
    this.findrideLocDes.next(findRide_loc);
  }

  getLatLan(address: string) {
    const geocoder = new google.maps.Geocoder();
    return Observable.create(observer => {
      geocoder.geocode({ 'address': address }, function (results: { geometry: { location: any; }; }[], status: any) {
        if (status === google.maps.GeocoderStatus.OK) {
          observer.next(results[0].geometry.location);
          observer.complete();
        } else {
          observer.next({ 'err': true });
          observer.complete();
        }
      });
    });
  }

  async getCurrentLoaction() {
    const loader = await this.loading('Getting your location..');
    loader.present();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.__zone.run(() => {
        const latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
        const mapOptions = {
          center: latLng,
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.changeFilterPicup(this.lat, this.lng, '');
        this.map = new google.maps.Map(mapOptions);
        this.getGeoLocation(resp.coords.latitude, resp.coords.longitude);
        loader.dismiss();
      });
      loader.dismiss();
    }).catch((error) => {
      loader.dismiss();
    }).finally(() => {
      loader.dismiss();
    });
    const watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {

    });
  }

  async getGeoLocation(lat: number, lng: number) {
    if (navigator.geolocation) {
      const geocoder = await new google.maps.Geocoder();
      const latlng = await new google.maps.LatLng(lat, lng);
      const request = { latLng: latlng };

      await geocoder.geocode(request, (results: any[], status: any) => {
        if (status === google.maps.GeocoderStatus.OK) {
          const result = results[0];
          const rsltAdrComponent = result.address_components;
          if (result != null) {
            if (rsltAdrComponent[0] != null) {
              this.block = rsltAdrComponent[0].long_name;
              this.street = rsltAdrComponent[2].short_name;
              this.building = rsltAdrComponent[1].short_name;
            }
            if (this.flag === true && this.pickup !== 'India') {
              this.pickup = this.block + ' ' + this.street + ' ' + this.building;
              this.changeFilterPicup(lat, lng, this.pickup);

              console.log(this.pickup);
            }
          } else {
            alert('No address available!');
          }
        }
      });
    }
  }



  async opneModal(component?, props?, modalClass?) {
    const modal = await this.modalCtrl.create({
      component: component,
      componentProps: props,
      cssClass: modalClass
    });
    return modal.present();
  }
  async loading(message) {
    const loader = await this.loadingCtrl.create({
      message
    });
    return loader;
  }

}
