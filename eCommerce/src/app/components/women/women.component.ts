import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css'],
})
export class WomenComponent implements OnInit {
  public ImageInfo = {};	
  public SareeObject=[{
  	imgageOne:'assets/imageOne.jpg',
  	description: "Printed Women's Saree/Sari With Tassel",
  	price:"Rs.4000",
  	category:"printed",
  	id:1,
  	moreinfo:"Bhagal Puri Silk Blouse Fabric:-Bhagal Puri Silk"
    },      
            
	{
	  	imgageOne:'assets/imageTwo.jpg',
	  	description: "Silk Women's Saree/Sari With Tassel",
	  	price:"Rs.3000",
	  	category:"silk",
	  	id:2,
	  	moreinfo: "Saree Colour:- Multi Colour Blouse Colour:- Multi Colour"
	},
	{
	  	imgageOne:'assets/imageThree.jpg',
	  	description: "Designer Women's Saree/Sari With Tassel",
	  	price:"Rs.4000",
	  	category:"printed",
	  	id:3,
	  	moreinfo:"Saree Fabric:-Bhagal Puri Silk Blouse Fabric:-Bhagal Puri Silk"

	},
	{
	  	imgageOne:'assets/imageFour.jpg',
	  	description: "Banaras Women's Saree/Sari With Tassel",
	  	price:"Rs.5000",
	  	category:"silk",
	  	id:4,
	  	moreinfo:"Saree type:-Bhagal Puri Silk Blouse Fabric:-Bhagal Puri Silk"

	}]; 

  constructor() { }

  ngOnInit() {
  }

  ModalFunctin(values){
    console.log(values);
     this.ImageInfo = values;
    
  }

}
