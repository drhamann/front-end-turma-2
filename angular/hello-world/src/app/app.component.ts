import { Component } from '@angular/core';
import { Tarefa, TarefasLista } from './model/tarefa-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lista = new TarefasLista("Senac", [
    new Tarefa("Estudar HTML"),
    new Tarefa("Estudar CSS"),
    new Tarefa("Estudar JAVASCRIPT"),
  ]);

  showComplete: boolean = false;

  get username(): string {
    return this.lista.usuario;
  }
  get itemCount(): number {
    let listaIncompleta = this.lista.tarefas.filter(item => {
      return this.showComplete || item.completo === false;
    });

    return listaIncompleta.length;
  }

  addTarefa(nomeTarefa: string) {
    this.lista.addTarefa(nomeTarefa);
  }

}



