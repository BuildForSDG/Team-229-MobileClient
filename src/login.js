import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';
import HomeScreen from './screens/home';
import { Text, View, TextInput, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends Component {
  componentDidMount() {}

  componentWillUnmount() {}

  onLoginPress() {
    <HomeScreen />;
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>eduForm</Text>
            <TextInput placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
            />
            <Button buttonStyle={styles.loginButton} onPress={() => this.onLoginPress()} title="Login" />
            <Button
              buttonStyle={styles.fbLoginButton}
              onPress={() => this.onFbLoginPress()}
              title="Create Account"
              color="#3897f1"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
