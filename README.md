# CARPOOL
A generic Pool Cab booking app for Cab Booking and offer ride.

This is an ionic project for Cab pool booking application. You need to have Cordova and Ionic ^4.6.0 installed on the system to run it successfully

## Using this project

You must have cordova installed prior to this.

```
    $ npm install -g cordova
```


```
    $ npm install -g ionic
```

NOTE: This app is built and tested on ^4.6.0.


## Installation of this project

* Extract the zip file you received after purchase

* Install npm dependecies

```
    $ npm install
```

* Install Resources

```
    $ ionic cordova resources
```

* Add Platform (whichever required)

```
    $ ionic cordova platform add android
    $ ionic cordova platform add ios
```
in few cases, you might need to install the latest platform
```
    $ ionic cordova platform add android@latest
    $ ionic cordova platform add ios@latest
```

* Install Plugins (whichever required)

```
    $ ionic cordova plugin add YOUR_PLUGIN_NAME
```

* Initialize the new git
    ```git init```

* Setup the new git remotes accordingly
    ```git remote add origin new remote```


## Plugins List

```
      "cordova-plugin-geolocation": {},
      "cordova-plugin-googlemaps": {
        "PLAY_SERVICES_VERSION": "15.0.1",
        "ANDROID_SUPPORT_V4_VERSION": "27.+"
      },
      "cordova-plugin-whitelist": {},
      "cordova-plugin-statusbar": {},
      "cordova-plugin-device": {},
      "cordova-plugin-splashscreen": {},
      "cordova-plugin-ionic-webview": {
        "ANDROID_SUPPORT_ANNOTATIONS_VERSION": "27.+"
      },
      "cordova-plugin-ionic-keyboard": {},
      "cordova-plugin-camera": {}
```


* Run app on device

```
    $ ionic cordova run android
    $ ionic cordova run ios --device
```

* Create signing key for android to release on Google Play

```
    $ keytool -genkey -v -keystore keystore folder address -alias app alias -keyalg RSA -keysize 2048 -validity 10000
```

* Create release build for Android Play Store

```
    $ ionic cordova build android --release
```

* Sign the ‘unsigned’ APK for upload on Play store

```
    $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore .keystore file full path unsigned apk full path app alias
```


* Zipalign to optimize size for play store upload

```
    $ ./zipalign -v 4 signed apk full path path for final APK
``` 
```
During app installation, if you are facing some of the below errors then we have added the solutions. Please go through these if error occurs.
 
### Error1:-> 
```
Could not resolve all dependencies for configuration ':react-native-video:_debugPublishCopy'.
         > Could not find com.android.support:support-annotations:27.0.0.
```

### Solution1:->
Add these lines at the end of repositories inside of allprojects.
maven {
 url 'https://maven.google.com/'
name 'Google'
}
maven {
url "https://google.bintray.com/exoplayer"
}

### Error2:->
``` Attribute application@allowBackup value=(false) from AndroidManifest.xml:11:7-34
    is also present at [teleflix:react-native-splash-screen:unspecified] AndroidManifest.xml:12:9-35 value=(true).
    Suggestion: add 'tools:replace="android:allowBackup"' to <application> element at AndroidManifest.xml:7:5-24:19 to override.
 ```

### Solution2:->
Make it true at AndroidManifest.xml inside android/app/src/main/res/
 android:allowBackup="false"
to
 android:allowBackup="true"

 ```