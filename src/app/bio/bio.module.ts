import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';

import { BioRoutingModule } from './bio-routing.module';

import { BioComponent } from './bio.component';
import { GSComponent} from './gs.component';
import { WTFComponent} from './wtf.component';
import { MastersComponent} from './masters.component';

@NgModule({
    declarations: [
        BioComponent,
        GSComponent,
        WTFComponent,
        MastersComponent
    ],
    imports: [
        BioRoutingModule,
        MaterialModule
    ]
})
export class BioModule{}