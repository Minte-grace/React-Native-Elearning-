import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home'
import Cources from '../screens/Cources'
import Xd from '../screens/Xd'
import VideoPage from '../screens/VideoPage'


const stackNavigatorOptions ={
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Home:{screen:Home},
    Cources:{screen:Cources},
    Xd:{screen:Xd},
    VideoPage:{screen:VideoPage}

},
{
    defaultNavigationOptions:stackNavigatorOptions
}
)
export default createAppContainer(AppNavigator);