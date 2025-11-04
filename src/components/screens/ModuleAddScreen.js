import { useState } from 'react';
import Screen from '../layouts/Screen';
import Icons from '../UI/Icons';
import { Button, ButtonTray } from '../UI/Button';
import { Form, FormItem } from '../UI/Form';

const defaultModule = {
  ModuleID: null,
  ModuleCode: null,
  ModuleName: null,
  ModuleLevel: null,
  ModuleLeaderID: null,
  ModuleLeaderName: null,
  ModuleImage: null,
};

export default function ModuleAddScreen({ navigation, route }) {
  // Initialisations ---------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage = 'https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg';

  const { onAdd } = route.params;

  // State -------------------------------
  const [module, setModule] = useState(defaultModule);

  // Handlers ----------------------------
  const handleChange = (field, value) => setModule({ ...module, [field]: value });
  const handleAdd = () => onAdd(module);
  const handleCancel = () => navigation.goBack();

  // View --------------------------------
  return (
    <Screen>
      <Form>
        <FormItem
          label='Module code'
          value={module.ModuleCode}
          onChangeText={(value) => handleChange('ModuleCode', value)}
        />
        <FormItem
          label='Module name'
          value={module.ModuleName}
          onChangeText={(value) => handleChange('ModuleName', value)}
        />
        <FormItem
          label='Module level'
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange('ModuleLevel', value)}
        />
        <FormItem
          label='Module leader'
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange('ModuleLeaderName', value)}
        />
        <FormItem
          label='Module image URL'
          value={module.ModuleImage}
          onChangeText={(value) => handleChange('ModuleImage', value)}
        />
      </Form>

      <ButtonTray>
        <Button label='Add' icon={<Icons.Add />} onClick={handleAdd} />
        <Button label='Cancel' icon={<Icons.Close />} onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
}
