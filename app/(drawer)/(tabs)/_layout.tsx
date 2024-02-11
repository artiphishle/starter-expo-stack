import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';
import {ComponentProps} from 'react';
import {StyleSheet} from 'react-native';

/**
 *
 * @param {object} props
 * @return {JSX.Element}
 */
function TabBarIcon(props: {
  name: ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

/**
 * @return {JSX.Element}
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab One',
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({color}) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -3,
  },
});
