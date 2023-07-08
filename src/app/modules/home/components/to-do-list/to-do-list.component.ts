import { Component, OnInit} from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {


  public setEmitTaskList(event:string) {
    this.taskList.push({Task:event, Checked: false})
  }

  public taskList: Array<TaskList> =[];

  public DeleteTask(event:number):void{
    this.taskList.splice(event, 1);
  }

  public DeleteAll() {
    const confirm = window.confirm("Are you sure you want to delete all tasks?")

    if(confirm){
    this.taskList=[];
    }
  }

}
