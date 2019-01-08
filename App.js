import React from 'react'
import { StyleSheet, Text, View, Alert} from 'react-native'
import { NativeRouter, Route, Redirect } from "react-router-native"
import Landing from "./components/Landing.js"
import CreateAccount from './components/CreateAccount.js'
import Swipe from "./components/Swipe.js"
import Settings from "./components/Settings.js"
import Favorites from "./components/Favorites.js"
import Profile from "./components/Profile.js"
import PetForm from "./components/PetForm.js"

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      pets: [],
      favorites: [],
      selected: 0
    }
  }
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/createAccount" component={CreateAccount}></Route>
          <Route path="/Swipe" render={() => <Swipe cards={this.state.pets} swipeRight={this.swipeRight} swipeLeft={this.swipeLeft}></Swipe>}></Route>
          <Route path="/Settings" component={Settings}/>
          <Route path="/Favorites" render={() => <Favorites {...this.state} selectPet={this.selectPet} deselect={this.deselectPet}/>}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/PetForm" render={() => <PetForm/> }/>
        </View>
      </NativeRouter>
    );
  }

  async componentDidMount() {
    let response = await fetch("https://petswipedb.herokuapp.com/pet_info")
    let json = await response.json()
    this.setState({pets: json})
}


selectPet = (e, item) => {
  this.setState({selected: item.id})
} 

deselectPet = () => {
  this.setState({selected: 0})
}

swipeRight = (e) => {
  this.setState(prevState => ({
      favorites: [...prevState.favorites, e]
  }))
}

swipeLeft = (e) => {
  var initialPets = [...this.state.pets]
  var newPets = initialPets.indexOf(e.id-1)
  if (newPets !== -1) {
    initialPets.splice(newPets, 1);
    this.setState({pets: initialPets});
  }
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
