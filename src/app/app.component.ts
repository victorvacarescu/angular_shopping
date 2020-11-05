import { Component } from '@angular/core';
// import { ProduseComponent } from './produse/produse.component';
// import { parse } from 'path'; 
// import { RouterOutlet } from '@angular/router';
// import { StatusService } from './shared/status.service';
// import { HttpClient } from '@angular/common/http';

// var cors = require('cors'); 
// const test = 1;
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) 
export class AppComponent {
  
  
  status = 'DOWN';
  
 
  ngOnInit(){
    
  }  

  // const MongoClient = require('mongodb').MongoClient;
  // const uri = "mongodb+srv://victorVacarescu:<password>@cluster0.yglv9.mongodb.net/<dbname>?retryWrites=true&w=majority";
  // const client = new MongoClient(uri, { useNewUrlParser: true });
  // client.connect(err => {
  //   const collection = client.db("test").collection("devices");
  //   // perform actions on the collection object
  //   client.close();
  // });
}
