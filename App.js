import React from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import LoginPage from './components/LogIn';
import SingUpPage from './components/signUp';
import AddDvicePage from './components/AddDevice';
import HomePage from './components/HomePage';

export default class App extends React.Component {
    render() {
        return (<AppContainer />)
    }
}

const AppNavigator = createStackNavigator({
    LogIn: { screen: LoginPage },
    SingUp: { screen: SingUpPage },
    AddDevice: { screen: AddDvicePage },
    Home: { screen: HomePage },
}, { gesturesEnabled: false });
const AppContainer = createAppContainer(AppNavigator);

/*
const MyApp = DrawerNavigation({
    Login: {screen : LoginPage},
    SingIn: {screen:SingUpPage}
})

class App extends Component{
  render(){
    return(
      <MyApp/>
    );
  }
}
export default App;
*/