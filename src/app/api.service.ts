import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ISupermarket } from './supermarket';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  querys = [];

  server = 'https://supermarketcrud.herokuapp.com';

  listaSupermarkets(): Observable<any[]> {
    return this.http.get<any[]>(this.server + '/lista-supermarkets');
  }

  saveSupermarket(supermarket): Observable<ISupermarket>  {
    return this.http.post<ISupermarket>(this.server + '/api/supermarkets', supermarket);
  }

  editarSupermarket(supermarket): any {
    return this.http.post<ISupermarket[]>(this.server + '/update/supermarket', supermarket);
  }

  deleteSupermarket(superMercado: ISupermarket): any {
    return this.http.delete<any>(this.server + '/api/supermarkets/' + superMercado._id);
  }

  /*getQuerys(): Observable<IQuery[]> {
    return this.http.get<IQuery[]>(this.server + '/querys');
  }

  getQueryById(id): Observable<IQuery> {
    return this.http.get<IQuery>(this.server + '/query-por-id/' + id);
  }

  savarQuery(query): Observable<IQuery> {
    return this.http.post<IQuery>(this.server + '/cadastro-query', query);
  }

  deleteQuery(id): Observable<IQuery> {
    return this.http.delete<IQuery>(this.server + '/delete-query/' + id);
  }*/

  execQuery(query) {
    return this.http.post(this.server + '/exec', query);
  }

  /*listaErrors(): Observable<IErro[]> {
    return this.http.get<IErro[]>(this.server + '/lista-erro');
  }

  salvarError(erro): any {
    return this.http.post<IErro[]>(this.server + '/incluir-erro/', erro);
  }

  editarError(erro): any {
    return this.http.put<IErro[]>(this.server + '/editar-erro/', erro);
  }

  deleteErro(id: number): any {
    return this.http.delete<any>(this.server + '/delete-erro/' + id);
  }

  reset(id: number): Observable<any> {
    return this.http.put<any>(this.server + '/reset', id);
  }

  listaCtrlPropostas(): Observable<IProposta[]> {
    return this.http.get<IProposta[]>(this.server + '/query-ctrl-propostas');
  }

  salvarProposta(propostas): any {
    return this.http.post<IProposta>(this.server + '/incluir-proposta-ctrl/', propostas);
  }

  editarProposta(proposta): any {
    return this.http.post<IProposta>(this.server + '/update-ctrl-propostas', proposta);
  }*/

  deleteProposta(id: number): any {
    return this.http.delete<any>(this.server + '/delete-proposta-ctrl/' + id);
  }

  sendEmail(propostas): any {
    return this.http.delete<any>(this.server + '/send-email/' + propostas);
  }

  consultaStspro(): any {
    return this.http.get<any>(this.server + '/consulta-stspro');
  }

  consultaEmsDoc(documento: number): any {
    return this.http.get<any>(this.server + '/consulta-ems-doc/' + documento);
  }

  consultaEmsDocNumSeq(docnumseq: Object): any {
    return this.http.post<any>(this.server + '/consulta-ems-doc-numseq', docnumseq);
  }

  consultaEvtMovRte(id_doc: number): any {
    return this.http.get<any>(this.server + '/consulta-evt-mov-rte/' + id_doc);
  }

  consulta_cotacao(id_doc: string): any {
    return this.http.get<any>(this.server + '/consulta-n-cotacao/' + id_doc);
  }

  verifica_cotacao_nash(id_doc: number): any {
    return this.http.get<any>(this.server + '/verifica-cotacao-nash/' + id_doc);
  }

  inseriCotacaoNash(propostas): any {
    return this.http.post<any>(this.server + '/incluir-cotacao-nash/', propostas);
  }
}
