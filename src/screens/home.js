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
            <Button buttonStyle={styles.loginButton} onPress={() => this.onSavePress()} title="Start Survey" />
            <Button buttonStyle={styles.loginButton} onPress={() => this.onSavePress()} title="View Survey Responses" />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
