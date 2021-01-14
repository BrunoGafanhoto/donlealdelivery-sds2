import React from 'react';
import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import Home from "./Home";
import Orders from "./Orders";
import OrdersDetails from './OrdersDetails';

import Upd from './Upd';

const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator
            headerMode="none"
             screenOptions={{
                 cardStyle: {
                     backgroundColor: '#fff'
                 }
            }}
             >
             
                 <Stack.Screen name="Home" component={Home}></Stack.Screen>
                 <Stack.Screen name="Orders" component={Orders}></Stack.Screen>
                 <Stack.Screen name="OrdersDetails" component={OrdersDetails}></Stack.Screen>
              
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default Routes;