import React from 'react'
import { Image, Alert, View } from "react-native"
import { Container, Header, Text, H1, H2, DeckSwiper, Left, Body, Card, CardItem, Thumbnail, Icon } from "native-base"
import { Link, Route } from "react-router-native"
import AppFooter from "./Footer.js"

class Swipe extends React.Component {
    constructor(){
        super();
        this.state = {
             cards: [{}],
             selected: 0,
             liked: [{
                 name: "Max",
                 species: "Dog"
             }]
        }
    }

    swipeRight(){
        Alert.alert("right")
    }

    swipeLeft(){
        Alert.alert("left")
    }

    render(){
        if(this.state.selected === 0) { 
            return (
                <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%", flex: 1, justifyContent: "space-evenly"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Container style={{height: "100%", width: "90%", marginTop: "10%", alignSelf: "center"}}>
                        <DeckSwiper
                            dataSource={this.state.cards}
                            looping={false}
                            renderItem={item =>
                                    <Card style={{elevation: 3, borderColor: "black", borderWidth: 2}} id={item.id}> 
                                            <CardItem>
                                                <Left>
                                                    <Body>
                                                    <H2>{item.pet_name}</H2>
                                                    <Text note>{item.species}</Text>
                                                    </Body>
                                                </Left>
                                                </CardItem>
                                                <CardItem cardBody>
                                                <Image style={{ height: 300, flex: 1 }} source={{uri: item.pet_picture_url}} />
                                                </CardItem>
                                                <CardItem>
                                                <Icon name="ios-compass" style={{ color: '#ED4A6A' }} />
                                                <Text>Denver</Text>
                                            </CardItem>
                                    </Card>
                            }
                        />
                    </Container>
                </Container>
                <AppFooter></AppFooter>
                </View>
            )
        } else {
            return (
                <Container style={{height: "100%", width: "100%"}}>
                    <Header style={{marginTop:10, justifyContent: "space-between"}}>
                        <Icon name="settings"/>
                        <H1>PetSwipe</H1>
                        <Icon name="heart" style={{color: "red"}}/>
                    </Header>    
                </Container>
            )
        }
    }

    async componentDidMount() {
        let response = await fetch("https://petswipedb.herokuapp.com/pet_info")
        let json = await response.json()
        this.setState({cards: json})
    }

}

export default Swipe