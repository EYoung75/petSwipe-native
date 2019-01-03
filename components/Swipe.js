import React from 'react'
import { Image, Alert, View } from "react-native"
import { Container, Header, Text, H1, H2, DeckSwiper, Left, Body, Card, CardItem, Thumbnail, Icon } from "native-base"
import AppFooter from "./AppFooter.js"


class Swipe extends React.Component {
    constructor(){
        super()
        this.state={
            favorites: [],
            loaded: false
        }
    }  

    swipeRight(){
        Alert.alert("thanks homie")
    }

    swipeLeft(){
        Alert.alert("okay fuck you too bish")
    }

    render(){

            return (
                <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%", flex: 1, justifyContent: "space-evenly"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Container style={{height: "100%", width: "90%", marginTop: "10%", alignSelf: "center"}}>
                        <DeckSwiper
                            dataSource={this.props.cards}
                            looping={false}
                            onSwipeLeft={() => this.swipeLeft()}
                            onSwipeRight={() => this.swipeRight()}
                            renderItem={item =>
                                    <Card style={{elevation: 20, borderColor: "black", borderWidth: 2}} id={item.id}> 
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
        }
    }
    


export default Swipe