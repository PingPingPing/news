import * as React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {WebView} from 'react-native-webview';
import {useNavigation} from '@react-navigation/native';

const NewsItem = props => {
  const navigation = useNavigation();
  const {
    route: {
      params: {url, title},
    },
  } = props;
  console.log(url);
  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{title}</Text>
      <WebView source={{uri: 'https://www.google.com/'}} />
      <TouchableOpacity
        onPress={() => navigation.navigate('WebView', url)}
        style={{
          position: 'absolute',
          bottom: 15,
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderWidth: 1,
          borderColor: 'black',
        }}>
        <Text>Navigate to Webview</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default NewsItem;
