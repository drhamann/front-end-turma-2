import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TempoAtualComponent } from './tempo-atual/tempo-atual.component';
import { BuscaCidadeComponent } from './busca-cidade/busca-cidade.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: TempoAtualComponent },
  { path: 'tempo', component: TempoAtualComponent },
  { path: 'busca', component: BuscaCidadeComponent },
  { path: 'poluicao', loadChildren: () => import('./modulos/poluicao/poluicao.module').then(m => m.PoluicaoModule) },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {


}
