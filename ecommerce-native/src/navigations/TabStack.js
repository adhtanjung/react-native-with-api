import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {withTheme} from 'react-native-paper';
import {Home} from '../screens';

const Tab = createBottomTabNavigator();
const TabStack = (props) => {
  const {colors} = props.theme;

  const Shop = () => {
    return (
      <View>
        <Text style={styles.text}>Shop</Text>
      </View>
    );
  };
  const Favorites = () => {
    return (
      <View>
        <Text style={styles.text}>Favorites</Text>
      </View>
    );
  };
  const Profile = () => {
    return (
      <View>
        <Text style={styles.text}>Profile</Text>
      </View>
    );
  };
  const Bag = () => {
    return (
      <View>
        <Text style={styles.text}>Bag</Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let iconLabel;

          if (route.name === 'Home') {
            iconName = 'home';
            iconLabel = 'Home';
          } else if (route.name === 'Shop') {
            iconName = 'shopping-cart';
            iconLabel = 'Shop';
          } else if (route.name === 'Bag') {
            iconName = 'shopping-bag';
            iconLabel = 'Bag';
          } else if (route.name === 'Favorites') {
            iconName = 'favorite';
            iconLabel = 'Favorites';
          } else if (route.name === 'Profile') {
            iconName = 'person-pin';
            iconLabel = 'Profile';
          }

          // You can return any component that you like here!
          return (
            <>
              <Icon name={iconName} size={size} color={color} type="material" />
              <Text style={{fontSize: 12, color: 'grey'}}>{iconLabel}</Text>
            </>
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
        // tabStyle: {
        showLabel: false,
        // },
        style: {
          //   borderTopLeftRadius: 14,
          //   borderTopRightRadius: 14,
          shadowColor: 'black',
          shadowOffset: {
            width: 10,
            height: 9,
          },
          shadowOpacity: 10,
          shadowRadius: 11.95,

          elevation: 18,
          backgroundColor: colors.background,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Shop" component={Shop} />
      <Tab.Screen name="Bag" component={Bag} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default withTheme(TabStack);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'metro',
  },
});
