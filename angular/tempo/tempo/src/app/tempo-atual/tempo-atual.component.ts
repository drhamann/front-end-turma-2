import { Component } from '@angular/core';
import { ITempoAtual } from '../itempo-atual';
import { TempoService } from '../tempo/tempo.service';

@Component({
  selector: 'app-tempo-atual',
  templateUrl: './tempo-atual.component.html',
  styleUrls: ['./tempo-atual.component.css']
})
export class TempoAtualComponent {
  tempoAtual: ITempoAtual
  constructor(tempoService: TempoService) {

    this.tempoAtual = {
      cidade: 'Outra',
      pais: 'Brasil',
      date: '22/11/2022',
      descricao: 'Ensolarado',
      temperatura: 20,
      image: 'assets/img/ensolarado.svg'
    }
    tempoService.buscarTempoAtual("Florianopolis", "Brasil").subscribe(data => this.tempoAtual = data);
  }

}
