import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: MenuComponent }
    ])],
    exports: [RouterModule]
})
export class DocumentationRoutingModule { }
