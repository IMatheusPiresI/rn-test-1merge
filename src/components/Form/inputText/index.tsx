import { Input, Text, VStack } from 'native-base';
import React, { useRef, useState } from 'react';
import { TextInputProps } from 'react-native';

type IProps = {
  label: string;
  touched?: boolean;
  error?: string;
} & TextInputProps;

export const InputText: React.FC<IProps> = ({
  label,
  value,
  touched,
  error,
  ...rest
}) => {
  const inputRef = useRef<TextInputProps>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <VStack>
      <Text
        fontFamily="poppins"
        fontWeight="normal"
        color="#000000"
        fontSize={12}
      >
        {label}
      </Text>
      <Input
        width={'full'}
        h="10"
        borderWidth={0}
        borderBottomWidth={1}
        borderBottomColor={isFocused || value ? '#000113' : '#CBD5E1'}
        backgroundColor={'#ffffff'}
        px={0}
        py={1}
        placeholderTextColor="#b9b9b9"
        fontSize={14}
        color="#000113"
        fontFamily="roboto"
        focusOutlineColor="#0000"
        fontWeight="normal"
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        {...rest}
      />
      {touched && error && (
        <Text
          fontFamily="poppins"
          fontWeight="medium"
          color="#c11515"
          fontSize={11}
          mt="1"
        >
          {error}
        </Text>
      )}
    </VStack>
  );
};
