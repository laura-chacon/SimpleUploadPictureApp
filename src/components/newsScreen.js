import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
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
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    flex: 1,
    width: 300,
    height: 300,
    marginTop: 10
  },
  postImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  postContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: WINDOW_WIDTH-50,
    borderRadius: 5,
    marginVertical: 5
  },
  description: {
    fontSize: 16
  }
})

class NewsScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      posts: this.props.posts
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({posts: nextProps.posts})
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
    return (
      <FlatList
        data = {this.state.posts.posts}
        renderItem = {this.renderPost}
        style = {styles.flatlist}
        contentContainerStyle = {styles.contentContainerStyle}
      />
    )
  }

  renderPost(post) {
    console.log('post', post)
    return (
      <View style={styles.postContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={post.item.image}
            resizeMode="contain"
            style={styles.postImage}
          />
        </View>
        <Text style={styles.description}>{post.item.description}</Text>
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
