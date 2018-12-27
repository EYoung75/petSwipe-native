import React from "react"
import { View, Text } from "react-native"
import { Container, Header, Content, Icon, Picker, Form, Input, Item, Label } from "native-base"
import { Link } from "react-router-native"

class CreateAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selected: undefined
        }
    }

    onValueChange(value) {
        this.setState({
            selected: value
        })
    }
    render(){
        return(
            <Container style={{height: "100%", width: "100%", flex: 1, justifyContent: "space-around"}}>
                <Header>
                    <Link to="/">
                        <Icon name="ios-arrow-back" style={{position: "relative", right: 75, paddingTop: "2%"}}/>
                    </Link>
                    <Text style={{fontSize: 25, paddingTop: "2%"}}>Create Account</Text>
                </Header>
                <Content>
                    <Form>
                        <Picker
                        mode="dropwdown"
                        iosIcon={<Icon name="ios-arrow-down" />}
                        placeholder="Select Account Type"
                        placeholderStyle={{ color: "#bfc6ea" }}
                        placeholderIconColor="#007aff"
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        >
                        <Picker.Item label="Adopter (Looking for a new friend)" value="key0"/>
                        <Picker.Item label="Adoptee (Looking for a new home)" value="key1"/>
                        </Picker>
                        <Item inlineLabel>
                            <Label>Username:</Label>
                            <Input />
                        </Item>
                        <Item inlineLabel>
                            <Label>Password:</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item inlineLabel>
                            <Label>Email:</Label>
                            <Input/>
                        </Item>
                        <Item>
                            <Label>Location:</Label>
                            <Input/>
                        </Item>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default CreateAccount