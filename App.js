import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignupForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAUXngifj7SiWvos1HNGkGnB-S-bFONVlU',
      authDomain: 'one-time-password-53c44.firebaseapp.com',
      databaseURL: 'https://one-time-password-53c44.firebaseio.com',
      projectId: 'one-time-password-53c44',
      storageBucket: 'one-time-password-53c44.appspot.com',
      messagingSenderId: '125619423411'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
