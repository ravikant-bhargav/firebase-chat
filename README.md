# firebase-chat
simple setup to integrate Firebase chat functionality into your React Native app using the latest Firebase SDK (v9+)



# Install Required Dependencies

Open your terminal in the React Native project and run the following commands:

npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore

# Firebase Configuration

Set up Firebase for your app. Follow the steps on the Firebase console to create a project and get the configuration file. You'll need to register the app with Firebase and download the google-services.json for Android or GoogleService-Info.plist for iOS.

# App Setup for Firebase

Android: Place the google-services.json file in your android/app folder.
Modify android/build.gradle:


Copy code
buildscript {
  dependencies {
    // Add this line
    classpath 'com.google.gms:google-services:4.3.10'
  }
}
Modify android/app/build.gradle:


apply plugin: 'com.google.gms.google-services' // Add this line


# iOS: Follow the instructions to place GoogleService-Info.plist in your project. Modify AppDelegate.m as needed for Firebase.
