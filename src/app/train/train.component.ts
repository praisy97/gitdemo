import { Component, OnInit } from '@angular/core';
import { TrainService } from '../demo.service';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.css']
})
export class TrainComponent implements OnInit {
  data: any[] = []; 
  newRow: any = {}; 

  constructor(private s1: TrainService) { }

  ngOnInit() {
    this.loadTrainData();
  }
  
  loadTrainData() {
    this.s1.getAll().subscribe((data) => {
      this.data = data;
    });
  }
  insertdata(insertform:any)
  {
     return this.s1.insertdata1(insertform.value).subscribe(() => {
      this.loadTrainData();
    });
  }
 
  updateRow(train: any) {
    this.s1.update(train).subscribe(() => {
      this.loadTrainData(); 
    });
  }

  deleteRow(train: any) {
    this.s1.delete(train).subscribe(() => {
      this.loadTrainData(); 
    });
  }
}
