import Reactotron, { networking, openInEditor  } from 'reactotron-react-native';

  const tron = Reactotron.configure()
    .use(networking())
    .use(openInEditor()) 
    .connect();

  tron.clear();

  console.tron = tron;

