import Screen from '../layouts/Screen';
import { modules as initialModules } from '../../data/modules';
import ModuleList from '../entity/modules/ModuleList';

export default function App() {
  // Initialisations ---------------------
  const modules = initialModules;
  const handleSelect = (module) => {
    alert(`${module.name}`);
  };

  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
}