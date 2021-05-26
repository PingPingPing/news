import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import News from '../screens/News';
import NewsItem from '../screens/NewsItem';
import WebViewScreen from '../screens/WebView';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="NewsItem" component={NewsItem} />
        <Stack.Screen name="WebView" component={WebViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
