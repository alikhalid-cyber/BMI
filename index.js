/**
 * @format
 */
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './src/pages/Login/LoginScreen';
import SignScreen from './src/pages/SignUp/SignScreen';
import ProfileScreen from './src/pages/Profile/ProfileScreen';
AppRegistry.registerComponent(appName, () =>App);
