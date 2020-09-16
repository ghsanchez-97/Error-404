import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-nopage',
  templateUrl: './nopage.component.html',
  styleUrls: ['./nopage.component.css']
})
export class NopageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
