import { useState } from "react";
import {
  View,
  Text,
  Image,
  Platform,
  Keyboard,
  Pressable,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";

import { colors } from "../../styles/global";

import Input from "../components/Input";
import Button from "../components/Button";
import { loginDB } from "../utils/auth";
import { useDispatch } from "react-redux";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const LoginScreen = ({ route, navigation }) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [selectedInput, setSelelectedInput] = useState("password");

  const dispatch = useDispatch();

  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
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

  const onLogin = async () => {
    try {
      await loginDB(formState, dispatch);
    } catch (err) {
      Alert.alert("err");
      console.error("Login error:", err); // Логування помилок
    }
  };

  const onRegistration = () => {
    navigation.navigate("Registration");
  };

  const showButton = (
    <TouchableOpacity onPress={() => showPassword(selectedInput)}>
      <Text style={[styles.baseText, styles.passwordButtonText]}>Показати</Text>
    </TouchableOpacity>
  );

  return (
    <Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
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
            <Text style={styles.title}>Увійти</Text>

            <View style={[styles.innerContainer, styles.inputContainer]}>
              <Input
                value={formState.email}
                autofocus={true}
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
              <Button onPress={onLogin}>
                <Text style={[styles.baseText, styles.loginButtonText]}>
                  Увійти
                </Text>
              </Button>

              <View style={styles.registrationContainer}>
                <Text style={[styles.baseText, styles.passwordButtonText]}>
                  Немає акаунту?
                  <TouchableWithoutFeedback onPress={onRegistration}>
                    <Text style={styles.registrationText}>Зареєструватися</Text>
                  </TouchableWithoutFeedback>
                </Text>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </>
    </Pressable>
  );
};

export default LoginScreen;

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
    height: "55%",
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    paddingHorizontal: 16,
    paddingTop: 32,
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
  registrationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  registrationText: {
    textDecorationLine: "underline",
  },
});
