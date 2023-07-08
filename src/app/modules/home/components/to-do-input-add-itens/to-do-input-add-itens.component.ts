import { Component, EventEmitter, Output } from '@angular/core';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-to-do-input-add-itens',
  templateUrl: './to-do-input-add-itens.component.html',
  styleUrls: ['./to-do-input-add-itens.component.scss']
})
export class ToDoInputAddItensComponent {
  @Output() public EmitItemTaskList = new EventEmitter();

  public AddItemTaskList:string = "";

  public SubmitItemTaskList(){
    this.AddItemTaskList = this.AddItemTaskList.trim()
    if(this.AddItemTaskList){
      this.EmitItemTaskList.emit(this.AddItemTaskList);
      this.AddItemTaskList="";
    }
  }
}
