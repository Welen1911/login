import { createBottomTabNavigation } from "@react-navigation/bottom-tabs";
import { Second } from "../Second";
import { MapViewComponent } from "../MapView";
import { View } from "react-native";

const Tab = createBottomTabNavigation;

export const RoutesTab = () => {
    return (
        <View style={{
            flex: 1
        }}>
            <BtNavi />
        </View>
    )
}

const BtNavi = () => {
    return (

        <Tab.Navigator initialRouteName="mapView">
            <Tab.Screen name="mapView" component={MapViewComponent} />
            <Tab.Screen name="Principal" component={Second} />
        </Tab.Navigator>

    )
}
