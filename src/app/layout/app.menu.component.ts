import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { ApiService} from '../demo/api/Security/api.service.menu'

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];
    constructor(public layoutService: LayoutService, private apiService:ApiService) {}
    
    ngOnInit() {

        this.listMenu();
        this.model
        
        // [
        //     {
        //         label:'Agorro',
        //         items:
        //     }
        // ]

        // [
            
        //     {
        //         label: 'Agorro',
        //         items: [
        //             {
        //                 label: 'Autenticación de Usuarios', icon: 'pi pi-fw pi-user',
        //                 items: [
        //                     {
        //                         label: 'Registro de Usuarios', 
        //                         icon: 'pi pi-fw pi-user-plus',
        //                         routerLink: ['/uikit/formlayout'],
        //                     },
        //                     {
        //                         label: 'Perfil de Usuario', 
        //                         icon: 'pi pi-fw pi-bookmark', 
        //                         routerLink: ['/uikit/input'],
        //                     },
        //                 ]
        //             },
        //             {
        //                 label: 'Gastos', 
        //                 icon: 'pi pi-fw pi-bookmark',
        //                 items: [
        //                     {
        //                         label: 'Registro de Gastos', 
        //                         icon: 'pi pi-fw pi-bookmark',
        //                     },
        //                     {
        //                         label: 'Listado de Gastos', 
        //                         icon:  'pi pi-fw pi-bookmark',
        //                     },
        //                     {
        //                         label: 'Edición de Gastos', 
        //                         icon: 'pi pi-fw pi-bookmark', 
        //                     },
        //                     {
        //                         label: 'Categorización de Gastos', 
        //                         icon: 'pi pi-fw pi-bookmark',
        //                     },
        //                 ]
        //             }
        //         ]
        //     },
          
        // ];
    }

    listMenu(){
        this.apiService.enviarDatos(1).subscribe(response=>{
            this.model=[
                {
                    label:'Agorro',
                    items:response
                }
            ]
            console.log(this.model)
        })
        
    }

}
