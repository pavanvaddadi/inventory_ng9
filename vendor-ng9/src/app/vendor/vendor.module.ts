import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorStateComponent } from './vendor-state.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [VendorStateComponent, HomeComponent, InventoryComponent, OrderDetailsComponent, ReportsComponent],
  imports: [
    CommonModule
  ]
})
export class VendorModule { }
