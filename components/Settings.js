import React from "react"
import { View, Text, Image } from "react-native"
import { Header, Container, H1, Icon, Content } from "native-base"
import { Link } from "react-router-native"

class Settings extends React.Component{
    render() {
        return (
            <Container style={{width: "100%"}}>
                <Header style={{marginTop:10, alignContent: "center"}}>
                    <Link to="/Profile" style={{marginRight: "24%", justifyContent: "center"}}>
                        <Icon name="ios-arrow-back"/>
                    </Link>
                    <H1 style={{fontFamily: "Noteworthy", color: "red", marginRight: "26%", fontSize: 27, marginTop: 10}}>PetSwipe</H1>
                </Header>
                <Image source={{uri: "https://1001freedownloads.s3.amazonaws.com/vector/thumb/122391/construction_cone.png"}}
                    style={{height: 400, width: "100%", alignSelf: "center"}}/>
                <Text style={{fontSize: 40, alignSelf: "center", marginTop: 10, fontFamily:"Futura-CondensedMedium"}}>Under Construction</Text>
                
            </Container>
        )
    }
}

export default Settings