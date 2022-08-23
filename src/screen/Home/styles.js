import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constant/colors';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.2,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBackground: {
    width: screen.width * 0.3,
    height: 140,
  },
  logo: {
    width: screen.width * 0.15,
    height: screen.height * 0.15,
    position: 'absolute',
  },
  logoText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 27,
    fontWeight: '500',
    marginTop: 5,
    marginBottom: 12,
  },
  loading: {
    marginTop: 50,
    marginBottom: 15,
  },
  loadingText: {textAlign: 'center', color: colors.white, fontSize: 20},
});

export default styles;
