import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Landing from "./components/Landing.js"
import { NativeRouter, Route }  from "react-router-native"
import CreateAccount from './components/CreateAccount.js';


export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/createAccount" component={CreateAccount}></Route>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
