import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Header, Container, H1, Icon, Content} from "native-base"
import { Link } from "react-router-native"
import AppFooter from "./AppFooter.js"

const Profile = () => {
    return(
        <View style={{height: "100%", width: "100%"}}>
            <Container style={{height: "100%"}}>
                <Header style={{marginTop:10, alignContent: "center"}}>
                    <H1 style={{fontFamily: "Noteworthy", color: "red", fontSize: 27, marginTop: 10}}>PetSwipe</H1>
                </Header>
                <Content style={{height: "100%"}}>
                    <Link to="/Settings">
                        <View style={styles.optionRow}>
                            <Icon name="settings"/>
                            <Text style={styles.option}>Settings</Text>
                        </View>
                    </Link>
                    <Link to="/PetForm">
                        <View style={styles.optionRow}>
                            <Icon name="add"/>
                            <Text style={styles.option}>Add Pet</Text>
                        </View>
                    </Link>
                </Content>
            </Container>
            <AppFooter/>
        </View>
    )
}

const styles = StyleSheet.create({
    option: {
        fontSize: 20,
        marginLeft: 20,
        color: "white",
        fontFamily: "Futura-CondensedMedium",
        fontSize: 28
    },
    optionRow: {
        flexDirection: "row",
        width: "100%",
        height: 100,
        backgroundColor: "#E6232C",
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderTopWidth: 2,
        borderBottomWidth: 2,
        marginBottom: 10
    }
})

export default Profile