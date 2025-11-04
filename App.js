import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModuleListScreen from './src/components/screens/ModuleListScreen';
import ModuleAddScreen from './src/components/screens/ModuleAddScreen';
import ModuleViewScreen from './src/components/screens/ModuleViewScreen';
import ModuleModifyScreen from './src/components/screens/ModuleModifyScreen';
import { api } from './src/api/api';
import { useLoad } from './src/hooks/useLoad';
import { storage } from './src/utils/storage';

const Stack = createNativeStackNavigator();
const MODULES_KEY = 'modules';

export const App = () => {
  // Initialisations ---------------------
  const { loading, data: modules, setData: setModules, loadData: reloadModules } = useLoad(async () => {
    const storedModules = await storage.get(MODULES_KEY);
    return storedModules || api.get();
  });

  // Handlers ----------------------------
  const handleAdd = async (module) => {
    const newModule = await api.post(module);
    const newModules = [...modules, newModule];
    setModules(newModules);
    await storage.store(MODULES_KEY, newModules);
  };
  const handleDelete = async (module) => {
    await api.delete(module.ModuleID);
    const newModules = modules.filter((item) => item.ModuleID !== module.ModuleID);
    setModules(newModules);
    await storage.store(MODULES_KEY, newModules);
  };
  const handleModify = async (module) => {
    const modifiedModule = await api.put(module);
    const newModules = modules.map((item) => (item.ModuleID === modifiedModule.ModuleID ? modifiedModule : item));
    setModules(newModules);
    await storage.store(MODULES_KEY, newModules);
  };

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
