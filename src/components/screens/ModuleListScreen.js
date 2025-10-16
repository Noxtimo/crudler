import { useState } from 'react';
import { LogBox } from 'react-native';
import Screen from '../layouts/Screen';
import { modules as initialModules } from '../../data/modules';
import ModuleList from '../entity/modules/ModuleList';

export default function ModuleListScreen({ navigation }) {
  // Initialisations ---------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const [modules, setModules] = useState(initialModules);

  // Navigation Handlers -----------------
  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  // Handlers ----------------------------
  const handleSelect = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete });

  const handleDelete = (module) => {
    const newModules = modules.filter((item) => item.id !== module.id);
    setModules(newModules);
    console.log(`After deleting ${module.name}, modules length is ${newModules.length}`);
  };

  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
}