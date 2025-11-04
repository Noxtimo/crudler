import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import { modules as initialModules } from './src/data/modules';

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations ---------------------
  // State -------------------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers ----------------------------
  const handleAdd = (module) => setModules([...modules, module]);
  const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  const handleModify = (module) => setModules(modules.map((item) => (item.ModuleID === module.ModuleID ? module : item)));

  // View --------------------------------
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='ModuleListScreen'
        screenOptions={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: '#fff',
          headerTitleStyle: { color: '#fff' },
        }}
      >
        <Stack.Screen name='ModuleListScreen' options={{ title: 'List modules' }}>
          {(props) => (
            <ModuleListScreen
              {...props}
              modules={modules}
              onAdd={handleAdd}
              onDelete={handleDelete}
              onModify={handleModify}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name='ModuleAddScreen' component={ModuleAddScreen} options={{ title: 'Add module' }} />
        <Stack.Screen name='ModuleViewScreen' component={ModuleViewScreen} options={{ title: 'View module' }} />
        <Stack.Screen name='ModuleModifyScreen' component={ModuleModifyScreen} options={{ title: 'Modify module' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
