import { useState } from 'react';
import Screen from '../layouts/Screen';
import { modules as initialModules } from '../../data/modules';
import ModuleList from '../entity/modules/ModuleList';

export default function App() {
  // Initialisations ---------------------
  const [modules, setModules] = useState(initialModules);

  // Handlers ----------------------------
  const handleDelete = (module) => {
    const newModules = modules.filter((item) => item.id !== module.id);
    setModules(newModules);
    console.log(`After deleting ${module.name}, modules length is ${newModules.length}`);
  };

  return (
    <Screen>
      <ModuleList modules={modules} onSelect={handleDelete} />
    </Screen>
  );
}