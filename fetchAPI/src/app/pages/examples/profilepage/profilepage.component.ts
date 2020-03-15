import { Component, OnInit, OnDestroy } from "@angular/core";
import {element} from "protractor";


@Component({
  selector: "app-profilepage",
  templateUrl: "profilepage.component.html"
})


export class ProfilepageComponent implements OnInit, OnDestroy {
  isCollapsed = true;

  constructor() {
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
  }

  createUser(element) {
    return document.createElement(element);
  }

  append(parent, element) {
    return document.appendChild(element);
  }

  //let url = "https://randomuser.me/api/";
  Fetch() {
    var toAdd = document.createDocumentFragment();
    fetch('https://randomuser.me/api/?results=5')
        .then((response) => response.json())
        // tslint:disable-next-line:only-arrow-functions
        .then(function (data) {
          let users = data.results;
          return users.map(function (user){
            let counter = counter++;
            var newDiv = document.createElement('div');
            newDiv.className = 'user'+ counter;
            var img = document.createElement('img');
            img.id = 'userPhoto' + counter;
            img.src = user.picture.large;
           // img.classList.contains('img-center img-fluid rounded-circle');
            var fName = document.createElement('h4');
            fName.className = 'firstName';
            fName.innerHTML = user.name.first;
            var lName = document.createElement('h4');
            lName.className = 'lastName';
            lName.innerHTML = user.name.last;
            toAdd.appendChild(newDiv);
            toAdd.appendChild(img);
            toAdd.appendChild(fName);
            toAdd.appendChild(lName);
          // document.getElementById('firstName').innerHTML = user.name.first;
          // document.getElementById('lastName').innerHTML = user.name.last;
          // document.getElementById('userPhoto').src = user.picture.large;
          });
          document.appendChild(toAdd);
        })
  }
}
