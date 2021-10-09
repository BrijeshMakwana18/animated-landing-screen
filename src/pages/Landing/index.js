import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {fonts, images, colors} from '../../theme';

export default function Landing() {
  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.logo} />
      <View style={styles.landingContentContainer}>
        <Text style={styles.landingTitle}>
          {"Let's connect\nwith each other"}
        </Text>
        <Text style={styles.landingTitleTagline}>
          {
            'A message is discrete communication\nintented by the source consumption.'
          }
        </Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonTitle}>{"Let's Start"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
