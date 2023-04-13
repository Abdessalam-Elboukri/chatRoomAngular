import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ConversationThreadService{

  private readonly baseUrl=environment.baseUrl+"/thread"
  constructor(private http:HttpClient) {
  }

  getAllMyConversation(email:string):Observable<any>{
    return this.http.get(`${this.baseUrl}/get-my-threads/${email}`)
  }

  getOneThread(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/get-thread/${id}`)
  }

}
