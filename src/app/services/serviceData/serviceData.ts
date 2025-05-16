import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceData {
  // urlAPI: string = "https://localhost:7292/api/";
  urlAPI: string = 'https://coreseccallao.somee.com/api/';

  urlAPIDNI = `https://api.apis.net.pe/v2/reniec/dni?numero=`;
  tokenConsDNI = 'apis-token-5900.yWdOuFOjkDEUSAO-YaR1IUQTnluDyGjf';

  constructor(private http: HttpClient) {}

  public _API_GET_REQUEST(
    _apiController: any,
    _apiAction: any,
    _param: any
  ): Observable<any[]> {
    let url = this.urlAPI + _apiController + '/' + _apiAction;
    return this.http.get(url, { params: _param }) as Observable<any[]>;
  }

  public _API_POST_REQUEST_JSON(
    _apiController: any,
    _apiAction: any,
    _param: any
  ): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = {
      headers,
    };
    let url = this.urlAPI + _apiController + '/' + _apiAction;
    return this.http.post<any[]>(url, _param, options);
  }

  public _API_GET_REQUEST_DNI(_param: any) {
    debugger;
    const headers = new HttpHeaders({
      Authorization: 'Bearer apis-token-5900.yWdOuFOjkDEUSAO-YaR1IUQTnluDyGjf',
    });
    const options = {
      headers,
    };
    let url = `${this.urlAPIDNI}${_param}`;
    return this.http.get(url, options);
  }

  uploadFiles(formData: FormData, _apiController: any, _apiAction: any) {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({}),
    };
    let url = this.urlAPI + _apiController + '/' + _apiAction;
    return this.http.post<any[]>(url, formData, httpOptions);
  }

  public _API_GET_REQUEST_FILE(
    _apiController: any,
    _apiAction: any,
    _param: any
  ) {
    debugger;
    var url = this.urlAPI + _apiController + '/' + _apiAction;
    // return this.http.get(url,{params: _param}) as Observable<any[]>
    return this.http.get(url, { params: _param, responseType: 'blob' }); // Importante para manejar archivos binarios });
  }

  public _API_POST_REQUEST_JSON_FILES(
    _apiController: any,
    _apiAction: any,
    _param: any,
    options: any = {}
  ): any {
    let url = this.urlAPI + _apiController + '/' + _apiAction;
    return this.http.post<any[]>(url, _param, {
      ...options,
      responseType: options.responseType || 'json',
    });
  }
}
