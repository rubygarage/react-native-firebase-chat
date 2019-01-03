# react-native-firebase-chat
This repository contains the source code for a simple chat application built with React Native (frontend) and Firebase (backend).

Copy the config from your Firebase account and paste it to firebase.js file that can be found by the path: app/configs/firebase.js 

```javascript
export const firebaseConfig = {
  apiKey: “<API_KEY>“,
  authDomain: “<PROJECT_ID>.firebaseapp.com”,
  databaseURL: “https://<DATABASE_NAME>.firebaseio.com”,
  projectId: “<PROJECT_ID>“,
  storageBucket: “<BUCKET>.appspot.com”,
  messagingSenderId: “<SENDER_ID>“,
}
```

To run the iOS application, use the following command:

```
react-native run-ios
```

To run the Android application, use this command:

```
react-native run-android
```
***
<a href="https://rubygarage.org/"><img src="https://rubygarage.s3.amazonaws.com/assets/assets/rg_color_logo_horizontal-919afc51a81d2e40cb6a0b43ee832e3fcd49669d06785156d2d16fd0d799f89e.png" alt="RubyGarage Logo" width="415" height="128"></a>

RubyGarage is a leading software development and consulting company in Eastern Europe. Our main expertise includes Ruby and Ruby on Rails, but we successfully employ other technologies to deliver the best results to our clients. [Check out our portfolio](https://rubygarage.org/portfolio) for even more exciting works!
