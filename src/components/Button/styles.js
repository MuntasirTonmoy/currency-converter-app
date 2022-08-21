import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.deepBlue,
    padding: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  buttonIcon: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '500',
  },
});

export default styles;
