import React from "react"
import { View, Text } from "react-native"
import { Header, Container, H1, ListItem, Left, Body, Right, Button, Icon, Content} from "native-base"
import AppFooter from "./AppFooter.js"

class Profile extends React.Component{
    render(){
        return(
            <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Content>
                        <ListItem icon style={{height: 80}}>
                            <Left>
                                <Button>
                                    <Icon name="settings"/>
                                </Button>
                            </Left>
                            <Body>
                                <Text>Settings</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon style={{height: 80}}>
                            <Left>
                                <Button>
                                    <Icon name="add"/>
                                </Button>
                            </Left>
                            <Body>
                                <Text>Add a pet</Text>
                            </Body>
                        </ListItem>
                        <ListItem icon style={{height: 80}}>
                            <Left>
                                <Button>
                                    <Icon name="ios-build"/>
                                </Button>
                            </Left>
                            <Body>
                                <Text>Edit Profile</Text>
                            </Body>
                        </ListItem>
                    </Content>
                </Container>
                <AppFooter/>
            </View>
        )
    }
}

export default Profile