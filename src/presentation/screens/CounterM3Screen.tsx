import { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export const CounterM3Screen = () => {

  const [ count, setCount ] = useState( 10 );

  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title }>{ count }</Text>
     {/*  <Ionicons name="add" size={45} color="green" /> */}
      <FAB style={ globalStyles.fab } icon="add-outline" onPress={ () => setCount( count + 1 ) } onLongPress={ () => setCount( 0 ) } />
    </View>
  );
};
