import React from "react"
import { View } from "react-native"
import { Container, Header, Content, List, ListItem, H1, Thumbnail, Icon, Text, Left, Body, Right, Button } from 'native-base';
import AppFooter from "./AppFooter.js"


class Favorites extends React.Component {
    render() {
        const favoriteList = this.props.favorites.map(fav => {
            return (
                <ListItem thumbnail>
                    <Left>
                        <Thumbnail medium source={{uri: fav.pet_picture_url}}/>
                    </Left>
                    <Body>
                        <Text>{fav.pet_name}</Text>
                        <Text note>{fav.species}</Text>
                    </Body>
                    <Right>
                        <Icon name="ios-arrow-round-forward"></Icon>
                    </Right>
                </ListItem>
            )
        })
        return (
            <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Content>
                        <List>
                            {favoriteList}
                        </List>
                    </Content>
                </Container>
                <AppFooter/>
            </View>
        )
    }
}

export default Favorites