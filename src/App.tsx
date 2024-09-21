import React from 'react';
import AppNavigation from './navigation/appNavigation';
import {RootSiblingParent} from 'react-native-root-siblings';

function App(): React.JSX.Element {
  return (
    <RootSiblingParent>
      <AppNavigation />
    </RootSiblingParent>
  );
}

export default App;
