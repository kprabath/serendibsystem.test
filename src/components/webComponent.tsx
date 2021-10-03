import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

interface OwnProps {
  content: string;
}

class MyWebComponent extends Component<OwnProps> {
  render() {
    return (
      <WebView
        source={{
          html: `<p style = "font-size: 45px">
          ${this.props.content}
          </p>`,
        }}
      />
    );
  }
}

export {MyWebComponent};
