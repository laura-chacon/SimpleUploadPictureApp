import React, { Component } from 'react';
import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

var WINDOW_WIDTH  = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  },
})

class EditPictureScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('this.props',this.props)
    return (
      <View style={styles.container}>

      </View>
    )
  }

}

export default EditPictureScreen;
