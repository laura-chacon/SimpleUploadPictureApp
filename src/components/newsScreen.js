import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';

var WINDOW_WIDTH  = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center'
  },
  takePictureButton: {
    backgroundColor: '#885ead',
    width: WINDOW_WIDTH-20,
    paddingVertical: 8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textButton: {
    color: 'white',
    fontWeight: '500'
  }
})

class NewsScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            ImagePicker.openCamera({
              width: 300,
              height: 300,
              cropping: true
            }).then(image => {
              this.props.navigation.navigate('EditPicture', {'image': image})
            });

          }}
          style = {styles.takePictureButton}
        >
            <Text style={styles.textButton}>TAKE A PICTURE</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default NewsScreen;
