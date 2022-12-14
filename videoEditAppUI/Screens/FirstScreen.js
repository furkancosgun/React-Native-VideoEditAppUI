import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default FirstScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#282E32', flex: 1}}>
      <View style={{alignItems: 'flex-end', padding: 10}}>
        <Image
          source={{uri: 'https://img.icons8.com/ios/512/engineering.png'}}
          style={{width: 30, height: 30, tintColor: 'white'}}
        />
      </View>
      <View style={{padding: 10, marginTop: 40}}>
        <Text style={style.title}>Hello, Friend</Text>
        <Text style={style.subtitle}>Lets create something new!</Text>
      </View>
      <View style={{marginTop: 30}}>
        <View>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate('second')}>
              <View style={[style.containers, {backgroundColor: '#E47373'}]}>
                <Image
                  style={style.icon}
                  source={{
                    uri: 'https://img.icons8.com/ios/512/video-editing.png',
                  }}
                />
                <Text style={style.iconText}>Editor</Text>
              </View>
            </TouchableOpacity>
            <View style={[style.containers, {backgroundColor: '#FFB74D'}]}>
              <Image
                style={style.icon}
                source={{
                  uri: 'https://img.icons8.com/ios/512/camera--v1.png',
                }}
              />
              <Text style={style.iconText}>Camera</Text>
            </View>
          </View>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <View style={[style.containers, {backgroundColor: '#81C784'}]}>
              <Image
                style={style.icon}
                source={{
                  uri: 'https://img.icons8.com/ios/512/visual-effects.png',
                }}
              />
              <Text style={style.iconText}>Studio</Text>
            </View>
            <View style={[style.containers, {backgroundColor: '#4DB6AC'}]}>
              <Image
                style={style.icon}
                source={{
                  uri: 'https://img.icons8.com/ios/512/video-trimming.png',
                }}
              />
              <Text style={style.iconText}>Trim Video</Text>
            </View>
          </View>
          <View style={{padding: 10, flexDirection: 'row'}}>
            <View style={[style.containers, {backgroundColor: '#7886CB'}]}>
              <Image
                style={style.icon}
                source={{
                  uri: 'https://img.icons8.com/ios/512/online-store.png',
                }}
              />
              <Text style={style.iconText}>Store</Text>
            </View>
            <View style={[style.containers, {backgroundColor: '#788F9C'}]}>
              <Image
                style={style.icon}
                source={{
                  uri: 'https://img.icons8.com/ios/512/fairytale.png',
                }}
              />
              <Text style={style.iconText}>Go Premium</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

var style = StyleSheet.create({
  containers: {
    width: Dimensions.get('window').width / 2 - 30,
    height: Dimensions.get('window').height / 9,
    borderRadius: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subtitle: {
    fontFamily: 'Apple SD Gothic Neo',
    fontWeight: '400',
    color: '#ACADAF',
    fontSize: 18,
    marginTop: 10,
    letterSpacing: 2,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  iconText: {
    fontSize: 18,
    color: 'white',
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'Apple SD Gothic Neo',
    fontWeight: '400',
    color: 'white',
    fontSize: 22,
  },
});
