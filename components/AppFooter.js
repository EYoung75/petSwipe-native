import React from "react"
import { Footer, Icon, FooterTab, Button } from "native-base"
import { Link } from "react-router-native"

const AppFooter = () => {
    return(
        <Footer>
            <FooterTab>
                <Button>
                    <Link to="/Profile">
                        <TouchableOpacity>
                            <Icon name="person" style={{fontSize: 40, color: "#0960FF"}}></Icon>
                        </TouchableOpacity>
                    </Link>
                </Button>
                <Button>
                    <Link to="/Swipe">
                        <TouchableOpacity>
                            <Icon name="ios-albums" style={{fontSize: 40, color: "black"}}></Icon>
                        </TouchableOpacity>
                    </Link>
                </Button>
                <Button>
                    <Link to="/Favorites">
                        <TouchableOpacity>
                            <Icon name="heart" style={{fontSize: 40, color: "red"}}></Icon>
                        </TouchableOpacity>
                    </Link>
                </Button>
            </FooterTab>
        </Footer>
    )
}

export default AppFooter