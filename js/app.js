var app = angular.module("myresumeapp", ['firebase']);
//https://www.firebase.com/docs/web/libraries/angular/

app.controller('userdetails', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

  $scope.userDetails = {};
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDcYr-5HoSIycchDUI3z2YyJfRm8NvXm7E",
    authDomain: "resume-d10b5.firebaseapp.com",
    databaseURL: "https://resume-d10b5.firebaseio.com",
    projectId: "resume-d10b5",
    storageBucket: "resume-d10b5.appspot.com",
    messagingSenderId: "562090635709"
  };
  firebase.initializeApp(config);

  var ref = firebase.database().ref();
  //$scope.data = $firebaseArray(ref.child('user'));

 // $scope.user = ref.child("users").child("srk");
 $scope.user={
  name:"Rajesh Kumar Sheela",
  age:25,
  city:"Hyderabad",
  email:'rajesh@swecha.net',
  phone:'+(91) 7416477224',
  role: 'Associate Application Developer',
  bio: 'Committed and technically proficient, looking for an opportunity to work as a Developer through which I can utilize my knowledge for the growth of the organization.'
 };

 $scope.user.workedOn = [
   {
     title: 'Front End Development',
     desc:'',
     icon: 'fa-laptop'
   },
   {
     title: 'Back End Development',
     desc: '',
     icon: 'fa-server'
   },
   {
     title: 'Mobile Development',
     desc: '',
     icon: 'fa-mobile'
   }
 ];

 $scope.user.techSkills=[
  {
    title:'C',
    percentage:'80'
  },
   {
     title: 'Java',
     percentage: '90'
   },
   {
     title: 'Python',
     percentage: '80'
   },
   {
     title: 'Web Technologies',
     percentage: '80'
   },
   {
     title: 'Hybrid mobile application',
     percentage: '80'
   }
 ];
  
/*   $scope.data.forEach(element => {
    console.log(element);
  }); */
  

  // this waits for the data to load and then logs the output. Therefore,
  // data from the server will now appear in the logged output. Use this with care!
  // $scope.data.$loaded()
  //   .then(function () {
  //     console.log($scope.data);
  //   })
  //   .catch(function (err) {
  //     console.error(err);
  //   });


 /*  $scope.submitData = function () {
    $scope.users.$add($scope.userDetails).then(
      function (ref) {
        //console.log(ref);
        $("#myModal").modal();
        $scope.userDetails = {};
        setTimeout(() => {
          window.location = "http://internship.swecha.io/";
        }, 4000);

      },
      function (error) {
        $("#myModal").modal();
        $scope.userDetails = {};
        setTimeout(() => {
          window.location = "http://internship.swecha.io/";
        }, 4000);
      }
    );
  }; */
}]);

/* var viewStudents = angular.module("viewStudents", ['firebase']);
viewStudents.controller('listRegUsers', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {
  var config = {
    apiKey: "AIzaSyBN1fi3N60y1ZLwBAKN3J8QlyDVfSRTbuU",
    authDomain: "swechaintership.firebaseapp.com",
    databaseURL: "https://swechaintership.firebaseio.com",
    projectId: "swechaintership",
    storageBucket: "swechaintership.appspot.com",
    messagingSenderId: "997302649527"
  };
  firebase.initializeApp(config);

  var ref = firebase.database().ref().child('students');
  $scope.users = $firebaseArray(ref);
  console.log($scope.users);
}]); 


function exportToExcel(tableID) {
  var tab_text = "<table border='2px'><tr bgcolor='#87AFC6' style='height: 75px; text-align: center; width: 250px'>";
  var textRange; var j = 0;
  tab = document.getElementById(tableID); // id of table
  for (j = 0; j < tab.rows.length; j++) {
    tab_text = tab_text;
    tab_text = tab_text + tab.rows[j].innerHTML.toUpperCase() + "</tr>";
    //tab_text=tab_text+"</tr>";
  }
  tab_text = tab_text + "</table>";
  tab_text = tab_text.replace(/<A[^>]*>|<\/A>/g, ""); //remove if u want links in your table
  tab_text = tab_text.replace(/<img[^>]*>/gi, ""); //remove if u want images in your table
  tab_text = tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); //remove input params
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
  {
    txtArea1.document.open("txt/html", "replace");
    txtArea1.document.write('sep=,\r\n' + tab_text);
    txtArea1.document.close();
    txtArea1.focus();
    sa = txtArea1.document.execCommand("SaveAs", true, "internship.txt");
  }
  else {
    sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));
  }

  return (sa);
}
*/
/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);