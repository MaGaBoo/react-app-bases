
import { lazy, LazyExoticComponent } from 'react'
import NoLazy from '../01-lazyLoads/views/NoLazy';

type JSXComponent = () => JSX.Element
interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<() => JSX.Element> | JSXComponent;
    name: string
}


const LazyLayout = lazy(() => import(/* webpackChunkName: 'LazyPage1 */'../01-lazyLoads/layout/LazyLayout'))

export const routes: Route[] = [
    {
        path: '/lazyload/*', // el * indica que todas las rutas que pasan por aquí se procesan con lazyload
        to: '/lazyload/', 
        Component: LazyLayout,
        name: 'LazyLayout - Dashboard'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]