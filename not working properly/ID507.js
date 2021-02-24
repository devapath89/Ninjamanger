function multiplyBy()
{
    function multiplyBy()
    {
            document.getElementById("result2").innerHTML = ""
            var Lvl = parseInt(document.getElementById("LVL2").value);
         
    
            for(let obj of ID506){      
            for(let singleStat in obj.Stats){
    
                    for(let growth in obj.Growth ){
                           if(singleStat == growth){
                            console.log("Match! Yas!", growth)
                            //plukke ut verdier fra keys  (navnet på feltet) og gange og plusse og alt det der
    
                            let statValue = obj.Stats[singleStat];
                            let growthValue = obj.Growth[growth];
    
                            console.log(statValue[singleStat] + " test  "+ growthValue[growth])
    
                            //console.log(isNaN(statValue) , "<- isNAN check  typeof: " , typeof(statValue)  )
                            document.getElementById("result2").innerHTML += `<li>${(growthValue * Lvl) + statValue}</li>`;
                           }
                    }
            }
    
            
           // document.getElementById("result").innerHTML += `<li>${(growth * Lvl) + stat}</li>`;
    
            }
            
    }       
    }
        