import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Injectable()
export class MoodleService {
  private urlBase:string;
  private token:string;
  constructor(private http:HttpClient) {
    this.urlBase = "http://localhost:8081/moodle34/";
    this.token = "434354f3acac80e687892e42efd68742";
  }


  /**
   * Generación de token para comunicación con web service
   */
  public getToken(){
    let urlToken:string = "login/token.php?service=Pruebas&username=wsuser&password=Moodle-123456"; 
    let urlRequest = this.urlBase + urlToken;
    
    this.http.get(urlRequest)
      .subscribe((data:any) => {
        
        return data.token;
      });
  }
  /****************************************************** */


  /****************************************************** */
  /**
   * List all courses
   */
  public getCoursesList(idcourse:string=''){
    let urlRequest = `${this.urlBase}webservice/rest/server.php?wstoken=${this.token}&wsfunction=core_course_get_courses&moodlewsrestformat=json&options[ids][0]=${idcourse}`;
    return this.http.get(urlRequest);
  }

  /**
   * List user courses
   */
  public getUserCoursesList(idUser:number){

    let urlRequest = `${this.urlBase}webservice/rest/server.php?wstoken=${this.token}&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=${idUser}`;
    return this.http.get(urlRequest);
  }

  /**
   * Get contents courses: topic, resources, etc.
   */
  public getContentCourse(idCourse:string){
    let urlRequest = `${this.urlBase}webservice/rest/server.php?wstoken=${this.token}&wsfunction=core_course_get_contents&moodlewsrestformat=json&courseid=${idCourse}`;
    return this.http.get(urlRequest);
  }
  /****************************************************** */


  /****************************************************** */
  /**
   * List users. parameters: id, lastname, firstname, idnumber, username, email, auth

   */
  public getUsers(key:string = '', value:string = ''){
    let urlRequest = `${this.urlBase}webservice/rest/server.php?wstoken=${this.token}&wsfunction=core_user_get_users&moodlewsrestformat=json&criteria[0][key]=${key}&criteria[0][value]=${value}`;
    return this.http.get(urlRequest);
     
  }
  /****************************************************** */

  
  /****************************************************** */
  /**
   * Get calendar event
   */
  public getCalendarEvent(idCourse:number){
    let urlRequest = `${this.urlBase}webservice/rest/server.php?wstoken=${this.token}&wsfunction=core_calendar_get_calendar_events&moodlewsrestformat=json&events[courseids][0]=${idCourse}`;
    return this.http.get(urlRequest);
  }
  /****************************************************** */



  /****************************************************** */
  /**
   * Get calendar event
   */
  public getFile(idCourse:number){
    let urlRequest = `${this.urlBase}webservice/rest/server.php?wstoken=${this.token}&wsfunction=core_calendar_get_calendar_events&moodlewsrestformat=json&events[courseids][0]=${idCourse}`;
    return this.http.get(urlRequest);
  }
}
