import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Linking,
  Alert,
} from 'react-native';
import colors from '../../constant/colors';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  content: {
    paddingTop: screen.height * 0.01,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  headerText: {
    fontSize: 20,
    color: colors.darkGray,
    marginVertical: 18,
  },
  text: {
    fontSize: 18,
    color: colors.darkGray,
    marginVertical: 5,
  },
  image: {
    height: screen.width * 0.5,
    width: screen.width * 0.5,
    marginBottom: 10,
  },
  link: {fontSize: 18, color: colors.blue},
  simpleText: {
    textAlign: 'center',
    marginHorizontal: 20,
    fontSize: 18,
    color: colors.darkGray,
    marginVertical: 5,
  },
});

const About = () => {
  const openLink = url =>
    Linking.openURL(url).catch(() =>
      Alert.alert('Sorry, something went wrong.', 'Please try again later.'),
    );

  return (
    <>
      <View style={styles.content} />
      <View style={styles.container}>
        <Text style={styles.headerText}>This app is developed by</Text>
        <Image
          style={styles.image}
          source={require('../../assets/images/me.png')}
          resizeMode="contain"
        />
        <Text style={styles.text}>Muntasir Hossain</Text>
        <Text style={styles.text}>
          <Text
            onPress={() => openLink('mailto:muntasir01521566317@gmail.com')}
            style={styles.link}>
            Mail
          </Text>{' '}
          |{' '}
          <Text
            style={styles.link}
            onPress={() =>
              openLink('https://www.linkedin.com/in/muntasir-hossain/')
            }>
            LinkedIn
          </Text>{' '}
          |{' '}
          <Text
            style={styles.link}
            onPress={() => openLink('https://muntasir-hossain.netlify.app')}>
            Portfolio
          </Text>
        </Text>
        <Text style={styles.simpleText}>
          Dedicated to My Family, Fahmina Lopa and Her Family
        </Text>
      </View>
    </>
  );
};

export default About;
