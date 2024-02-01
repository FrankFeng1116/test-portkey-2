import { Button, View } from "react-native";
import { axios } from "../api";
import { useUserStore } from "../stores";

export const Login = () => {
  const localLogin = useUserStore((state) => state.login);

  const login = async () => {
    try {
      await axios.post("/login");
      localLogin();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Button title="Login" onPress={login} />
    </View>
  );
};
