import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { Header, Container, H1, ListItem, Left, Body, Right, Button, Icon, Content} from "native-base"
import AppFooter from "./AppFooter.js"
import { Link } from "react-router-native"

class Profile extends React.Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         options: 0
    //     }
    // }

    // settings = () => {
    //     console.log("Settings")
    // }

    // addPet = () => {
    //     this.setState({addPet: 1})
    // }

    // editProfile = () => {
    //     console.log("Edit profile")
    // }

    render(){
        return(
            <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Content>
                        <View>
                            <Icon name="settings"/>
                            <Text>Settings</Text>
                        </View>
                        <Link to="/PetForm">
                        <View>
                            <Icon name="add"/>
                            <Text>Add Pet</Text>
                        </View>
                        </Link>
                        <View>
                            <Icon name="ios-build"/>
                            <Text></Text>
                        </View>
                        {/* <ListItem icon style={{height: 80}}>
                            <TouchableOpacity onPress={()=>this.settings()} style={{flexDirection: "row", width: "100%", justifyContent: "space-evenly"}}>
                            <Left>
                                <Button>
                                    <Icon name="settings"/>
                                </Button>
                            </Left>
                            <Body>
                                <Text>Settings</Text>
                            </Body>
                            </TouchableOpacity>
                        </ListItem>
                        <Link to="PetForm">
                        <View>
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
                        </View>
                        </Link>
                        <ListItem icon style={{height: 80}}>
                        <TouchableOpacity onPress={()=>this.editProfile()} style={{flexDirection: "row", width: "100%", justifyContent: "space-evenly"}}>
                            <Left>
                                <Button>
                                    <Icon name="ios-build"/>
                                </Button>
                            </Left>
                            <Body>
                                <Text>Edit Profile</Text>
                            </Body>
                        </TouchableOpacity>
                        </ListItem> */}
                    </Content>
                </Container>
                <AppFooter/>
            </View>
        )
    }
}

export default Profile