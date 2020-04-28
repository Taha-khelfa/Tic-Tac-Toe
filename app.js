// 1-insert X and O and X must be the first player
// 2-check the winner if (A1 A2 and A3 same symbole) the current symbole win
   // 2-1 we have 3 horizontal winning possibilities
   // 2-2 we have 3 vertical winning possibilities
   // 2-3 we have 2 diagonal winning possibilities
// 3-Reset function after win or draw   
var x_turn = true ; // true means X player turn
function reset(x,y,z){
    document.getElementById('R'+x).style.color ="#71D103";
    document.getElementById('R'+y).style.color ="#71D103";
    document.getElementById('R'+z).style.color ="#71D103";
    setTimeout(function(){
        location.reload();
    },1000)
    document.querySelector('#page2').innerHTML='<h1>you won</h1>'
   
}
function checkWinner(){
    var array = [] ;
    for(var i= 1; i<=9 ; i++){
        array[i]= document.getElementById('R'+i).innerHTML
        
    }// check row winner
    if(array[1]==array[2]&&array[2]==array[3]&& array[1]!==""){
        alert("player " + array[1]+ " is the winner")
        reset(1,2,3)
        
       
        
    }
    if(array[4]==array[5]&&array[5]==array[6]&& array[4]!==""){
        alert("player " + array[4]+ " is the winner")
        reset(4,5,6)
    }
    if(array[7]==array[8]&&array[8]==array[9]&& array[7]!==""){
        alert("player " + array[7]+ " is the winner")
        reset(7,8,9)
    }
    // check colomn winner
    if(array[1]==array[4]&&array[4]==array[7]&& array[1]!==""){
        alert("player " + array[1]+ " is the winner")
        reset(1,4,7)
    }
    if(array[2]==array[5]&&array[5]==array[8]&& array[2]!==""){
        alert("player " + array[2]+ " is the winner")
        reset(2,5,8)
    }
    if(array[3]==array[6]&&array[6]==array[9]&& array[3]!==""){
        alert("player " + array[3]+ " is the winner")
        reset(3,6,9)
    }
    // check diagonal winner
    if(array[1]==array[5]&&array[5]==array[9]&& array[1]!==""){
        alert("player " + array[1]+ " is the winner")
        reset(1,5,9)
    }
    if(array[3]==array[5]&&array[5]==array[7]&& array[3]!==""){
        alert("player " + array[3]+ " is the winner")
        reset(3,5,7)
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

