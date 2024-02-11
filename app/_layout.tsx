import '../global.css';

import {Stack} from 'expo-router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

// eslint-disable-next-line camelcase
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

/**
 *
 * @return {JSX.Element}
 */
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Stack>
        <Stack.Screen name="(drawer)" options={{headerShown: false}} />
        <Stack.Screen
          name="modal"
          options={{title: 'Modal', presentation: 'modal'}}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
