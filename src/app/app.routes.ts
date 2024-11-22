import { Routes } from '@angular/router';

import { ViewHomeComponent } from './components/view-home/view-home.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { ViewRegisterComponent } from './components/view-register/view-register.component';
import { ProductosComponent } from './components/productos/productos.component';
import { InfoMaquillajeComponent } from './components/detalle-producto/detalle-producto.component';

export const routes: Routes = [
    {path: "", component: ViewHomeComponent},
    {path: "login", component: ViewLoginComponent},
    {path: "register", component: ViewRegisterComponent},
    {path: "productos", component: ProductosComponent},
    {path: "detalle-producto/:id", component: InfoMaquillajeComponent}
];
