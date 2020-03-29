locDict = {
    "hospital":[12.9584, 77.6488, 4],
    "hotel":[12.9799, 77.7728, 5],
    "mall":[12.9958, 77.6964, 3],
    "shop":[12.9564, 77.6977, 2]

}
ListPlaces = {
    "hospital" : {
        "locationID":locDict.hospital,
        "info":{
            "beds": 450,
            "available": 23,
            "name":"Applo"
        },
        "contact":{
            "ph no": 12345,
            "email": "road1@street2.com"
        },
        "about": "This is a hospital"
    },
    
    "hotel": {
        "locationID":locDict.hotel,
        "info":{
            "stars":"5",
            "owner":"qwerty",
            "name":"hello"
        },
        "contact":{
            "ph no": 346456,
            "email": "road4@street20.com"
        },
        "about": "This is a hotel"
    },
    "mall" : {
        "locationID":locDict.mall,
        "info":{
            "noofshops":32,
            "floors":5,
            "parking":5
        },
        "contact":{
            "ph no": 99908998,
            "email": "road18@street10.com"
        },
        "about": "This is a mall"
    },
    "shop" : {
        "locationID":locDict.shop,
        "info":{
            "shopaname":"Lee",
            "floors":5,
            "parking":null
        },
        "contact":{
            "ph no": 12345,
            "email": "road1@street2.com"
        },
        "about": "This is a shop"
    }
}

var menu1 = `<ul> <li><button style="border:none;" onclick = "fillstuff(0)"><a class="active">Hospital info</a></button></li> <li><button style="border:none;" onclick = "contact(0)"><a>Contact</a></button></li> <li><button style="border:none;" onclick = "about(0)"><a>About</a></button></li> </ul>`;
var menu2 = '<ul> <li><button style="border:none;" onclick = "fillstuff(1)"><a class="active">Hotel info</a></button></li> <li><button style="border:none;" onclick = "contact(1)"><a>Contact</a></button></li> <li><button style="border:none;" onclick = "about(1)"><a>About</a></button></li> </ul>';
var menu3 = '<ul> <li><button style="border:none;" onclick = "fillstuff(2)"><a class="active">Mall info</a></button></li> <li><button style="border:none;" onclick = "contact(2)"><a>Contact</a></button></li> <li><button style="border:none;" onclick = "about(2)"><a>About</a></button></li> </ul>';
var menu4 = '<ul> <li><button style="border:none;" onclick = "fillstuff(3)"><a class="active">Shop info</a></button></li> <li><button style="border:none;" onclick = "contact(3)"><a>Contact</a></button></li> <li><button style="border:none;" onclick = "about(3)"><a>About</a></button></li> </ul>';

function fillstuff(fin){
    arr = Object.keys(locDict)
    xx = ListPlaces[arr[fin]]
    console.log("fsxx",xx)
    arr = Object.keys(xx)
    tt = `    <table>
    <tr>
    <td><b>Content</b></td>
    <td><b>value</b></td>
  </tr>
  `
    console.log("arr",xx)
    for(i in xx.info){
        console.log(xx.info[i])
        tt += `
        <tr>
        <td>${i}</td>
        <td>${xx.info[i]}</td>
      </tr>
        `
    }
    tt += "</table>"
    document.getElementById('here').innerHTML = tt
}
function contact(fin){
    arr = Object.keys(locDict)
    xx = ListPlaces[arr[fin]]
    console.log("cxx",xx)
    arr = Object.keys(xx)
    tt = `    <table>
    <tr>
    <td><b>Content</b></td>
    <td><b>value</b></td>
  </tr>
  `
    console.log("arr",xx)
    for(i in xx.contact){
        console.log("contact",xx.contact[i])
        tt += `
        <tr>
        <td>${i}</td>
        <td>${xx.contact[i]}</td>
      </tr>
        `
    }
    tt += "</table>"
    document.getElementById('here').innerHTML = tt
}

function about(fin){
    arr = Object.keys(locDict)
    xx = ListPlaces[arr[fin]]
    console.log("axx",xx)
    console.log("xx",xx)
    ttb ="<br> <br>"
    arr = Object.keys(xx)
    tt = "About: "+xx.about
    document.getElementById('here').innerHTML = tt
}