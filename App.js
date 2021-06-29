import React from 'react'

import Root from './Root'
import store,{ persistor } from './store/store'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'

export default App = () =>{
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root/>
    </PersistGate>
    </Provider>
  )
}