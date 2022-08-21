import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 12,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRightColor: colors.border,
    borderRightWidth: 2,
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  buttonText: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    paddingLeft: 10,
  },
  disabled: {
    backgroundColor: colors.gray,
  },
});

export default styles;
