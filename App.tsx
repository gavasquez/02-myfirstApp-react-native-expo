import { SafeAreaView, Text } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
import { Ionicons } from '@expo/vector-icons';

export const App = () => {
  return (
    <PaperProvider
      settings={ {
        icon: ( props ) => <Ionicons { ...props } />
      } }
    >
      <SafeAreaView style={ { flex: 1 } }>
        {/* <CounterScreen /> */ }
        <CounterM3Screen />
      </SafeAreaView>
    </PaperProvider>
  );
};