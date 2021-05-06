import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { CommonModule } from '@angular/common';

@NgModule({
    //parte invisible para el resto de la aplicacion
    declarations:[ 
        HeroeComponent,
        ListadoComponent
    ],
    //elementos visibles o publicas fuera de este modulo
    exports:[
        ListadoComponent
    ],
    //modulos 
    imports:[
       CommonModule 
    ]

})
export class HeroesModule{

}
