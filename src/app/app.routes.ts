import { Routes } from '@angular/router';
import {RecettesParNomComponent} from "./recettes-par-nom/recettes-par-nom.component";
import {RecettesToutesComponent} from "./recettes-toutes/recettes-toutes.component";
import {RecettesRandomComponent} from "./recettes-random/recettes-random.component";
import {RecettesParIngredientComponent} from "./recettes-par-ingredient/recettes-par-ingredient.component";
import {RecettesNewComponent} from "./recettes-new/recettes-new.component";
import {ConnexionInscriptionComponent} from "./connexion-inscription/connexion-inscription.component";
import {RecettesDetailComponent} from "./recettes-detail/recettes-detail.component";

export const routes: Routes = [
    { path: "connexion-inscription", component: ConnexionInscriptionComponent},
    { path: "recettes-toutes", component: RecettesToutesComponent},
    { path: "recettes-par-nom", component: RecettesParNomComponent},
    { path: "recettes-par-ingredient", component: RecettesParIngredientComponent},
    { path: "recettes-random", component: RecettesRandomComponent},
    { path: 'recettes-detail/:id', component: RecettesDetailComponent},
    { path: "recettes-new", component: RecettesNewComponent},
    { path: '', redirectTo: 'route', pathMatch: 'full'}, // redirige vers l'url app les url vide
    { path: '**', component: RecettesToutesComponent} // redirige vers RouteComponent les url qui ne sont pas définis ici
];
