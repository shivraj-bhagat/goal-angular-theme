import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HeaderComponent } from './baselayout/header/header.component';
import { FooterComponent } from './baselayout/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './baselayout/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        FormsModule,
        MatCardModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
