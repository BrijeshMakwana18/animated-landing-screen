/* eslint-disable no-undef */
import {StyleSheet} from 'react-native';
import {colors, fonts, perfectSize} from '../../theme';

//Styles for landing screen
export default styles = StyleSheet.create({
  //Main container style
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '10%',
  },
  logoContainer: {
    height: '50%',
    width: '100%',
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
  buttonAnimation: {
    height: perfectSize(70),
    backgroundColor: colors.secondaryBackgroundColor,
    borderRadius: perfectSize(19),
    position: 'absolute',
    alignSelf: 'flex-start',
  },
  buttonTitle: {
    fontFamily: fonts.quicksandBold,
    color: colors.primaryTextColor,
    fontSize: 20,
  },
});
