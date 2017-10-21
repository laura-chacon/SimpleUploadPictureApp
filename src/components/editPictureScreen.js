import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux'
import { newPostCreated } from '../actions'

var WINDOW_WIDTH  = Dimensions.get('window').width;
var WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'pink'
  },
  postButton: {
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
  },
  textinput: {
    height: 40,
    width: WINDOW_WIDTH - 20
  }
})

class EditPictureScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      photoDescription: ""
    }
  }

  render() {
    image = {
      uri: this.props.navigation.state.params.image.path,
      width: this.props.navigation.state.params.image.width,
      height: this.props.navigation.state.params.image.height
    }
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={image} />
        </View>
        {this.renderTextInput()}
        {this.renderPostButton(image)}
      </View>
    )
  }

  renderTextInput() {
    return (
      <TextInput
          style={styles.textinput}
          placeholder="Type here the title of the photo"
          onChangeText={(text) => this.setState({photoDescription: text})}
        />

    )
  }

  renderPostButton(image) {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.newPostCreated(image, this.state.photoDescription)
          this.props.navigation.navigate('News')
        }}
        style = {styles.postButton}
      >
          <Text style={styles.textButton}>POST</Text>
      </TouchableOpacity>
    )
  }

}

export default connect(null, { newPostCreated })(EditPictureScreen);
