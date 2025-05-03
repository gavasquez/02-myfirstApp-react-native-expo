import { Platform, Pressable, StyleSheet, Text } from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ( { label, onPress, onLongPress }: Props ) => {
  return (
    <Pressable style={ ( { pressed } ) => [ styles.button, pressed && styles.buttonPressed ] } onPress={ () => onPress && onPress() } onLongPress={ () => onLongPress && onLongPress() }>
      <Text style={ styles.buttonText }>{ label }</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create( {
  button: {
    backgroundColor: Platform.OS === 'android' ? '#5856D6' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#4746ab' : 'white',
  },
  buttonText: {
    color: Platform.OS === 'android' ? 'white' : '#4749ab',
  }
} );