import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ShellModule } from '../shell/shell.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    ShellModule,
    SharedModule,
  ]
})
export class ModulesModule { }
