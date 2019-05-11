import React, { useState } from 'react';
import { StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native-tailwind'
import styled, { css } from '@emotion/native'


const ButtonStyled = styled.TouchableOpacity`
    display:flex;   
    background-color: white;
    padding: 2px 5px;
    color: black;
`
export const Button = ({ text, style, textStyle, children, ...props }) => {
    <ButtonStyled
        style={style}
        {...props}
    >
        <Text style={textStyle}>{text}</Text>
    </ButtonStyled >
}

export default Button;