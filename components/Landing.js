import React from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"
import { Container, Form, Input, Label, Item, Button } from "native-base"
import { Link }  from "react-router-native"

class Landing extends React.Component {
    constructor(props){
        super(props)
        this.state = {username: "", password: ""}
    }
    render() {
        return (
            <ImageBackground source={{uri: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}} style={styles.container}>
                <Text style={styles.logo}>PetSwipe</Text>
                <Text style={{fontSize: 25, fontFamily: "Futura-CondensedMedium"}}>Find Your New Companion</Text>
                <Container style={styles.formContainer}>
                    <Text style={{fontSize: 25, fontFamily: "Futura-CondensedMedium"}}>Login:</Text>
                    <Form style={{padding: 10}}>
                        <Label style={{padding: 5, marginLeft: 10}}>Username:</Label>
                        <Item rounded style={styles.input}>
                            <Input onChangeText={(username) => this.setState({username})}></Input>
                        </Item>
                        <Label style={{padding: 5, marginLeft: 10}}>Password:</Label>
                        <Item rounded style={styles.input}>
                            <Input secureTextEntry={true} onChangeText={(password) => this.setState({password})}></Input>
                        </Item>
                        <Link to="/Swipe">
                            <View style={{height: 50, width: 200, alignItems: "center", justifyContent: "center", borderRadius:"5%", marginTop: 15, marginRight: 25, marginLeft: 25, backgroundColor: "blue"}}>
                                <Text style={{color: "white"}}>Login</Text>
                            </View>
                        </Link>
                    </Form>
                    <Text>OR</Text>
                    <Link to="/CreateAccount">
                        <View style={{height: 50, width: 200, alignItems: "center", justifyContent: "center", borderRadius:"5%", marginTop: 15, marginRight: 25, marginLeft: 25, backgroundColor: "green"}}>
                            <Text style={{color: "white"}}>Create an account</Text>
                        </View>
                    </Link>
                </Container>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 40,
        color: "red",
        fontFamily: "Noteworthy"
    },
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: 'center',
        marginTop: 25
      },
    input: {
        width: "100%",
        height: "20%",
        alignSelf: "center"
    },
    formContainer: {
        flex: 1,
        alignItems: "center",
        height: "auto",
        width: "70%",
        marginTop: 25,
        margin: 15,
        marginBottom: "40%",
        padding: 10,
        borderColor: "black",
        borderWidth: 1.5,
        borderRadius: 10,
        backgroundColor: "white"
    }
})

export default Landing