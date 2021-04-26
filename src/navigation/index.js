import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/homeScreen";
import LegalDocumentsScreen from "../screens/legalDocumentsScreen";
import GeneralInformationScreen from "../screens/generalInformationScreen";
import AgendaScreen from "../screens/agendaScreen";
import MapScreen from "../screens/mapScreen";

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="LegalDocumentsScreen"
          component={LegalDocumentsScreen}
        />
        <Stack.Screen
          name="GeneralsInfosScreen"
          component={GeneralInformationScreen}
        />
        <Stack.Screen name="AgendaScreen" component={AgendaScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
