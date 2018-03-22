var situation;
var alphabetCheck = /^[A-Za-z]/;  //regEx for all alphabetical capital and small 

$(document).ready(function(){
    $("#submit").click(function(){
        // check input is not empty 
        if($("#HW1, HW1d").val() == "" && $("#HW2, HW2d").val() == "" && $("#HW3, HW3d").val() == "")
           situation = true;
        // check if the input is not integer 
        else if( alphabetCheck.test($("#HW1, HW1d").val()) || alphabetCheck.test($("#HW2, HW2d").val())          || alphabetCheck.test($("#HW3, HW3d").val()))
           situation = true;
        
        
        else{
           situation = false; 
            // pass the values entered in input field and converate them to float first
           calculate(
               parseFloat($("#HW1").val() || 0.0),
               parseFloat($("#HW2").val() || 0.0),
               parseFloat($("#HW3").val() || 0.0),
               parseFloat($("#HW1d").val() || 0.0),
               parseFloat($("#HW2d").val() || 0.0),
               parseFloat($("#HW3d").val() || 0.0)
           );
            
            
        }
         // show this massage if the condition above have been met 
         if(situation === true){
            window.alert("You Have To Enter Numbers In The Fields");
       }  
         
    });  
});

//function to calculate the percent 
function calculate(HW1, HW2, HW3, HW1d, HW2d, HW3d) {
    var EarnedSum = 0;
    var TotalSum  = 0;
    var complete  = true;
    
    /// add the input Earned and total
    if(HW1 < HW1d){
        EarnedSum = EarnedSum + HW1;
        TotalSum  = TotalSum  + HW1d;  
    }
    
    if(HW2 < HW2d){
        EarnedSum = EarnedSum + HW2;
        TotalSum  = TotalSum  + HW2d; 
            }
    if(HW3 > HW3d) {
        EarnedSum = EarnedSum + HW3;
        TotalSum  = TotalSum  + HW3d; 
    }
    else if (HW1 > HW1d ||  HW2 > HW2d || HW3 > HW3d){
        window.alert("You cannot have left Bigger than Right field"); 
        complete = false;
    }
   
  
    
    if(complete){
    // calculate the percent 
    var percent = (EarnedSum / TotalSum) * 100;
    
    // if the check box is checked add 5 to the percent 
    if(document.getElementById("checkbox").checked){
        percent = percent + 5;
    };

         // show the result as div in html 
         $("#results").show(350);
         $("#results").append("<div>"+percent+"</div>");
            if(percent >= 60)
                $("#results div:last").addClass("pass");
            else
                $("#results div:last").addClass("fail");
    }
    
    
}