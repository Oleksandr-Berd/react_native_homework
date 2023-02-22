import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Platform,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const initialState = {
  email: "",
  password: "",
};

const loadApplication = async () => {
  await Font.loadAsync({
    "Mynerve-Regular": require("../assets/Fonts/Mynerve/Mynerve-Regular.ttf"),
  });
};

export const LoginScreen = () => {
  const [isReady, setIsReady] = useState(false);
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dimension, setDimension] = useState(
    Dimensions.get("window").width - 20 * 2
  );

  useEffect(() => {
    const onChange = () => {
      const width = Dimensions.get("window").width - 20 * 2;
      console.log("width", width);
      setDimension(width);
    };
    Dimensions.addEventListener("change", onChange);

    // return () => {
    //   Dimensions.removeEventListener("change", onChange);
    // };
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => {
          setIsReady(true);
        }}
        onError={console.warn}
      />
    );
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View
        style={{
          ...styles.form,
          marginBottom: isShowKeyboard ? 240 : 179,
          width: dimension,
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Login</Text>
          </View>
          <View>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              value={state.email}
              placeholder={"Email"}
              placeholderTextColor={`#fff8dc`}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, email: value }))
              }
            />
          </View>
          <View>
            <TextInput
              style={styles.inputLast}
              textAlign={"center"}
              value={state.password}
              secureTextEntry={true}
              placeholder={"Password"}
              placeholderTextColor={`#fff8dc`}
              onFocus={() => {
                setIsShowKeyboard(true);
              }}
              onChangeText={(value) =>
                setState((prevState) => ({ ...prevState, password: value }))
              }
            />
            <TouchableOpacity style={styles.btn}>
              <Text
                style={styles.btnTitle}
                activeOpacity={0.7}
                onPress={keyboardHide}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View>
        <Text>Do you have an account?</Text>
        <TouchableOpacity>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View> */}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  form: {
    // marginHorizontal: 10,
  },
  header: {
    alignItems: "center",
  },
  headerTitle: {
    color: `#f8f8ff`,
    fontSize: 30,
    fontWeight: "500",
    fontFamily: "Mynerve-Regular",
    marginBottom: 33,
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    width: 343,
    height: 50,
    borderRadius: 6,
    color: "#fff",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  inputLast: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    width: 343,
    height: 50,
    borderRadius: 6,
    color: "#fff",
    marginBottom: 43,
    marginHorizontal: 16,
  },
  btn: {
    borderWidth: 1,
    height: 40,
    width: 343,
    borderRadius: 24,
    marginBottom: 113,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
    ...Platform.select({
      ios: {
        borderColor: "#f0f8ff",
        backgroundColor: "#ffb6c1",
      },
    }),
  },
  btnTitle: {
    color: `#00008b`,
    fontFamily: "Mynerve-Regular",
    fontSize: 16,
    fontWeight: "400",
  },
});
