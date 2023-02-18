import { LoginComponent } from './security/login/login.component';

import { ItensUpdateComponent } from './components/itens/itens-update/itens-update.component';
import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ItensCreateComponent } from "./components/itens/itens-create/itens-create.component";

import { HomeComponent } from "./views/home/home.component";
import { ItensCrudComponent } from "./views/itens-crud/itens-crud.component";

const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {

    path: "",
    component: HomeComponent
  },
  {
    path: "Itens",
    component: ItensCrudComponent
  },
  {
    path: "itens/create",
    component: ItensCreateComponent
  },
  {
    path: "itens/update/:id",
    component: ItensUpdateComponent
  },
  {
    path:'*', redirectTo:'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
