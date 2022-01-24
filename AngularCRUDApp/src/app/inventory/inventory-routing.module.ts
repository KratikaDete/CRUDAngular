import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
const routes: Routes = [
  { path: '', redirectTo: 'inventory/home', pathMatch: 'full'},
  { path: 'inventory', redirectTo: 'inventory/home', pathMatch: 'full'},
  { path: 'inventory/home', component: HomeComponent },
  { path: 'inventory/:inventoryId/view', component: ViewComponent },
  { path: 'inventory/create', component: CreateComponent },
  { path: 'inventory/:inventoryId/edit', component: EditComponent } 
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }