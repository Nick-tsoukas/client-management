import { NgModule } from '@angular/core';
import { MatButtonModule, MatFormFieldModule, MatInputModule, MatCheckboxModule  } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule
    ],
    exports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatCheckboxModule
    ]
})
export class MaterialModule {

}
