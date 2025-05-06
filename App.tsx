import { SafeAreaView, Text } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
import { PositionScreen } from './src/presentation/screens/PositionScreen';
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';

export const App = () => {
  return (
    <PaperProvider
      settings={ {
        icon: ( props ) => <Ionicons { ...props } />
      } }
    >
      <SafeAreaView style={ { flex: 1 } }>
        {/* <CounterScreen /> */ }
        {/* <CounterM3Screen /> */ }
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        <FlexDirectionScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};