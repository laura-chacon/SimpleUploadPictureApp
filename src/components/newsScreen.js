import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-crop-picker';
import { connect } from 'react-redux'

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
    alignItems: 'center',
    marginTop: 10
  },
  textButton: {
    color: 'white',
    fontWeight: '500'
  },
  flatlist: {
    marginTop: 20,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT-120
  }
})

class NewsScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      {this.renderTakeAPictureButton()}

        {this.renderPosts()}
      </View>
    )
  }

  renderTakeAPictureButton() {
    return (

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
    )
  }

  renderPosts() {
    console.log('this.props.posts', this.props.posts)
    return (
      <FlatList
        data = {[this.props.posts]}
        renderItem = {this.renderPost}
        style={styles.flatlist}
      />
    )
  }

  renderPost(post) {
    console.log('post', post)

    return (
      <View>
        <Text>{post.item.description}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps)(NewsScreen);
