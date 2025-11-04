import { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import { api } from './src/api/api';

const Stack = createNativeStackNavigator();

export const App = () => {
  // Initialisations ---------------------
  const [loading, setLoading] = useState(true);

  // State -------------------------------
  const [modules, setModules] = useState([]);

  // Handlers ----------------------------
  const handleAdd = (module) => setModules([...modules, module]);
  const handleDelete = (module) => setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  const handleModify = (module) => setModules(modules.map((item) => (item.ModuleID === module.ModuleID ? module : item)));

  // Effects -----------------------------
  useEffect(() => {
    const fetchModules = async () => {
      const data = await api.get();
      setModules(data);
      setLoading(false);
    };
    fetchModules();
  }, []);

  // View --------------------------------
  return (
    <NavigationContainer>
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      ) : (
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
      )}
    </NavigationContainer>
  );
};

export default App;
