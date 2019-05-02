import Reactotron, { networking, openInEditor  } from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.17.10.162' })
    .use(reactotronRedux())
    .use(sagaPlugin())
    .use(networking())
    .use(openInEditor()) 
    .connect();

  tron.clear();

  console.tron = tron;
}
