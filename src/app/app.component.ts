import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycalculator';
  toshow='0';
  currentval=""
  writetoinput(value:string){
    if (this.currentval=='0')
    {
      this.currentval=value
    }else{
      this.currentval+=value
    }
    this.toshow=this.currentval
  }

  clear(){
    this.currentval=''
    this.toshow='0'
  }

  equals(){
    this.toshow=eval(this.currentval)
    this.currentval=this.toshow
  }

  back(){
     this.currentval=this.currentval.slice(0,-1)
     if (this.currentval==""){
      this.currentval='0'
     }
     this.toshow=this.currentval
  }

  calcval(solve:any){
    if(solve.charAt(0)=='0'){
      this.toshow= eval(solve.slice(1,))
    }
    else{
      this.toshow= eval(solve)
    }
    
  }
}
