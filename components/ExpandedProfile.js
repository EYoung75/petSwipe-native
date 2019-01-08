import React from "react"
import { Container, Content, H1, H2, H3, Text } from "native-base"
import { Image, TouchableOpacity } from "react-native";


class ExpandedProfile extends React.Component{
    render(){
        console.log(this.props.pets)
        const pet = this.props.pets.filter(item => item.id == this.props.selected)
        return (
            <TouchableOpacity style={{ textAlign: "left", marginTop: 25, height: 500, width: "80%", alignSelf:"center", padding: 25, margin: 10, borderRadius: "50%", borderWidth: 1, borderColor: "black", marginBottom: 10}} id={0} onPress={() => this.props.deselect()}>
                <Image source={{uri: pet[0].pet_picture_url}} style={{ alignSelf: "center", height: 200, width: 200, borderRadius: 100}}/>
                <H1 style={{textDecorationLine: "underline"}}>Name: {pet[0].pet_name}</H1>
                <H2>{pet[0].species}</H2>
                <H3>Age: {pet[0].pet_age} </H3>
                <H3>Gender: {pet[0].pet_gender}</H3>
                <H3>Pet Size: {pet[0].pet_size}</H3>
                <H3>Coat Length: {pet[0].coat_length}</H3>
                <Text>Preferences: {pet[0].preferences}</Text>
            </TouchableOpacity>
        )
    }
}

export default ExpandedProfile