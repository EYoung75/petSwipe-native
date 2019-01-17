import React from "react"
import { Container, Button, Header, Content, Icon, Picker, Form, Input, Item, Label, Text } from "native-base"
import { Link, Redirect } from "react-router-native"

const isOk = response => response.ok ? response.json() : response.status

class CreateAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: undefined,
            username: "",
            password: "",
            email: "",
            location: ""
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        })
    }

    handleSubmit(){
        let newUser = {
            user_name_a: this.state.username,
            user_name_a_pw: this.state.password,
            contact_email: this.state.email,
            location_city: this.state.location
        }
        console.log('newUser', newUser)
        fetch("http://localhost:4444/users_a/",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newUser)
        })
        .then(isOk)
        .then(response => console.log(response))
        .then(response => {
            if(response === 500) {
                alert("Sorry, that user already exists")
            } else {
                alert("New user created")
            }
        })
        // if(this.state.selected === "adopter"){
        //     var newUser = {
        //         user_name_a: this.state.username,
        //         user_name_a_pw: this.state.password,
        //         contact_email: this.state.email,
        //         location_city: this.state.location
        //     }
        //     fetch("https://petswipedb.herokuapp.com/users_a",{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(newUser)
        //     })
        // } else if(this.state.selected === "adoptee"){
        //     var newUser = {
        //         user_name_b: this.state.username,
        //         user_name_b_pw: this.state.password,
        //         contact_email: this.state.email,
        //         location_city: this.state.location
        //     }
        //     fetch("https://petswipedb.herokuapp.com/users_a",{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify(newUser)
        //     })
        // }
    }

    handleInput = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <Container style={{height: "100%", width: "100%", flex: 1, justifyContent: "space-around"}}>
                <Header>
                    <Link to="/">
                        <Icon name="ios-arrow-back" style={{position: "relative", right: 75, paddingTop: "2%"}}/>
                    </Link>
                    <Text style={{fontSize: 25, fontFamily: "Futura-CondensedMedium", marginTop: "2%"}}>Create Account</Text>
                </Header>
                <Content>
                    <Form>
                        <Item inlineLabel>
                            <Label>Username:</Label>
                            <Input onChange={(text)=>this.setState({text})} name="username"/>
                        </Item>
                        <Item inlineLabel>
                            <Label>Password:</Label>
                            <Input secureTextEntry={true} onChange={(text) => this.setState({text})} name="password"/>
                        </Item>
                        <Item inlineLabel>
                            <Label>Email:</Label>
                            <Input onChange={this.handleInput.bind(this)} name="email"/>
                        </Item>
                        <Item>
                            <Label>Location:</Label>
                            <Input onChange={this.handleInput.bind(this)} name="location"/>
                        </Item>
                        <Button block success style={{margin: 20}} onPress={() => this.handleSubmit()}>
                      
                                <Text>Create Account</Text>
                            
                        </Button>                   
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default CreateAccount