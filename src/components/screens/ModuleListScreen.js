import { LogBox } from 'react-native';
import Screen from '../layouts/Screen';
import ModuleList from '../entity/modules/ModuleList';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';

export default function ModuleListScreen({ navigation, modules, onAdd, onDelete, onModify }) {
  // Initialisations ---------------------
  LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);

  // Navigation Handlers -----------------
  const handleDelete = (module) => {
    onDelete(module);
    navigation.goBack();
  };

  const handleAdd = (module) => {
    onAdd(module);
    navigation.goBack();
  };

  const handleModify = (module) => {
    onModify(module);
    navigation.goBack();
  };

  // Handlers ----------------------------
  const gotoViewScreen = (module) =>
    navigation.navigate('ModuleViewScreen', { module, onDelete: handleDelete, onModify: handleModify });
  const gotoAddScreen = () => navigation.navigate('ModuleAddScreen', { onAdd: handleAdd });

  return (
    <Screen>
      <ButtonTray>
        <Button label='Add' icon={<Icons.Add />} onClick={gotoAddScreen} />
      </ButtonTray>
      <ModuleList modules={modules} onSelect={gotoViewScreen} />
    </Screen>
  );
}