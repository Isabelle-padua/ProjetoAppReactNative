import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './pages/Home';
import Localizacao from './pages/Localizacao';
import Imagem from './pages/Imagem';
import CodigoBarras from './pages/CodigoBarras';
 
const AppStack = createStackNavigator();
 
const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{
    headerShown: false
  }}>
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Localizacao" component={Localizacao} />
                <AppStack.Screen name="Imagem" component={Imagem} />
                <AppStack.Screen name="CodigoBarras" component={CodigoBarras} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
 
export default Routes;