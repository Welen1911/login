import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { First } from "./pages/First"
import { Second } from "./pages/Second"
import { MapView } from "./pages/MapView"

export const Route = () => {
    const stack = createStackNavigator()
    return (
        <NavigationContainer>
            <stack.Navigator initialRouteName="Login">
                <stack.Screen name="Login" component={First} />
                <stack.Screen name="Principal" component={Second} />
                <stack.Screen name="mapView" component={MapView} />
            </stack.Navigator>
        </NavigationContainer>
    )
}