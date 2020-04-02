// author: Mukundh
// Company: Nebutech
ListPlaces = {
    "data": [
    {"hospital" : {
        "locationID":[12.9584, 77.6488, 4],
        "menu":{
            "info":{
                "beds": 450,
                "available": 23,
                "name":"Applo"
            },
            "contact":{
                "ph no": 12345,
                "email": "road1@street2.com"
            },
            "about": {
                "description": "This is a hospital 1"
        }}
    }},

    {"hospital" : {
        "locationID":[12.9284, 77.6488, 4],
        "menu":{
            "info":{
                "beds": 650,
                "available": 23,
                "name":"Applo"
            },
            "contact":{
                "ph no": 12345,
                "email": "road1@street2.com"
            },
            "about": {
                "description": "This is a hospital 2"
        }}
    }},

    {"hotel": {
        "locationID":[12.9799, 77.7728, 5],
        "menu":{
            "info":{
                "stars":"5",
                "owner":"qwerty",
                "name":"hello"
            },
            "contact":{
                "ph no": 346456,
                "email": "road4@street20.com"
            },
            "about": {
                "description": "This is a hotel"
        }}
    }},

    {"mall" : {
        "locationID":[12.9958, 77.6964, 3],
        "menu":{
            "info":{
                "noofshops":32,
                "floors":5,
                "parking":5
            },
            "contact":{
                "ph no": 99908998,
                "email": "road18@street10.com"
            },
            "about": {
                "description": "This is a mall"
        }}
    }},

    {"shop" : {
        "locationID":[12.9564, 77.6977, 2],
        "menu":{
            "info":{
                "shopaname":"Lee",
                "floors":5,
                "parking":null
            },
            "offers":{
                "Bonanza": "Buy 1 Get 5 free",
                "Just kidding": "Buy a polo shirt and win a iPhone 12x"
            },
            "about": {
                "description": "This is a shop"
        }}
    }}
]}

var locDict = new Array();
var menu = new Array();

var locDictKeysArr = new Array();

for (i in ListPlaces.data){
    locDictKeysArr.push(Object.keys(ListPlaces.data[i]))
}

for (i = 0, len = locDictKeysArr.length; i < len; i++){
    var menu_temp = '<ul>';

    for (listitem in ListPlaces.data[i][locDictKeysArr[i]]) {
        
        if (listitem != "locationID"){
            for (menuitem in ListPlaces.data[i][locDictKeysArr[i]].menu) {
                menu_temp = menu_temp + `<li><button style="border:none;" onclick = "showData(` + i + `, '` + menuitem + `')"><a class="active">` + menuitem + `</a></button></li>`;
            }
        }
        else{
            locDict.push(ListPlaces.data[i][locDictKeysArr[i]].locationID) 
        }
    }
    menu_temp = menu_temp + `</ul>`
    menu.push(menu_temp);
}

function showData(index, keytag){
    detailListPlaces = ListPlaces.data[index][locDictKeysArr[index]].menu
    
    tableText = `    <table id="details">
                    <tr>
                    <th><b>Content</b></td>
                    <th><b>value</b></td>
                </tr>
                `
    for(i in detailListPlaces[keytag]){
        tableText += `
                        <tr>
                        <td>${i}</td>
                        <td>${detailListPlaces[keytag][i]}</td>
                        </tr>
                        `
    }
    tableText += "</table>"
    document.getElementById('here').innerHTML = tableText
}

// author: Mukundh
// Company: Nebutech