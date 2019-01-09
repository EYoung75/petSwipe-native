import React from "react"
import { Container, Content, H1, H2, H3, Text, Icon, Button } from "native-base"
import { ImageBackground, Image, TouchableOpacity, View, StyleSheet } from "react-native";


class ExpandedProfile extends React.Component{
    render(){
        console.log(this.props.pets)
        const pet = this.props.pets.find(item => item.id == this.props.selected)
        return (
            <Container>
                <ImageBackground source={{uri: pet.pet_picture_url}} style={{ alignSelf: "center", height: 350, width: "100%"}}>
                <Button rounded danger onPress={() => this.props.deselect()}style={{height: 75, width: 75, position: "relative", top: 320, left: 275, alignItems: "center", justifyContent:"center"}}>
                    <Icon style={{fontSize: 50}} name="ios-arrow-down"/>
                </Button>
                </ImageBackground>
                <Content style={{marginLeft: 10, margin: 10}}>
                    <H1 style={{fontSize: 28, textDecorationLine: "underline", fontFamily: "Futura-CondensedMedium"}}>{pet.pet_name}</H1>
                    <H2 style={styles.info}>-{pet.species}</H2>
                    <H3 style={styles.info}>-Age: {pet.pet_age}</H3>
                    <H3 style={styles.info}>-Gender: {pet.pet_gender}</H3>
                    <H3 style={styles.info}>-Pet Size: {pet.pet_size}</H3>
                    <H3 style={styles.info}>-Coat Length: {pet.coat_length}</H3>
                    {pet.house_trained ? <H3 style={styles.info}>•Is House Trained</H3> : <H3 style={styles.info}>•Not House Trained</H3>}
                    {pet.vaccinations ? <H3 style={styles.info}>•Is Vaccinated</H3> : <H3 style={styles.info}>•Not Vaccinated</H3>}
                    {pet.spay_neuter ? <H3 style={styles.info}>•Is Spayed/Neutured</H3> : <H3 style={styles.info}>•Not Spayed/Neutured</H3>}
                    <H3 style={styles.info}>•Prefers {pet.preferences}</H3>

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

const styles = StyleSheet.create({
    info: {
        fontFamily: "Futura-CondensedMedium",
        fontSize: 20,
        marginTop: 5,
        marginLeft: 25
    }
})

export default ExpandedProfile