import React from 'react'
import { Image, AlertIOS } from "react-native"
import { Container, Header, Text, H1, H2, View, DeckSwiper, Left, Body, Card, CardItem, Thumbnail, Icon } from "native-base"
import { Link, Route } from "react-router-native"
import Favorites from "./Favorites.js"

class Swipe extends React.Component {
    constructor(){
        super();
        this.state = {
             cards: [{}]
        },
        liked = [] 
    }
    render(){
        return (
            <Container style={{height: "100%", width: "100%"}}>
                <Header style={{marginTop:10, justifyContent: "space-between"}}>
                    <Icon name="settings"/>
                    <H1>PetSwipe</H1>
                    <Link to="/favorites">
                        <Icon name="heart" style={{color: "red"}}/>
                    </Link>
                    <Route path="/favorites" render={() => <Favorites liked={this.state.liked}></Favorites>}></Route>
                </Header>
                <Container style={{height: "100%", width: "90%", marginTop: "10%", alignSelf: "center"}}>
                    <DeckSwiper
                        dataSource={this.state.cards}
                        looping={false}
                        renderItem={item =>
                        <Card style={{ elevation: 3 }} style={{borderColor: "black", borderWidth: 2}} id={item.id}>
                            <Link></Link>
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
        )
    }

    async componentDidMount() {
        let response = await fetch("https://petswipedb.herokuapp.com/pet_info")
        let json = await response.json()
        this.setState({cards: json})
    }
}

export default Swipe