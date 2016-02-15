'use strict';

import React, {
  Component,
  View,
  Text,
  Image,
  WebView
} from 'react-native'

class Video extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let html = `<!DOCTYPE html>
                <html>
                  <body>
                    <video width="320" height="240" controls>
                      <source src="http://www.w3schools.com/html/movie.mp4" type="video/mp4">
                      <source src="http://www.w3schools.com/html/movie.ogg" type="video/ogg">
                      Your browser does not support the video tag.
                    </video>
                  </body>
                </html>`;

    return (
      <WebView
        style={{...this.props.style}}
        html={html}
        automaticallyAdjustContentInsets={false}
        javaScriptEnabled={true}
        javaScriptEnabledAndroid={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true} />
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <View style={{flex:1,alignSelf:'stretch',backgroundColor:'white',padding:10,alignItems:'center'}}>
          <Image style={{width:150,height:150}} source={{uri: `https://avatars2.githubusercontent.com/u/16607791?v=3&s=200`}} />
        </View>
        <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:10}}>
          <Text style={{textAlign:'center'}}>
            {`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
          </Text>
        </View>
        <View style={{flex:1,alignSelf:'stretch',justifyContent:'center',alignItems:'center',padding:10}}>
          <Video style={{backgroundColor:'transparent',height:270,width:350}} />
        </View>
      </View>
    )
  }
}
