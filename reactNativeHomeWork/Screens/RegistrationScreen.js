import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.form}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Registration</Text>
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
      <View>
        <TextInput style={styles.input} />
      </View>
      <TouchableOpacity>
        <Text>Register</Text>
      </TouchableOpacity>
      <View>
        <Text>Do you have an account?</Text>
        <TouchableOpacity>
          <Text>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 10,
  },
});
