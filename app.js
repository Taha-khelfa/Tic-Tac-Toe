// 1-insert X and O and X must be the first player
// 2-check the winner if (A1 A2 and A3 same symbole) the current symbole win
   // 2-1 we have 3 horizontal winning possibilities
   // 2-2 we have 3 vertical winning possibilities
   // 2-3 we have 2 diagonal winning possibilities
var x_turn = true ; // true means X player turn

function checkWinner(){
    var array = [] ;
    for(var i= 1;i<=9;i++){
        array[i]= document.getElementById('R'+i).innerHTML
        
    }// check row winner
    if(array[1]==array[2]&&array[2]==array[3]&& array[1]!==""){
        console.log("player " + array[1]+ " is the winner")
    }
    if(array[4]==array[5]&&array[5]==array[6]&& array[4]!==""){
        console.log("player " + array[4]+ " is the winner")
    }
    if(array[7]==array[8]&&array[8]==array[9]&& array[7]!==""){
        console.log("player " + array[7]+ " is the winner")
    }
    // check colomn winner
    if(array[1]==array[4]&&array[4]==array[7]&& array[1]!==""){
        console.log("player " + array[1]+ " is the winner")
    }
    if(array[2]==array[5]&&array[5]==array[8]&& array[2]!==""){
        console.log("player " + array[2]+ " is the winner")
    }
    if(array[3]==array[6]&&array[6]==array[9]&& array[3]!==""){
        console.log("player " + array[3]+ " is the winner")
    }
    // check diagonal winner
    if(array[1]==array[5]&&array[5]==array[9]&& array[1]!==""){
        console.log("player " + array[1]+ " is the winner")
    }
    if(array[3]==array[5]&&array[5]==array[7]&& array[3]!==""){
        console.log("player " + array[3]+ " is the winner")
    }
}


function insert(id){
    var element = document.getElementById(id)
    if(x_turn && element.innerHTML==""){
        element.innerHTML="X" ;
        x_turn =!x_turn ; 
    }else if(!x_turn && element.innerHTML=="") {
        element.innerHTML="O" ;
        x_turn =!x_turn ;
    }
    checkWinner();
}

