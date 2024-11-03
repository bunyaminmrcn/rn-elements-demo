import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@rneui/themed';
import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';


const theme = createTheme({
  
  mode: 'dark',
  components: {
    Text: {
      h1Style: {
        fontSize: 80,
      },
    },
  },
});


export default () => {
  

  const colorScheme = useColorScheme();
  theme.mode = colorScheme;

 

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};
