import React, {useRef, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';
import {fonts, images, colors} from '../../theme';

export default function Landing() {
  const logoPosition = useRef(new Animated.Value(-500)).current;
  const contentContainerPosition = useRef(new Animated.Value(-500)).current;

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(logoPosition, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
      Animated.timing(contentContainerPosition, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: false,
      }),
    ]).start();
  };
  useEffect(() => {
    startAnimation();
    // setTimeout(() => {
    // Animated.timing(logoPosition, {
    //   toValue: 0,
    //   duration: 2000,
    //   useNativeDriver: false,
    // }).start();
    // }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, {top: logoPosition}]}>
        <Image source={images.logo} style={styles.logo} />
      </Animated.View>
      <Animated.View
        style={[
          styles.landingContentContainer,
          {bottom: contentContainerPosition},
        ]}>
        <Text style={styles.landingTitle}>
          {"Let's connect\nwith each other"}
        </Text>
        <Text style={styles.landingTitleTagline}>
          {
            'A message is discrete communication\nintented by the source consumption.'
          }
        </Text>
        <TouchableOpacity
          onPress={() => console.log(typeof logoPosition)}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>{"Let's Start"}</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
