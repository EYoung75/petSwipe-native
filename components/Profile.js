import React from "react"
import { View, Text } from "react-native"
import { Header, Container, H1 } from "native-base"
import AppFooter from "./Footer.js"

class Profile extends React.Component{
    render(){
        return(
            <View style={{height: "100%", width: "100%"}}>
                <Container style={{height: "100%", width: "100%"}}>
                    <Header style={{marginTop:10, alignContent: "center"}}>
                        <H1>PetSwipe</H1>
                    </Header>
                    <Text>Profile</Text>
                </Container>
                <AppFooter/>
            </View>
        )
    }
}

export default Profile