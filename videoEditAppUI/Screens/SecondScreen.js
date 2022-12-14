import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
export default SecondScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#282E32', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{uri: 'https://img.icons8.com/ios-filled/2x/left.png'}}
            style={{width: 30, height: 30, tintColor: 'white'}}
          />
        </TouchableOpacity>

        <Text style={{fontSize: 20, color: 'white', fontWeight: '500'}}>
          Editor
        </Text>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/512/checkmark--v1.png',
          }}
          style={styles.okIcon}
        />
      </View>
      <View
        style={{
          backgroundColor: 'black',
        }}>
        <Image
          style={{
            width: Dimensions.get('screen').width,
            height: Dimensions.get('screen').height / 4,
            marginVertical: 40,
          }}
          source={{
            uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2F6%2F5%2F1316311-download-free-denver-mountains-wallpaper-1920x1200-for-samsung.jpg&f=1&nofb=1&ipt=4a8fb3f74f2c8bd695f61f5218125fcfd575a3f0cb4128b34224ed4c2f768152&ipo=images',
          }}
        />
      </View>
      <View style={{padding: 20, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://img.icons8.com/ios-filled/512/play-button-circled--v1.png',
          }}
          style={{width: 50, height: 50, tintColor: 'white'}}
        />
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: 'white', fontWeight: '500'}}>00:52</Text>
            <Text style={{color: 'white', fontWeight: '500'}}>04:49</Text>
          </View>
          <View
            style={{marginVertical: 15, height: 2, backgroundColor: 'grey'}}>
            <View
              style={{height: 3, backgroundColor: 'white', width: 100}}></View>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.iconBg}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios/512/query-outer-join-left.png',
              }}
              style={styles.icon}
            />
          </View>
          <Text style={styles.iconTitle}>Filters</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.iconBg}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios/512/clock.png',
              }}
              style={styles.icon}
            />
          </View>
          <Text style={styles.iconTitle}>Duration</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.iconBg}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios/512/aspect-ratio.png',
              }}
              style={styles.icon}
            />
          </View>
          <Text style={styles.iconTitle}>Aspect Ratio</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={styles.iconBg}>
            <Image
              source={{
                uri: 'https://img.icons8.com/ios/512/snap-background-to-white.png',
              }}
              style={styles.icon}
            />
          </View>
          <Text style={styles.iconTitle}>Background</Text>
        </View>
      </View>
      <View
        style={{marginVertical: 10, height: 0.5, backgroundColor: 'grey'}}
      />
      <View style={{flexDirection: 'row'}}>
        <View style={styles.playerVideo}>
          <Image
            source={{
              uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2Fc%2F6%2F5%2F1316311-download-free-denver-mountains-wallpaper-1920x1200-for-samsung.jpg&f=1&nofb=1&ipt=4a8fb3f74f2c8bd695f61f5218125fcfd575a3f0cb4128b34224ed4c2f768152&ipo=images',
            }}
            style={{
              width: Dimensions.get('screen').width / 5,
              height: Dimensions.get('screen').height / 11,
            }}
          />
          <Image
            source={{
              uri: 'https://img.icons8.com/ios-glyphs/512/macos-close.png',
            }}
            style={styles.closeIcon}
          />
        </View>
        <View style={styles.selectedVideo}>
          <Image
            source={{
              uri: 'https://img.icons8.com/android/512/plus.png',
            }}
            style={{
              tintColor: 'white',
              width: Dimensions.get('screen').width / 15,
              height: Dimensions.get('screen').height / 30,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

var styles = StyleSheet.create({
  okIcon: {
    width: 30,
    height: 30,
    tintColor: 'white',
    backgroundColor: '#E47373',
    borderRadius: 100,
  },
  iconTitle: {
    color: 'white',
  },
  icon: {width: 30, height: 30, tintColor: 'white'},
  iconBg: {
    backgroundColor: '#363E46',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  selectedVideo: {
    padding: 1,
    margin: 10,
    borderWidth: 2,
    borderColor: 'grey',
    borderStyle: 'dotted',
    width: Dimensions.get('screen').width / 5,
    height: Dimensions.get('screen').height / 11,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    width: 20,
    height: 20,
    top: -10,
    right: -10,
    tintColor: 'white',
  },
  playerVideo: {
    padding: 1,
    margin: 10,
    borderWidth: 2,
    borderColor: '#E47373',
  },
});
