import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { Image } from 'react-native';

import { images } from '../constants/images';

const OnboardingLogo = () => (
  <Box center>
    <Box mb="sm">
      <Image source={images.logo} />
    </Box>
    <Box mb="sm">
      <Text size="2xl">
        Mu
        <Text color="green" size="2xl">
          jic
        </Text>
      </Text>
    </Box>
    <Text size="sm">Listen everything.</Text>
  </Box>
);

export default OnboardingLogo;
