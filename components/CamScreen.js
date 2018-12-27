import React from "react"
import { CameraRoll, Image, StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import { Icon } from "native-base"
import PhotoView from "./PhotoView.js"

class CamScreen extends React.Component{
    state = {
        showPhotoGallery: false,
        photoArray: []
    }

    render(){

        if (this.state.showPhotoGallery) {
            return (
              <PhotoView
                photoArray={this.state.photoArray} />
            )
          }

        return(
            <View style={styles.container}>
                <Text>(Optional) Add Profile Pic from Camera Roll</Text>
                <TouchableHighlight onPress={() => this.getPhotosFromGallery()}>
                    <Icon name="add-circle" style={{fontSize: 50}}/>
                </TouchableHighlight>
            </View>
        )
    }

    getPhotosFromGallery() {
        CameraRoll.getPhotos({first: 10000})
        .then(res => {
            let photoArray = res.edges;
            this.setState({ showPhotoGallery: true, photoArray: photoArray })
        })
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 50,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })

export default CamScreen