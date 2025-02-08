import { useState } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

import { colors } from "../../styles/global";
import { registerDB } from "../utils/auth";

import Input from "../components/Input";
import Button from "../components/Button";
import ProfilePhoto from "../components/ProfilePhoto";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const RegistrationScreen = ({ route, navigation }) => {
  const [formState, setFormState] = useState({
    login: "",
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [selectedInput, setSelelectedInput] = useState("password");

  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleLoginChange = (value) => {
    handleChange("login", value);
  };

  const handleEmailChange = (value) => {
    handleChange("email", value);
  };

  const handlePasswordChange = (value) => {
    handleChange("password", value);
  };

  const showPassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const onSignUp = async () => {
    registerDB(formState);
  };

  const onLogIn = () => {
    navigation.navigate("Login");
  };

  const onProfilePicAddButton = () => {
    console.log("ProfilePicAddButton");
  };

  const showButton = (
    <TouchableOpacity onPress={() => showPassword(selectedInput)}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <Image
          source={require("../../assets/background_photo.png")}
          resizeMode="cover"
          style={styles.image}
        />

        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.formContainer}>
            <ProfilePhoto onPress={onProfilePicAddButton} />

            <Text style={styles.title}>Реєстрація</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                autofocus={true}
                value={formState.login}
                placeholder="Логін"
                onTextChange={handleLoginChange}
              />
              <Input
                value={formState.email}
                placeholder="Адреса електронної пошти"
                onTextChange={handleEmailChange}
              />

              <Pressable onPress={() => setSelelectedInput("password")}>
                <Input
                  value={formState.password}
                  placeholder="Пароль"
                  rightButton={showButton}
                  outerStyles={styles.passwordButton}
                  onTextChange={(value) => handlePasswordChange(value)}
                  secureTextEntry={isPasswordVisible}
                />
              </Pressable>
            </View>

            <View style={[styles.innerContainer, styles.buttonContainer]}>
              <Button onPress={onSignUp}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Зареєструватися
                </Text>
              </Button>

              <View style={styles.signUpContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Вже є акаунт?
                  <TouchableWithoutFeedback onPress={onLogIn}>
                    <Text> Увійти</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </TouchableWithoutFeedback>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  innerContainer: {
    gap: 16,
  },
  inputContainer: {
    marginTop: 32,
  },
  buttonContainer: {
    marginTop: 42,
  },
  image: {
    position: "absolute",
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
  },
  formContainer: {
    width: SCREEN_WIDTH,
    height: "68%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 92,
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
    lineHeight: 36,
    textAlign: "center",
  },
  baseText: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18,
  },
  loginButtonText: {
    color: colors.white,
    textAlign: "center",
  },
  passwordButtonText: {
    color: colors.blue,
  },
  passwordButton: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
