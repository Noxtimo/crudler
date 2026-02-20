import { MaterialIcons } from '@expo/vector-icons';

const Icons = {
  Add: (props) => <MaterialIcons name="add" size={24} {...props} />,
  Delete: (props) => <MaterialIcons name="delete" size={24} {...props} />,
  Close: (props) => <MaterialIcons name="close" size={24} {...props} />,
};

export default Icons;
