import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../../styles/global";

import ProfileScreen from "../screens/ProfileScreen";
import LogoutButton from "../components/LogoutButton";
import BackButton from "../components/BackButton";
import CreatePostNavigator from "./CreatePostNavigator";
import PostsIcon from "../../icons/PostsIcon";
import CreatePostIcon from "../../icons/CreatePostIcon";
import ProfileIcon from "../../icons/ProfileIcon";
import PostsNavigator from "./PostsNavigator";
import { logoutDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Tab.Navigator
      initialRouteName="PostsStack"
      screenOptions={({ navigation }) => ({
        tabBarLabel: "",
        tabBarStyle: {
          display: "flex",
          height: 83,
        },
        tabBarItemStyle: {
          paddingTop: 9,
        },
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
      })}
    >
      <Tab.Screen
        name="PostsStack"
        component={PostsNavigator}
        options={({ navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <PostsIcon color={colors.black_primary} />
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="CreatePostStack"
        component={CreatePostNavigator}
        options={({ navigation }) => ({
          title: "Створити публікацію",
          headerShown: false,
          tabBarStyle: { display: "none" },
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
          tabBarIcon: ({ focused }) => (
            <View style={styles.addButton}>
              <CreatePostIcon color={colors.white} />
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "Profile",
          headerRight: () => (
            <LogoutButton onPress={() => logoutDB(dispatch)} />
          ),
          tabBarIcon: ({ focused }) => (
            <View style={focused && styles.addButton}>
              <ProfileIcon
                color={focused ? colors.white : colors.black_primary}
              />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  addButton: {
    width: 70,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.orange,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default BottomTabNavigator;
