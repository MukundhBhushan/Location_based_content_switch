locDict = {
    "hospital":["Loc1","Loc3"],
    "farm":["Loc3","Loc4"],
    "malls":["Loc1","Loc2","Loc5"],
    "shops":["Loc2","Loc4","Loc5"]

}

ListPlaces = {
    "hospital" : {
        "icon":"./hos.jpg",
        "locationID":locDict.hospital,
        "info":{
            "beds": 450,
            "available": 23,
            "name":"Applo"
        }
    },
    
    "farm": {
        "icon":"./farm.png",
        "locationID":locDict.farm,
        "info":{
            "plot":"54X23",
            "owner":"qwerty",
            "name":"hello"
        }
    },
    "malls" : {
        "icon":"./mall.jpg",
        "locationID":locDict.malls,
        "info":{
            "noofshops":32,
            "floors":5,
            "parking":5
        }
    },
    "shops" : {
        "icon":"./shop.jpg",
        "locationID":locDict.shops,
        "info":{
            "shopaname":"Lee",
            "floors":5,
            "parking":null
        }
    }
}



function submit() {
    
    var checkboxes = document.getElementsByClassName('messageCheckbox');
    var vals = [];
    for (var i=0, n=checkboxes.length;i<n;i++) 
    {
        if (checkboxes[i].checked) 
        {
            vals.push(checkboxes[i].value);
        }
    }
    console.log(vals)
    getCont(vals)
    return vals
}

function getCont(vals) {
    arr = Object.keys(locDict)
    a = []
    console.log(arr)
    for (i in arr){
        res = !locDict[arr[i]].some(val => vals.indexOf(val) === -1);
        a.push(res)
    }
    console.log("a",a)
    fin = a.indexOf(true)
    // finloc = locDict[arr[fin]]
    fillstuff(fin)
    //console.log("fin",ListPlaces[arr[fin]])

}

function fillstuff(fin){
    xx = ListPlaces[arr[fin]]
    arr = Object.keys(xx)
    tt = `    <table>
    <tr>
    <td><b>Content</b></td>
    <td><b>value</b></td>
  </tr>
  `
    console.log("arr",xx)
    document.getElementById('butt').src = xx.icon
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