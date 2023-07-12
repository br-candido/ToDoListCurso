import { Component, DoCheck, OnInit} from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements DoCheck {

  ngDoCheck(): void {
    this.SetLocalStorage();
  }

  public setEmitTaskList(event:string) {
    this.taskList.push({Task:event, Checked: false})
  }

  public taskList: Array<TaskList> =JSON.parse(localStorage.getItem("list")||"[]");

  public DeleteTask(event:number):void{
    this.taskList.splice(event, 1);
  }

  public DeleteAll():void {
    const confirm = window.confirm("Are you sure you want to delete all tasks?")

    if(confirm){
    this.taskList=[];
    }
  }

  public ValidationInput(event:string, index:number):void{
    if (!event.length){
      const confirm = window.confirm("task está vazia deseja deletar?");

      if(confirm){
        this.DeleteTask(index)
      }
    }
  }

  public SetLocalStorage():void {
    this.taskList.sort((first, last) => Number(first.Checked)-Number(last.Checked))
    localStorage.setItem("list", JSON.stringify(this.taskList));
  }

}
