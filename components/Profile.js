import React from "react"
import { View, Text, StyleSheet } from "react-native"
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
                <Container style={{height: "100%"}}>
                    <Header style={{marginTop:10, alignContent: "center", justifyContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Content style={{height: "100%"}}>
                        <View style={styles.optionRow}>
                            <Icon name="settings"/>
                            <Text style={styles.option}>Settings</Text>
                        </View>
                        <Link to="/PetForm">
                        <View style={styles.optionRow}>
                            <Icon name="add"/>
                            <Text style={styles.option}>Add Pet</Text>
                        </View>
                        </Link>
                        <View style={styles.optionRow}>
                            <Icon name="ios-build"/>
                            <Text style={styles.option}>Update Profile</Text>
                        </View>
                    </Content>
                </Container>
                <AppFooter/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    option: {
        fontSize: 20,
        marginLeft: 20,
        color: "white"
    },
    optionRow: {
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: "#E6232C",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 10
    }
})

export default Profile