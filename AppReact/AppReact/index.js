/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Feed from './src/screens/Feed';
import Login from './src/screens/Login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Feed);
