import React from "react"
import { Container, Content, Form, Item, Input, Label, Icon, Picker, Header, H1, H2 } from "native-base"

class PetForm extends React.Component {
    constructor(){
        super()
        this.state = {
            pet_name: "",
            pet_age: "",
            species: "",
            pet_gender: "",
            age: 0,
            coat_length: "",
            pet_size: "",
            house_trained: "",
            vaccinations: "",
            spay_neuter: "",
            preferences: "",
            pet_picture_url: ""
        }
    }

    handleSpecies = (value) => {
        this.setState({
            species: value
        })
    }

    handleGender = (value) => {
        this.setState({
            pet_gender: value
        })
    }

    handleCoat = (value) => {
        this.setState({
            coat_length: value
        })
    }

    handleSize = (value) => {
        this.setState({
            pet_size: value
        })
    }

    handleTraining = (value) => {
        this.setState({
            house_trained: value
        })
    }

    handleVaccs = (value) => {
        this.setState({
            vaccinations: value
        })
    }

    handleSize = (value) => {
        this.setState({
            pet_size: value
        })
    }

    handleSpay = (value) => {
        this.setState({
            spay_neuter: value
        })
    }

    handleUrl = (value) => {
        this.setState({
            pet_picture_url: value
        })
    }
    
    handlePrefs = (value) => {
        this.setState({
            preferences: value
        })
    }
    
    handleName = (value) => {
        this.setState({
            pet_name: value
        })
    }

    handleAge = (value) => {
        this.setState({
            pet_age: value
        })
    }
    
    render(){
        return (
            <Container style={{width: "100%"}}>
                <Header style={{marginTop:10, alignContent: "center"}}>
                    <H1>PetSwipe</H1>
                </Header>
                <H2 style={{alignSelf: "center"}}>Find a home for a pet</H2>
                <Content style={{marginLeft: 10, marginRight: 10, marginBottom: 20}}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Pet Name:</Label>
                            <Input onChange={this.handleName.bind(this)}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Pet Age:</Label>
                            <Input onChange={this.handleAge.bind(this)}/>
                        </Item>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            placeholder="Species"
                            selectedValue={this.state.species}
                            onValueChange={this.handleSpecies.bind(this)}
                        >
                            <Picker.Item label="Dog" value="Dog" />
                            <Picker.Item label="Cat" value="Cat" />
                            <Picker.Item label="Avian" value="Avian" />
                            <Picker.Item label="Reptile" value="Reptile" />
                        </Picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            placeholder="Gender"
                            selectedValue={this.state.pet_gender}
                            onValueChange={this.handleGender.bind(this)}
                        >
                            <Picker.Item label="House Trained" value={true}/>
                            <Picker.Item label="Not House Trained" value={false}/>
                        </Picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            placeholder="Coat Length"
                            selectedValue={this.state.coat_length}
                            onValueChange={this.handleCoat.bind(this)}
                        >
                            <Picker.Item label="Short" value="Short"/>
                            <Picker.Item label="Medium" value="Medium"/>
                            <Picker.Item label="Long" value="Long"/>
                            <Picker.Item label="No Coat/ NA" value="None"/>
                        </Picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            placeholder="Pet Size"
                            selectedValue={this.state.pet_size}
                            onValueChange={this.handleSize.bind(this)}
                        >
                            <Picker.Item label="Small" value="Small"/>
                            <Picker.Item label="Medium" value="Medium"/>
                            <Picker.Item label="Large" value="Large"/>
                        </Picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            placeholder="Is the pet house trained?"
                            selectedValue={this.state.house_trained}
                            onValueChange={this.handleTraining.bind(this)}
                        >
                            <Picker.Item label="House Trained" value={true}/>
                            <Picker.Item label="Not House Trained" value={false}/>
                        </Picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            placeholder="Does the pet have all vaccinations?"
                            selectedValue={this.state.vaccinations}
                            onValueChange={this.handleVaccs.bind(this)}
                        >
                            <Picker.Item label="Is vaccinated" value={true}/>
                            <Picker.Item label="Is not vaccinated" value={false}/>
                        </Picker>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-dropdown-circle" style={{ color: "#007aff", fontSize: 25 }} />}
                            placeholder="Is the pet spayed/neutered?"
                            selectedValue={this.state.spay_neuter}
                            onValueChange={this.handleSpay.bind(this)}
                        >
                            <Picker.Item label="Is spayed/neutered" value={true}/>
                            <Picker.Item label="Is not spayed/neutured" value={false}/>
                        </Picker>
                        <Item floatingLabel>
                            <Label>Preferences:</Label>
                            <Input onChange={this.handlePrefs.bind(this)}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Pet Picture Url:</Label>
                            <Input onChange={this.handleUrl.bind(this)}/>
                        </Item>

                    </Form>
                </Content>
            </Container>
        )
    }
}


export default PetForm