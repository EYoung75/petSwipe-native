import React from "react"
import { View, Text } from "react-native"

class ExpandedProfile extends React.Component{
    render(){
        console.log(this.props)
        return (
            <View>
                <Text style={{fontSize: 100, marginTop: 50}}>
                    {this.props.pets[this.props.selected -1].pet_name}
                </Text>
            </View>
        )
    }
}

export default ExpandedProfile