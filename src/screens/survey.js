import React, { Component } from 'react';

import styles from '../styles';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  onSavePress() {
    // <HomeScreen />;
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>eduForm</Text>
            <TextInput placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Address 1" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Address 2" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Age" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput placeholder="Gender" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <Button buttonStyle={styles.loginButton} onPress={() => this.onSavePress()} title="Register" />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
