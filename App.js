import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Landing from "./components/Landing.js"
import { NativeRouter, Route }  from "react-router-native"
import CreateAccount from './components/CreateAccount.js';
import Swipe from "./components/Swipe.js"
import Settings from "./components/Settings.js"
import Favorites from "./components/Favorites.js"
import Profile from "./components/Profile.js"


export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      pets: [],
      favorites: []
    }
  }
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/createAccount" component={CreateAccount}></Route>
          <Route path="/Swipe" render={() => <Swipe cards={this.state.pets} swipeRight={this.swipeRight}></Swipe>}></Route>
          <Route path="/Settings" component={Settings}/>
          <Route path="/Favorites" render={() => <Favorites favorites={this.state.favorites}/>}/>
          <Route path="/Profile" component={Profile}/>
        </View>
      </NativeRouter>
    );
  }

  async componentDidMount() {
    let response = await fetch("https://petswipedb.herokuapp.com/pet_info")
    let json = await response.json()
    this.setState({pets: json})
}

swipeRight = (e) => {
  this.setState(prevState => ({
      favorites: [...prevState.favorites, e]
  }))
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
