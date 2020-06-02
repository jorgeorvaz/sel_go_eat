import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children:[
      {
        path: 'home',
        children:[{
          path:'',
          loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
        }]
         
      },
      {
        path: 'perfil',
        children:[{
          path:'',
          loadChildren: () => import('../perfil/perfil.module').then( m => m.PerfilPageModule)
        }]
      },
      {
        path: 'contacto',
        children:[{
          path:'',
          loadChildren: () => import('../contacto/contacto.module').then( m => m.ContactoPageModule)
        }]
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioPageRoutingModule {}
