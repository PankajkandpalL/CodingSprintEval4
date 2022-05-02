// write js code here corresponding to matches.html

var schedule=JSON.parse(localStorage.getItem("schedule"))||[];

displaydata(schedule)

function displaydata(data){

    document.querySelector("tbody").innerHTML="";

    data.forEach(function(el){

        var tr=document.createElement("tr");

        var td1=document.createElement("td")
        td1.innerText=el.matchnum;

        var td2=document.createElement("td")
        td2.innerText=el.teamA

        var td3=document.createElement("td")
        td3.innerText=el.teamB

        var td4=document.createElement("td")
        td4.innerText=el.date

        var td5=document.createElement("td")
        td5.innerText=el.venue
        
        var td6=document.createElement("td")
        td6.innerText="FAVOURITES"
        td6.style.color="green"
        td6.style.cursor="pointer"
        td6.addEventListener("click", function(){
            fav(el)
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr);
    })
}

var favourites=JSON.parse(localStorage.getItem("favourites"))||[];

function fav(el){

    favourites.push(el)

    localStorage.setItem("favourites", JSON.stringify(favourites))

}

var filter=document.querySelector("#filterVenue");
filter.addEventListener("change", changing)

function changing(){

    var filtered=schedule.filter(function(el){
        return el.venue==filter.value;
    })

    displaydata(filtered)

    if(filter.value=="none")
    {
        displaydata(schedule)
        window.location.reload;
    }
}