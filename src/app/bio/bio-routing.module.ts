import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BioComponent } from './bio.component';
import { GSComponent} from './gs.component';
import { WTFComponent} from './wtf.component';
import { MastersComponent} from './masters.component';

const BioRoutes: Routes = [
    {
        path: 'bio',
        component: BioComponent,
        children: [
            {
                path: 'gs',
                component: GSComponent
            },
            {
                path: 'wtf',
                component: WTFComponent
            },
            {
                path: 'masters',
                component: MastersComponent
            },
            {
                path: '',
                component: GSComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(BioRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class BioRoutingModule{}
