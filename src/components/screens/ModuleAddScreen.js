import Screen from '../layouts/Screen';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleCode: 'CI6330',
  ModuleName: 'Mobile Application Development',
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: 'Graeme JONES',
  ModuleImage: 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg',
};

export default function ModuleAddScreen({ navigation, route }) {
  // Initialisations ---------------------
  const { onAdd } = route.params;

  // Handlers ----------------------------
  const handleAdd = () => onAdd(defaultModule);

  const handleCancel = () => navigation.goBack();

  // View --------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button label='Add' icon={<Icons.Add />} onClick={handleAdd} />
        <Button label='Cancel' icon={<Icons.Close />} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
}
 
