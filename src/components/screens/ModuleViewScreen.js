import { Alert } from 'react-native';
import Screen from '../layouts/Screen';
import ModuleView from '../entity/modules/ModuleView';

export default function ModuleViewScreen({ route }) {
  // Initialisations ---------------------
  const { module, onDelete } = route.params;

  // Handlers ----------------------------
  const requestDelete = () => Alert.alert(
    'Delete warning',
    `Are you sure you want to delete module ${module.ModuleCode} ${module.ModuleName}`,
    [{ text: 'Cancel' }, { text: 'Delete', onPress: handleDelete }],
  );

  const handleDelete = () => onDelete(module);

  // Return ------------------------------
  return (
    <Screen>
      <ModuleView module={module} onDelete={requestDelete} />
    </Screen>
  );
}