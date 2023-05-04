import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodcategoryService {

    constructor(private readonly http: HttpClient) { }
    //categorias
    obtener_categoria() {
      return this.http.get('/api/category/Getcategory');
    }
  
    be_proyecto_listar() {
      return this.http.get('https://localhost:44309/api/proyecto/listar');
    }
  
    be_proyecto_obtener(params: string) {
      return this.http.get('https://localhost:44309/api/proyecto/obtener' + params);
    }


    //recomendado
    obteener_recomendados(){
      return this.http.get('/api/recomendados/GetRecomendados');
    }

    //maspedido
    obtener_maspedidos(){
      return this.http.get('/api/pedidos/GetMasPedidos');
    }
  }
