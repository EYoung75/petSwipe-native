import React from "react"
import {
    Image,
    View,
    ListView,
    StyleSheet,
    Text,
    TouchableHighlight
  
  } from 'react-native'

class PhotoView extends React.Component() {
    state = {
        ds: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        }),
        showSelectedPhoto: false,
        uri: ''
      }
    
    renderRow(rowData) {
        const { uri } = rowData.node.image;
        return (
            <TouchableHighlight
                onPress={() => this.setState({ showSelectedPhoto: true, uri: uri })}>
                <Image
                source={{ uri: rowData.node.image.uri }}
                style={styles.image} />
            </TouchableHighlight>
        )
    }

    render() {
        const { showSelectedPhoto, uri } = this.state;

        if(showSelectedPhoto) {
            return (
                <SelectedPhoto uri={uri} />
            )
        }
    }
}
