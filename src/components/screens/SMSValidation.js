import React, { useState, useRef } from 'react';
import { AppRegistry, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-tailwind'
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useNavigation } from 'react-navigation-hooks';
import styled, { css } from '@emotion/native'
//
import { Button } from 'c/atoms/Button'

//
import { useStore } from 'effector-react'
import { validationCodeStore, setCodeNumber, codeValidationErrorStore, codeInputRefsStore, setCodeInputRef, focusNextRef } from 'd/state/smsValidationStore'


const SMSNumberInput = ({ getKey, getRef, nextRef }) => {
  const validationCodeState = useStore(validationCodeStore)
  const key = getKey()
  const value = validationCodeState[key]

  return (
    <TextInput
      style={{
        height: 40, margin: 8, marginLeft: 0, padding: 8,
        borderWidth: 1, borderColor: '#fffa', borderRadius: 4, backgroundColor: '#fff'
      }}
      ref={self => { setCodeInputRef({ key, ref: self }) }}
      onChangeText={(value) => {
        setCodeNumber({ key, value });
        focusNextRef({ currentInputKey: key })
      }}
      value={value !== -1 ? value : null}
      keyboardType='numeric'
      maxLength={1}
    />
  )
}

const SMSInputs = () => {
  const codeValidationErrorState = useStore(codeValidationErrorStore)

  return (
    <View>
      <FlatList
        horizontal={true}
        data={['a', 'b', 'c', 'd']}
        renderItem={({ item, index }) => <SMSNumberInput
          getKey={() => item}
        />}
        keyExtractor={(item, idx) => item}
      />
      {
        codeValidationErrorState.errorMessage === 'invalid code' &&
        <View style={css`background-color:darkred; padding:10px; border-radius: 4px; `} >
          <Text style={css`color:white; `} >
            'Code incorrect. Pressez "Renvoyer le SMS" si vous n\'avez rien reçu'
          </Text>
        </View>
      }
    </View >
  )
}

const resendButtonStyles = StyleSheet.create({
  self: {
    backgroundColor: 'transparent', alignItems: 'center',
    borderRadius: 9999, borderColor: '#fff5', borderWidth: 1,
    paddingTop: 10, paddingBottom: 10,
  },
  text: { color: 'white', fontSize: 18 }
})
export const SMSValidationScreen = () => {
  const [text, setText] = useState("")

  return (
    <View className="flex-1 items-stretch justify-between bg-blue-dark items-stretch" style={css`padding:60px 30px;`}>
      <View>
        <Text>Numéro de téléphone</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => setText({ text })}
          value={text}
          keyboardType="phone-pad"
          maxLength={20}
        />
      </View>

      <View style={css`min-height: 200px; `}>
        <Text>Code de confirmation reçu par SMS</Text>
        <SMSInputs></SMSInputs>
      </View>

      <View>
        <Button
          style={resendButtonStyles.self}
          textStyle={resendButtonStyles.text}
          text="Renvoyer le SMS"
          onPress={() => setText("")}
        />
      </View>
    </View>
  );
}

export default SMSValidationScreen;