export class Tarefa {
  constructor(nomeTarefaVal: string, completaVal: boolean = false) {
    this.nomeTarefa = nomeTarefaVal;
    this.completo = completaVal;
  }
  nomeTarefa: string;
  completo: boolean;
}

export class TarefasLista {
  constructor(public usuario: string, private listaTarefas: Tarefa[] = []) {
  }
  get tarefas(): readonly Tarefa[] {
    return this.listaTarefas;
  }
  addTarefa(nomeTarefa: string) {
    this.listaTarefas.push(new Tarefa(nomeTarefa));
  }
}
