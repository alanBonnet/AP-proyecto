import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin-form',
  templateUrl: './singin-form.component.html',
  styleUrls: ['./singin-form.component.css']
})
export class SinginFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    (function () {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        forms.forEach(function (form) {
          form.addEventListener('submit', function (event):any {
            if (true) {
              event.preventDefault()
              event.stopPropagation()
              
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()
  }

}
