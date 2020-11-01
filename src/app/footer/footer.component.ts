import { Component, OnInit } from '@angular/core';

import jQuery from '../../assets/js/bootstrap/bootstrap.min.js';
import '../../assets/js/active.js';

declare  var jQuery:  any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    jQuery.getScript('../../assets/js/active.js')
  }

}


