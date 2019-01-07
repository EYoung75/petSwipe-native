import React from 'react'
import { Image, TouchableOpacity, View } from "react-native"
import { Container, Header, Text, H1, H2, DeckSwiper, Left, Body, Card, CardItem, Icon } from "native-base"
import AppFooter from "./AppFooter.js"


class Swipe extends React.Component {
    render(){
        let cards = this.props.cards
            return (
                <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%", flex: 1, justifyContent: "space-evenly"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Container style={{height: "100%", width: "90%", marginTop: "10%", alignSelf: "center"}}>
                        <DeckSwiper
                            dataSource={cards}
                            looping={false}
                            onSwipeLeft={(e) => this.props.swipeLeft(e)}
                            onSwipeRight={(e) => this.props.swipeRight(e)}
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
        }
    }

// const Swipe = () => {
//     return ( 
//         <Subscribe to={PetsContainer}>
//             {data => (
//                 <View style={{height: "100%", width: "100%"}}>
//                                  <Container style={{height: "100%", width: "100%", flex: 1, justifyContent: "space-evenly"}}>
//                                      <Header style={{marginTop:10, alignContent: "center"}}>
//                                          <H1>PetSwipe</H1>
//                                      </Header>
//                                     <Container style={{height: "100%", width: "90%", marginTop: "10%", alignSelf: "center"}}>
//                                         <DeckSwiper
//                                             dataSource={data.pets}
//                                             looping={false}
//                                             onSwipeLeft={(e) => data.swipeLeft(e)}
//                                             onSwipeRight={(e) => data.swipeRight(e)}
//                                             renderItem={item =>
//                                                     <Card style={{elevation: 3, borderColor: "black", borderWidth: 2}} id={item.id}> 
//                                                             <CardItem>
//                                                                 <Left>
//                                                                     <Body>
//                                                                     <H2>{item.pet_name}</H2>
//                                                                     <Text note>{item.species}</Text>
//                                                                     </Body>
//                                                                 </Left>
//                                                                 </CardItem>
//                                                                 <CardItem cardBody>
//                                                                 <Image style={{ height: 300, flex: 1 }} source={{uri: item.pet_picture_url}} />
//                                                                 </CardItem>
//                                                                 <CardItem>
//                                                                 <Icon name="ios-compass" style={{ color: '#ED4A6A' }} />
//                                                                 <Text>Denver</Text>
//                                                             </CardItem>
//                                                     </Card>
//                                             }
//                                         />
//                                     </Container>
//                                 </Container>
//                                 <AppFooter></AppFooter>
//                                 </View>
//             )}
//         </Subscribe>
//     )
// }
    


export default Swipe