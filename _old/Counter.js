import React, { useState } from 'react';
import { StyleSheet, Button, TextInput } from 'react-native';
import { View, Text } from 'react-native-tailwind'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from 'react-navigation-hooks';

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <View>
//       <Text>You clicked {count} times.</Text>
//       <Button
//         onPress={() => setCount(count + 1)}
//         title="Click here"
//         color="red"
//         accessibilityLabel="Click this button to increase count"
//       />
//     </View>
//   );
// }