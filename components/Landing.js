import React from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"
import { Container, Form, Input, Label, Item, Button } from "native-base"
import { Link }  from "react-router-native"

class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {username: "", password: ""}
    }
    render() {
        return (
                <ImageBackground source={{uri: "https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"}} style={styles.container}>
                    <Text style={styles.logo}>PetSwipe</Text>
                    <Text style={{fontSize: 20}}>Find Your New Companion</Text>
                    <Container style={styles.formContainer}>
                        <Text style={{fontSize: 20}}>Login:</Text>
                        <Form style={{padding: 10}}>
                            <Label style={{padding: 5}}>Username:</Label>
                            <Item rounded style={styles.input}>
                                <Input onChangeText={(username) => this.setState({username})}></Input>
                            </Item>
                            <Label style={{padding: 5}}>Password:</Label>
                            <Item rounded style={styles.input}>
                                <Input secureTextEntry={true} onChangeText={(password) => this.setState({password})}></Input>
                            </Item>
                            <Button block style={{marginTop: 15}}>
                                <Text>Login</Text>
                            </Button>
                            </Form>
                        <Text>OR</Text>
                        <Button block success style={{marginTop: 15, marginRight: 25, marginLeft: 25}}>
                            <Link to="/createAccount">
                                <Text>Create Account</Text>
                            </Link>
                        </Button>


                    </Container>
                </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 40,
        color: "red"
    },
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: 'center',
        marginTop: 25
      },
    input: {
        width: "85%",
        height: "20%"
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