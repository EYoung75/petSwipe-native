import React from "react"
import { TouchableWithoutFeedback, Image } from "react-native"
import AppFooter from "./AppFooter.js"
import { ListItem, Left, Thumbnail, Header, H1, H2, Right, Body, Icon, Text, Container, Content } from "native-base"
import ExpandedProfile from "./ExpandedProfile.js"

class Favorites extends React.Component {
    
    render() {
        const favorites = this.props.favorites
        const favoriteList = favorites.map(item => {

            return (
                    <TouchableWithoutFeedback key={item.id} onPress={(e) => this.props.selectPet(e, item)}>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail medium source={{uri: item.pet_picture_url}}/>
                            </Left>
                            <Body>
                                <Text style={{fontSize: 22, fontFamily: "Futura-CondensedMedium"}}>{item.pet_name}</Text>
                                <Text style={{fontSize: 20, fontFamily: "Futura-CondensedMedium"}} note>{item.species}</Text>
                            </Body>
                            <Right>
                                <Icon name="ios-arrow-forward"/>
                            </Right>
                        </ListItem>
                    </TouchableWithoutFeedback>
            )
        })
        return (
            <Container style={{height: "100%", width: "100%", alignContent: "center"}}>
                <Header style={{marginTop:10, alignContent: "center"}}>
                    <H1 style={{fontFamily: "Noteworthy", color: "red", fontSize: 27, marginTop: 10}}>PetSwipe</H1>
                </Header>
                {this.props.selected === 0 ? 
                        <Content>
                            {this.props.favorites.length === 0 ?
                                <Content>
                                    <Text style={{alignSelf: "center", fontSize: 28, fontFamily: "Futura-CondensedMedium"}}>No Favorites Yet...</Text>
                                    <Text style={{alignSelf: "center", fontSize: 20, fontFamily: "Futura-CondensedMedium"}}>Start swiping and your favorites will show up here</Text>
                                    <Image source={{uri : "https://images.pexels.com/photos/374898/pexels-photo-374898.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}} style={{height: 400, width: "100%"}}/>
                                    <Text style={{alignSelf: "center", fontSize: 28, fontFamily: "Futura-CondensedMedium"}}>Start swiping Here</Text>
                                    <Icon name="ios-arrow-down" style={{alignSelf: "center"}}/>
                                </Content>
                            :
                            <Content>
                                <H2 style={{alignSelf: "center", marginTop: 15, marginBottom: 10, fontSize: 28, fontFamily: "Futura-CondensedMedium"}}>Liked Pets</H2>
                                {favoriteList}
                            </Content>
                            }
                        </Content>
                        :
                        <Content>
                            <ExpandedProfile {...this.props} deselect={this.props.deselect}/>
                        </Content>
                }
                <AppFooter />
            </Container>
        )
    }
}

export default Favorites