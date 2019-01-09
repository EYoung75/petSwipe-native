import React from "react"
import { TouchableWithoutFeedback } from "react-native"
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
                            <H2 style={{alignSelf: "center", marginTop: 15, marginBottom: 10, fontSize: 28, fontFamily: "Futura-CondensedMedium"}}>Liked Pets</H2>
                            {this.props.favorites.length === 0 ? 
                            <Text style={{alignSelf: "center", fontSize: 20, fontFamily: "Futura-CondensedMedium"}}>Start swiping and your favorites will show up here</Text>
                            :
                            <Content>
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