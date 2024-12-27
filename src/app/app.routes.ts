import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"", component:HomeComponent},
    {path:"characters", component:CharactersComponent},
    {path:"contact", component:ContactComponent},
];

@NgModule(
    {
        imports:[RouterModule.forRoot(routes)],
        exports:[RouterModule]
    }
)

export class AppRoutesModule{}
