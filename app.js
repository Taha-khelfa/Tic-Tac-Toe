// 1-insert X and O and X must be the first player
// 2-check the winner if (A1 A2 and A3 same symbole) the current symbole win
   // 2-1 we have 3 horizontal winning possibilities
   // 2-2 we have 3 vertical winning possibilities
   // 2-3 we have 2 diagonal winning possibilities
var x_turn = true ; // true means X player turn



function insert(id){
    var element = document.getElementById(id)
    if(x_turn && element.innerHTML==""){
        element.innerHTML="X"
        x_turn =!x_turn
    }else if(!x_turn && element.innerHTML=="") {
        element.innerHTML="O"
        x_turn =!x_turn
    }
    
}

