import React from "react";
import { Text, View, StyleSheet } from "react-native";
import PostsScreen from "../mainScreen/PostsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
const MainTab = createBottomTabNavigator();
const HomeScreen = () => {
  return (
    <NavigationContainer>
      <View style={styles.container} name="Home">
        <PostsScreen />
        <MainTab.Navigator tabBarOptions={{ showLabel: false }}>
          <MainTab.Screen
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <MaterialCommunityIcons
                  name="postage-stamp"
                  size={size}
                  color={color}
                />
              ),
            }}
            name="Posts"
            component={PostsScreen}
          />
          <MainTab.Screen
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <AntDesign name="pluscircleo" size={35} color={color} />
              ),
            }}
            name="Create"
            component={CreatePostsScreen}
          />
          <MainTab.Screen
            options={{
              tabBarIcon: ({ focused, size, color }) => (
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={size}
                  color={color}
                />
              ),
            }}
            name="Profile"
            component={ProfileScreen}
          />
        </MainTab.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
