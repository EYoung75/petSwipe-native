import React from "react"
import { View, Text } from "react-native"
import { Header, Container, H1, Button, Content } from "native-base"
import AppFooter from "./AppFooter.js"

class Settings extends React.Component{
    render() {
        return (
            <Container style={{height: "100%", width: "100%"}}>
                <Header style={{alignContent: "center"}}>
                    <H1>PetSwipe</H1>
                </Header>
                <Content>

                </Content>
                <AppFooter/>
            </Container>
        )
    }
}

export default Settings