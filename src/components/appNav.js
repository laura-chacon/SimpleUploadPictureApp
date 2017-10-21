import NewsScreen from './newsScreen';
import CameraScreen from './cameraScreen';
import EditPictureScreen from './editPictureScreen';
import { StackNavigator } from 'react-navigation';

export const AppNav = StackNavigator({
  News: {
    screen: NewsScreen,
    navigationOptions: {
      title: 'News'
    }
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      title: 'Camera'
    }
  },
  EditPicture: {
    screen: EditPictureScreen,
    navigationOptions: {
      title: 'Edit picture'
    }
  }
});

export default AppNav;
