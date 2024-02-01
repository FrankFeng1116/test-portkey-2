import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { useUserStore } from "../stores";

export const Navigator = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Stack = createStackNavigator();
