import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
    imports: [
        MatButtonModule,
        MatSliderModule,
        MatIconModule,
        MatBadgeModule
    ],
    exports: [
        MatButtonModule,
        MatSliderModule,
        MatIconModule,
        MatBadgeModule
    ]
})


export class MaterialModule {}
