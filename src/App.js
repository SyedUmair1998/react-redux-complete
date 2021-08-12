import React from 'react'
import HomeContainer from './containers/HomeContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Services/Reducers/index';
const store = createStore(rootReducer);
console.log('App ==> ',store);
const App = () => {
  return (
    <Provider store = {store}>
      <HomeContainer />
      </Provider>
  )
}
export default App;