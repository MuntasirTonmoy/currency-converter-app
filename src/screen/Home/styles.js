import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constant/colors';

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  info: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'right',
    marginRight: 20,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.13,
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
  },
  loadingText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    marginTop: 15,
  },
  error: {
    marginTop: 15,
    color: colors.orange,
    fontSize: 40,
    textAlign: 'center',
  },
  tryButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tryAgain: {
    backgroundColor: colors.deepBlue,
    padding: 10,
    width: screen.width * 0.4,
    borderRadius: 5,
    marginVertical: 20,
  },
  tryButtonText: {
    color: colors.white,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default styles;
