import { createStackNavigator } from "@react-navigation/stack";

import BackButton from "../components/BackButton";
import PostsScreen from "../screens/PostsScreen";
import CommentsScreen from "../screens/CommentsScreen";
import MapScreen from "../screens/MapScreen";
import LogoutButton from "../components/LogoutButton";
import { logoutDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const Stack = createStackNavigator();

const PostsNavigator = () => {
  const dispatch = useDispatch();

  return (
    <Stack.Navigator
      initialRouteName="Posts"
      screenOptions={({ navigation }) => ({
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerLeft: () => null,
      })}
    >
      <Stack.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => (
            <LogoutButton onPress={() => logoutDB(dispatch)} />
          ),
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={({ navigation }) => ({
          title: "Коментарі",
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
      <Stack.Screen
        name="Maps"
        component={MapScreen}
        options={({ navigation }) => ({
          title: "Карти",
          headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default PostsNavigator;
