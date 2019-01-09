import React from "react"
import { Container, H1, H2, H3, Icon, Button } from "native-base"
import { ImageBackground, View, StyleSheet } from "react-native"


class ExpandedProfile extends React.Component{
    render(){
        const pet = this.props.pets.find(item => item.id == this.props.selected)
        return (
            <Container>
                <ImageBackground source={{uri: pet.pet_picture_url}} style={{ alignSelf: "center", height: 350, width: "100%"}}>
                    <Button rounded danger onPress={() => this.props.deselect()}style={{height: 75, width: 75, position: "relative", top: 320, left: 275, alignItems: "center", justifyContent:"center"}}>
                        <Icon style={{fontSize: 50}} name="ios-arrow-down"/>
                    </Button>
                </ImageBackground>
                <View style={{marginLeft: 10, margin: 10}}>
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
                    <Button rounded info onPress={() => console.log("Hi")} style={{height: 75, width: 75, position: "relative", left: 265, bottom: 80, alignItems: "center", justifyContent: "center"}}>
                        <Icon name="ios-chatbubbles" style={{fontSize: 50}}/>
                    </Button>
                </View>
            </Container>
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