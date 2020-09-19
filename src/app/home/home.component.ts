import { projects } from '../datafile';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private projects = projects;

  constructor() { }

  ngOnInit() {
    // Remove all scripts loaded by this module

  }
}
