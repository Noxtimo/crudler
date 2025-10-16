import { useState } from 'react';
import { LogBox } from 'react-native';
import Screen from '../layouts/Screen';
import { modules as initialModules } from '../../data/modules';
import ModuleList from '../entity/modules/ModuleList';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';

export default function ModuleListScreen({ navigation }) {
  // Initialisations ---------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
  const [modules, setModules] = useState(initialModules);

  // Navigation Handlers -----------------
  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  // Handlers ----------------------------
  const handleAdd = (module) => setModules([...modules, module]);

  const gotoViewScreen = (module) => navigation.navigate('ModuleViewScreen', { module, onDelete });

  const handleDelete = (module) => {
    const newModules = modules.filter((item) => item.id !== module.id);
    setModules(newModules);
    console.log(`After deleting ${module.name}, modules length is ${newModules.length}`);
  };

  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd });

  return (
    <Screen>
      <ButtonTray>
        <Button label='Add' icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
}