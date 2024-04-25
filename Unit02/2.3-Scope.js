const prompt = require('prompt-sync')();

/*
Unit 2 Lesson 3: Basic understanding of scope

Author's Name: Grant Beaton
*/

let waterTemp = "cold";//Moved this outside of the function hotWater()

function waterBoilerSwitch(){ //Moved above the function hotWater() so that it happens first
    if (waterTemp == "cold") {
      waterTemp = "hot";
      return true;
    } else {
      waterTemp = "cold";
      return false;
    }
  }

function hotWater() {
  if (waterBoilerSwitch() == false){
    waterBoilerSwitch();
    
  }
  return waterTemp;
}


console.log(hotWater());//Moved this down to the bottom

//Testing Scope

let happy = "rightnow";

function emotionFeel(){
    if (happy == "rightnow"){
        let superhappy = "justnow";  

        if (superhappy == "justnow"){
            let megahappy = "atthismoment";
        
            if (megahappy == "atthismoment"){
                let ultrahappy = "aswespeak";
            
                if (ultrahappy = "aswespeak"){
                    let superblyhappy = "allthetime";

                    if (superblyhappy == "allthetime"){
                        console.log("You are superblyhappy.")

                     }               
                }
            }
        }
    }
}


emotionFeel()