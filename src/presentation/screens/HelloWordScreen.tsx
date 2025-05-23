import { StyleSheet, Text, View } from 'react-native';

interface Props {
  name?: string;
}

export const HelloWordScreen = ( { name = 'World' }: Props ) => {
  return (
    <View style={ styles.container }>
      <Text numberOfLines={ 1 } ellipsizeMode='tail' style={ styles.title }>Hola, { name }!</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    color: 'black',
  }
} );