import { Alert } from 'react-native';
import Screen from '../layouts/Screen';
import ModuleView from '../entity/modules/ModuleView';

export default function ModuleViewScreen({ navigation, route }) {
  // Initialisations ---------------------
  const { module, onDelete, onModify } = route.params;

  // Handlers ----------------------------
  const requestDelete = () =>
    Alert.alert('Delete warning', `Are you sure you want to delete module ${module.ModuleCode} ${module.ModuleName}`, [
      { text: 'Cancel' },
      { text: 'Delete', onPress: () => onDelete(module) },
    ]);

  const gotoModifyScreen = () => navigation.navigate('ModuleModifyScreen', { module, onModify });

  // Return ------------------------------
  return <Screen>
    <ModuleView module={module} onDelete={requestDelete} onModify={gotoModifyScreen} />
  </Screen>;
}