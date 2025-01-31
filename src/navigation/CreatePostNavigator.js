import { createStackNavigator } from "@react-navigation/stack";

import BackButton from "../components/BackButton";
import CreatePostsScreen from "../screens/CreatePostsScreen";
import CameraScreen from "../screens/CameraScreen";

const Stack = createStackNavigator();

const CreatePostNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="CreatePost"
      screenOptions={({ navigation }) => ({
        title: "Створити публікацію",
        headerRightContainerStyle: { paddingRight: 16 },
        headerLeftContainerStyle: { paddingLeft: 16 },
        headerLeft: () => <BackButton onPress={() => navigation.goBack()} />,
      })}
    >
      <Stack.Screen name="CreatePost" component={CreatePostsScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};

export default CreatePostNavigator;
