import Screen from '../layouts/Screen';
import ModuleView from '../entity/modules/ModuleView';

export default function ModuleViewScreen({ route }) {
  // Initialisations ---------------------
  const { module } = route.params;

  // Return ------------------------------
  return (
    <Screen>
      <ModuleView module={module} />
    </Screen>
  );
}