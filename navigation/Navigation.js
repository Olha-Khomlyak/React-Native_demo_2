import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import PlantPage from '../screens/PlantPage';
import Charts from '../components/Charts'


const screens = {
    Home : {
        screen : PlantPage
    }, 
    PlantPage : {
        screen : PlantPage
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);