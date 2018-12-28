import React from "react"
import { View } from "react-native"
import { Container, Header, Content, List, ListItem, H1, Thumbnail, Icon, Text, Left, Body, Right, Button } from 'native-base';
import AppFooter from "./AppFooter.js"


class Favorites extends React.Component {
    render() {
        return (
            <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Content>
                        <List>
                            <ListItem thumbnail>
                                <Left>
                                    <Thumbnail medium source={{uri: "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}}/>
                                </Left>
                                <Body>
                                    <Text>Fido</Text>
                                    <Text note>Dog</Text>
                                </Body>
                                <Right>
                                    <Icon name="ios-arrow-round-forward"></Icon>
                                </Right>
                            </ListItem>
                        </List>
                    </Content>
                </Container>
                <AppFooter/>
            </View>
        )
    }
}

export default Favorites