import React, { useState } from 'react';
import { AppRegistry, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-tailwind'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from 'react-navigation-hooks';
import styled, { css } from '@emotion/native'
//
import SMSValidationScreen from 'c/screens/SMSValidation'
//
import { Button } from 'c/atoms/Button'



// {/* <View
//           className="flex flex-row"
//         >
//           <TextInput
//             style={styles.smsInput}
//             onChangeText={(text) => setText({ text })}
//             value={text}
//           />
//           <TextInput
//             style={styles.smsInput}
//             onChangeText={(text) => setText({ text })}
//             value={text}
//           />
//           <TextInput
//             style={styles.smsInput}
//             onChangeText={(text) => setText({ text })}
//             value={text}
//           />
//           <TextInput
//             style={styles.smsInput}
//             onChangeText={(text) => setText({ text })}
//             value={text}
//           />
//         </View> */}




const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        text="Go to SMS validation"
        onPress={() => navigate('SMSValidation')}
      />
    </View>
  )
};

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    SMSValidation: SMSValidationScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Créez votre compte",
      headerTitleStyle: { textAlign: 'center', flex: 1, paddingRight: 60 },
      headerTransparent: true,
      headerTintColor: 'white',
    }
  }
);

export default createAppContainer(AppNavigator);



// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   justifyContent: 'space-between',
//   //   alignItems: 'stretch',
//   //   backgroundColor: '#F5FCFF',
//   //   padding: '5%',
//   // },
//   // welcome: {
//   //   fontSize: 20,
//   //   textAlign: 'center',
//   //   margin: 10
//   // },
//   // instructions: {
//   //   textAlign: 'center',
//   //   color: '#333333',
//   //   marginBottom: 5
//   // },
//   // smsInputsList: {
//   //   flexDirection: "row"
//   // },
//   // smsInput: { height: 40, borderColor: 'gray', borderWidth: 1 }
// });

