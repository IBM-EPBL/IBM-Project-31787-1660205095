import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  constructor(private http:HttpClient) { }

Age:number=0;
Sex:string="";
Chest_pain_type:string="";
BP:number=0;
Cholesterol:number=0;
FBS_over_120:number=0;
EKG_results:string="";
Max_HR:number=0;
Exercise_angina:string="";
ST_depression:number=0;
Slope_of_ST:number=0;
Number_of_vessels_fluro:string="";
Thallium:number=0;
message:any="";

onSelect_Sex(value:string){
    this.Sex=value;
}

onSelect_CP(value:string){
  this.Chest_pain_type=value;
}

onSelect_EKG(value:string){
  this.EKG_results=value;
}

onSelect_EA(value:string){
  this.Exercise_angina=value;
}

onSelect_NVF(value:string){
  this.Number_of_vessels_fluro=value;
}


Input:boolean=false;
Presence:boolean=true;
Absence:boolean=true;

Predict(){
  console.log(this.Age,this.Sex,this.Chest_pain_type,this.BP,this.Cholesterol,this.FBS_over_120,this.EKG_results,this.Max_HR,this.Exercise_angina,this.ST_depression,this.Slope_of_ST,this.Thallium);
  this.http.post('http://127.0.0.1:5000/predict',{'Age':this.Age,'Sex':this.Sex,'Chest_pain_type':this.Chest_pain_type,'BP':this.BP,'Cholesterol':this.Cholesterol,'FBS_over_120':this.FBS_over_120,'EKG_results':this.EKG_results,'Max_HR':this.Max_HR,'Exercise_angina':this.Exercise_angina,'ST_depression':this.ST_depression,'Slope_of_ST':this.Slope_of_ST,'Number_of_vessels_fluro':this.Number_of_vessels_fluro, 'Thallium':this.Thallium}).subscribe((response:any)=>{
        this.message=response.resp
        console.log(this.message)
        if(this.message=='Presence'){
          this.Input=true;
          this.Presence=false;
          this.Absence=true;
        }
        else if(this.message=='Absence'){
          this.Input=true;
          this.Presence=true;
          this.Absence=false;
        }
  })
}




ngOnInit(): void {
}

}
