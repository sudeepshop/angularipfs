import { NgModule } from '@angular/core';
import { MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule
 } from '@angular/material';

@NgModule({
    imports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatToolbarModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})

export class SharedModule {}