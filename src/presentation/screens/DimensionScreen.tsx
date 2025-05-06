import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

/* const { width, height } = Dimensions.get( 'window' ); */


export const DimensionScreen = () => {

  const { width, height } = useWindowDimensions();
  
  return (
    <View>
      <View style={ styles.container }>
        <View style={ {
          ...styles.purpleBox,
          width: width * 0.5,
        } } />
      </View>
      <Text style={ styles.title }>W: { width }, h: { height }</Text>
    </View>
  );
};
const styles = StyleSheet.create( {
  container: {
    width: 300,
    backgroundColor: 'red',
    height: 300,
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    height: '50%',
    width: '50%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  }
} );