/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, Animated} from 'react-native';
import styles from './styles';
import {images, perfectSize} from '../../theme';

export default function Landing() {
  //Animated values
  const logoPosition = useRef(new Animated.Value(-500)).current;
  const contentContainerPosition = useRef(new Animated.Value(-500)).current;
  const titleOpacity = useRef(new Animated.Value(1)).current;
  const titlePosition = useRef(new Animated.Value(-500)).current;
  const taglinePosition = useRef(new Animated.Value(500)).current;
  const buttonAnimationWidth = useRef(
    new Animated.Value(perfectSize(200)),
  ).current;
  //Starts the Basic animation of logo and content container
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
    //Once the logo and content container animation finishes then title and tagline will be animated
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(titlePosition, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
        Animated.timing(taglinePosition, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }),
      ]).start();
    }, 1000);
    //Final animation for Let's Start button
    setTimeout(() => {
      Animated.timing(buttonAnimationWidth, {
        toValue: perfectSize(0),
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, 2000);
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
        <Animated.View style={{opacity: titleOpacity}}>
          <Animated.View style={{left: titlePosition}}>
            <Text style={styles.landingTitle}>
              {"Let's connect\nwith each other"}
            </Text>
          </Animated.View>
          <Animated.View style={{left: taglinePosition}}>
            <Text style={styles.landingTitleTagline}>
              {
                'A message is discrete communication\nintented by the source consumption.'
              }
            </Text>
          </Animated.View>
        </Animated.View>
        <View style={styles.buttonContentContainer}>
          <TouchableOpacity
            onPress={() => console.log(`${buttonAnimationWidth.current}`)}
            style={styles.buttonContainer}>
            <Text style={styles.buttonTitle}>{"Let's Start"}</Text>
          </TouchableOpacity>
          <Animated.View
            style={[styles.buttonAnimation, {width: buttonAnimationWidth}]}
          />
        </View>
      </Animated.View>
    </View>
  );
}
