import {StyleSheet} from 'react-native';
import {colors, fonts, perfectSize} from '../../theme';
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  logoContainer: {
    height: '50%',
    width: '100%',
    // backgroundColor: 'green',
  },
  logo: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  landingContentContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: colors.secondaryBackgroundColor,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  landingTitle: {
    fontFamily: fonts.quicksandBold,
    color: colors.primaryTextColor,
    fontSize: 30,
    textAlign: 'center',
  },
  landingTitleTagline: {
    fontFamily: fonts.quicksandBold,
    color: colors.primaryTextColor,
    fontSize: 18,
    opacity: 0.5,
    textAlign: 'center',
    marginTop: '5%',
  },
  buttonContentContainer: {
    marginTop: '10%',
    // backgroundColor: colors.buttonBackgroundColor,
    borderRadius: perfectSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    height: perfectSize(70),
    width: perfectSize(200),
    backgroundColor: colors.buttonBackgroundColor,
    borderRadius: perfectSize(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTitle: {
    fontFamily: fonts.quicksandBold,
    color: colors.primaryTextColor,
    fontSize: 20,
  },
});
