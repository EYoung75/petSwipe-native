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
                                <Text>{item.pet_name}</Text>
                                <Text note>{item.species}</Text>
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
                <Header>
                    <H1>PetSwipe</H1>
                </Header>
                {this.props.selected === 0 ? 
                        <Content>
                            <H2 style={{alignSelf: "center", marginTop: 15, marginBottom: 10}}>Liked Pets</H2>
                            {this.props.favorites.length === 0 ? 
                            <Text style={{alignSelf: "center", fontSize: 20}}>Start swiping and your favorites will show up here</Text>
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