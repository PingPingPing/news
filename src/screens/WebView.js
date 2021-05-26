import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewScreen = props => {
  const {
    route: {
      params: {url},
    },
  } = props;
  return <WebView source={{uri: url}} />;
};

export default WebViewScreen;
