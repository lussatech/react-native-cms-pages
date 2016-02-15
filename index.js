'use strict';

import React, {
  Component,
  DrawerLayoutAndroid,
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Navigator,
  Image,
  ToastAndroid,
  ScrollView
} from 'react-native'

import About from './About'
import Home  from './Home'

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scene: undefined
    }
  }

  render() {
    return (
      <DrawerLayoutAndroid
        ref={'sidebar'}
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => {
          return (
            <View style={{flex:1,backgroundColor:'white'}}>
              {
                actions.map((val, key) => {
                  return (
                    <TouchableHighlight style={[{padding:8, backgroundColor: this.state.scene && this.state.scene.title === val.title ? '#F0F0F0' : 'transparent'}]} underlayColor={'#F0F0F0'} key={key} onPress={() => this.onActionSelected(val)}>
                      <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                        <Image style={{height:18,width:18}} source={val.icon} />
                        <Text style={{marginLeft:8,fontSize:13,color:'black'}}>{val.title}</Text>
                      </View>
                    </TouchableHighlight>
                  )
                })
              }
            </View>
          )
        }}>
        <Navigator
          initialRoute={{name: 'My First Scene', index: 0}}
          navigationBar={
            <Navigator.NavigationBar
              style={{backgroundColor:'teal'}}
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => {
                  return (
                    <TouchableOpacity activeOpacity={0.7} style={{flex:1,justifyContent:'center',alignItems:'center'}} onPress={() => this.refs.sidebar.openDrawer()}>
                      <View style={{alignSelf:'stretch',backgroundColor:'transparent',padding:10,alignItems:'center'}}>
                        <Image source={require('./icons/ic_menu_white.png')} />
                      </View>
                    </TouchableOpacity>
                  )
                },
                Title: (route, navigator, index, navState) => {
                  return (
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <Text style={{color:'white',fontSize:17}}>{this.state.scene && this.state.scene.title || `Home`}</Text>
                    </View>
                  )
                },
                RightButton: (route, navigator, index, navState) => {
                  return (
                    <TouchableOpacity activeOpacity={0.7} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                      <View style={{flex:1,flexDirection:'row',alignSelf:'stretch',backgroundColor:'transparent',padding:10,alignItems:'center'}}>
                        <Image source={require('./icons/ic_notifications_white.png')} />
                        <View style={{position:'absolute',top:18,right:10,width:12,borderRadius:10,backgroundColor:'red'}}>
                          <Text style={{color:'white',fontSize:8,textAlign:'center'}}>{`5`}</Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                }
              }}
            />
          }
          renderScene={(route, navigator) => {
            return (
              <ScrollView contentContainerStyle={{paddingTop:57}}>
                {(this.state.scene && this.state.scene.component) ? <this.state.scene.component /> : <Home />}
              </ScrollView>
            )
          }}
        />
      </DrawerLayoutAndroid>
    )
  }

  onActionSelected(argument) {
    this.setState({scene: argument});
    this.refs.sidebar.closeDrawer();
  }
}

const icons = {
        credit: require('./icons/ic_credit_card.png'),
      favorite: require('./icons/ic_favorite_border.png'),
          help: require('./icons/ic_help_outline.png'),
          info: require('./icons/ic_info_outline.png'),
      personal: require('./icons/ic_personal_video.png'),
     phonelink: require('./icons/ic_phonelink_ring.png'),
          lock: require('./icons/ic_lock_open.png'),
          menu: require('./icons/ic_menu_white.png'),
  notification: require('./icons/ic_notifications_none.png'),
          star: require('./icons/ic_star_border.png'),
};

const actions = [
  {title: 'Home', icon: icons.personal},
  {title: 'Login / Register', icon: icons.lock},
  {title: 'Wishlist', icon: icons.favorite},
  {title: 'My Billboard', icon: icons.star},
  {title: 'Notification', icon: icons.notification},
  {title: 'Wallet', icon: icons.credit},
  {title: 'Help', icon: icons.help},
  {title: 'About Us', icon: icons.info, component: About},
  {title: 'Contact', icon: icons.phonelink},
];
