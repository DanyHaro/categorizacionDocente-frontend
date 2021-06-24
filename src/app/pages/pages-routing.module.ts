import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GradosComponent } from "./formacion-academica/grados/grados.component";

const routes: Routes = [
    {path:'grados',component:GradosComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}