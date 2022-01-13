import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  objects = [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" },
              { "id": "1003", "type": "Blueberry" },
              { "id": "1004", "type": "Devil's Food" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Raised",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0003",
      "type": "donut",
      "name": "Old Fashioned",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    }
  ];

  copyObjects = [
    {
      "id": "0001",
      "type": "donut",
      "name": "Cake",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" },
              { "id": "1003", "type": "Blueberry" },
              { "id": "1004", "type": "Devil's Food" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5007", "type": "Powdered Sugar" },
          { "id": "5006", "type": "Chocolate with Sprinkles" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0002",
      "type": "donut",
      "name": "Raised",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5005", "type": "Sugar" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    },
    {
      "id": "0003",
      "type": "donut",
      "name": "Old Fashioned",
      "ppu": 0.55,
      "batters":
        {
          "batter":
            [
              { "id": "1001", "type": "Regular" },
              { "id": "1002", "type": "Chocolate" }
            ]
        },
      "topping":
        [
          { "id": "5001", "type": "None" },
          { "id": "5002", "type": "Glazed" },
          { "id": "5003", "type": "Chocolate" },
          { "id": "5004", "type": "Maple" }
        ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  updateList(){
    this.objects = this.copyObjects;
  }

  buscar(ev: any){
    this.updateList()
    const val = ev.target.value.toLowerCase();
    if (val && val.trim() != '') {

      this.objects = this.copyObjects.filter((item) => {


        for(let v in item){


          if(item[v]){


            let ja = item[v];

            if(typeof ja === 'object'){

              for(let c in ja){


                if(ja[c]){


                  if(ja[c].toString().toLowerCase().includes(val)){
                    return true;
                  }
                }
                
              }
              
            }else{
              if(item[v].toString().toLowerCase().includes(val)){
                return true;
              }
            }
            
          }
        }
      })
    }
  }
}
