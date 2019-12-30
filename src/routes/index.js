import Complex from '~/containers/Complex';
import Training from '~/containers/Training';
import Page404 from '~/containers/error404';

let routes = [
    {
        name: 'home',
        url: '/',
        component: Complex,
        exact: true
    },
    {
        name: 'Training',
        url: '/training',
        component: Training,
        exact: true
    },
    {
        url: '**',
        component: Page404
    }
];

let routesMap = {};

routes.forEach((route) => {
    if(route.hasOwnProperty('name')){
        routesMap[route.name] = route.url;
    }
});

let urlBuilder = function(name, params){
    if(!routesMap.hasOwnProperty(name)){
        return null;
    }

    let url = routesMap[name]; // news/:id

    for(let key in params){
        url = url.replace(':' + key, params[key]);
    }

    return url;
}

export default routes;
export {routesMap, urlBuilder};