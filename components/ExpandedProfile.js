import React from "react"
import { Container, Content, H1, H2, H3, Text, Icon, Button } from "native-base"
import { ImageBackground, TouchableOpacity } from "react-native";


class ExpandedProfile extends React.Component{
    render(){
        console.log(this.props.pets)
        const pet = this.props.pets.filter(item => item.id == this.props.selected)
        return (
            <Container>
                <ImageBackground source={{uri: pet[0].pet_picture_url}} style={{ alignSelf: "center", height: 300, width: "100%"}}>
                <Button rounded danger onPress={() => this.props.deselect()}style={{height: 75, width: 75, position: "relative", top: 250, left: 275, alignItems: "center", justifyContent:"center"}}>
                    <Icon style={{fontSize: 50}} name="ios-arrow-down"/>
                </Button>
                </ImageBackground>
                <Content style={{marginLeft: 10, margin: 10}}>
                    <H1 style={{textDecorationLine: "underline", fontWeight: "500"}}>{pet[0].pet_name}</H1>
                    <H2>{pet[0].species}</H2>
                    <H3>Age: {pet[0].pet_age}</H3>
                    <H3>Gender: {pet[0].pet_gender}</H3>
                    <H3>Pet Size: {pet[0].pet_size}</H3>
                    <H3>Coat Length: {pet[0].coat_length}</H3>
                </Content>
            </Container>
            // <TouchableOpacity style={{ textAlign: "left", marginTop: 25, height: 500, width: "80%", alignSelf:"center", padding: 25, margin: 10, borderRadius: "50%", borderWidth: 1, borderColor: "black", marginBottom: 10}} id={0} onPress={() => this.props.deselect()}>
            //     <Image source={{uri: pet[0].pet_picture_url}} style={{ alignSelf: "center", height: 200, width: 200, borderRadius: 100}}/>
            //     <H1 style={{textDecorationLine: "underline"}}>Name: {pet[0].pet_name}</H1>
            //     <H2>{pet[0].species}</H2>
            //     <H3>Age: {pet[0].pet_age} </H3>
            //     <H3>Gender: {pet[0].pet_gender}</H3>
            //     <H3>Pet Size: {pet[0].pet_size}</H3>
            //     <H3>Coat Length: {pet[0].coat_length}</H3>
            //     <Text>Preferences: {pet[0].preferences}</Text>
            // </TouchableOpacity>
        )
    }
}

export default ExpandedProfile