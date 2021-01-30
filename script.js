const details=document.getElementById('details')
const button=document.getElementById('btn')
const country=document.getElementById("country")
button.addEventListener("click",generateJoke)
async function generateJoke (){
    var url='https://restcountries-v1.p.rapidapi.com/name/'+country.value
    const response = await fetch(url,{
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "faba736c62msha7b0ce7e4a6db46p1c56ecjsndf94cd3fa244",
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com"
        }
    });
    const myJson = await response.json();
    var finalstring=" "
    var info=myJson
    for(i=0;i<myJson.length;i++){
        var info=myJson[i]
   
    for(var key in info){
        v=''
        if(typeof info[key] === 'object'){
            console.log(info[key])
              for(var k in info[key]){
                  
                  v+=info[key][k]+'<br>'
              }
              info[key]=v
        }
        else{
        }
        finalstring += `<div id="element">`+`<div id="key">`+key+`</div>` +`<div id="value">`+info[key]+`</div>`+`</div>`
    }
    finalstring+=`<br><br>`
} 
    details.innerHTML=`${finalstring}`
    country.value=''
}