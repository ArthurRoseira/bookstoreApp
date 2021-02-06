
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';


const MaterialComponents = [
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule
]

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }
