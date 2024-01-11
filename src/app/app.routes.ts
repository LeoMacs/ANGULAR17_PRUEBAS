import { Routes } from '@angular/router';
import { CanalComponent } from './canal/canal.component';
import { ListCanalesComponent } from './post/list-canales/list-canales.component';
import { CreateCanalComponent } from './post/create-canal/create-canal.component';
import { EditCanalComponent } from './post/edit-canal/edit-canal.component';
import { ViewCanalComponent } from './post/view-canal/view-canal.component';

export const routes: Routes = [
    {path:'post',redirectTo:'post/listCanales',  pathMatch:'full'},
    {path:'post/listCanales',component:ListCanalesComponent},
    {path:'post/:idCanal/viewCanal',component:ViewCanalComponent},
    {path:'post/createCanal',component:CreateCanalComponent},
    {path:'post/:idCanal/edit-canal',component:EditCanalComponent},
];
