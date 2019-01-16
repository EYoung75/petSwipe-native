import React from "react"
import { Footer, Icon, FooterTab, Button } from "native-base"
import { Link } from "react-router-native"

const AppFooter = () => {
    return(
        <Footer>
            <FooterTab>
                <Button>
                    <Link to="/Profile">
                        <Icon name="person" style={{fontSize: 40, color: "#0960FF"}}></Icon>
                    </Link>
                </Button>
                <Button>
                    <Link to="/Swipe">
                        <Icon name="ios-albums" style={{fontSize: 40, color: "black"}}></Icon>
                    </Link>
                </Button>
                <Button>
                    <Link to="/Favorites">
                        <Icon name="heart" style={{fontSize: 40, color: "red"}}></Icon>
                    </Link>
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default AppFooter