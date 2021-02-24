import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: 'Why is the Sky is blue',
      content: 'bc it is',
    },
    {
      title: 'What does an orange taste like',
      content: 'it tastes like an orange',
    },
    {
      title: 'What color is the cat',
      content: 'the cat is orange',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
