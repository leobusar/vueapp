import Home from '../pages/Home';
import Pets from '../pages/Pets'; 
import NotFound from '../pages/NotFound'; 
import Favorites from '../pages/Favorites';
import Form from '../pages/Form';

const routes = [
    {
        path: '/',
        component: Home, 
    }, 
    {
        path: '/pets', 
        component: Pets,
    },
    {
        path: '/favorites', 
        component: Favorites,
    },
    {
        path: '/form', 
        component: Form,
    },       
    {
        path: '**', 
        component: NotFound, 
    }
]

export default routes;