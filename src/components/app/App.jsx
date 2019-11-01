import React from 'react';

import Main from '../main/Main';
import {films} from '../../mocks/films';

export const App = () => {
  return <Main films={films} />;
};

export default App;
