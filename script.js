document.addEventListener("DOMContentLoaded", () =>{
    let outer = document.getElementById("outer");
    let arr = Array(9).fill(undefined);
    let chance = false;//false -O

    outer.addEventListener("click" ,(e)=>{
        let cell = e.target;
        let cellNumber = cell.getAttribute("data-cell");
        console.log(cellNumber);
        if(cell.getAttribute("data-clicked") || cellNumber === null){
            return;
        }
        cell.setAttribute("data-clicked","true");

        if(chance == false){
            cell.textContent = "O";
            arr[cellNumber] = "O";
            winningCombo("O");        
        } else {
            cell.textContent = "X";
            arr[cellNumber] = "X";
            winningCombo("X");
        }
        chance = !chance;

        // Check for a tie
        if (!arr.includes(undefined)) {
            let result = document.getElementById("result");
            result.textContent = "It's a Tie!";
            result.classList.add("result");
        }
    } )
       

    function winningCombo (c) {
        let result = document.getElementById("result");
        if( arr[0]==c && arr[1] ==c && arr[2]==c){
            result.classList.add("result");
            result.textContent = `${c} wins`;

        }
        else if( arr[3]==c && arr[4] ==c && arr[5]==c){
            result.textContent = `${c} wins`;
            result.classList.add("result");
        }
        else if( arr[6]==c && arr[7] ==c && arr[8]==c){
            result.textContent = `${c} wins`;
            result.classList.add("result");

        }
        else if( arr[0]==c && arr[3] ==c && arr[6]==c){
            result.textContent = `${c} wins`;
            result.classList.add("result");

        }
        else if( arr[1]==c && arr[4] ==c && arr[7]==c){
            result.textContent = `${c} wins`;
            result.classList.add("result");

        } 
        else if( arr[2]==c && arr[5] ==c && arr[8]==c){
            result.textContent = `${c} wins`;
            result.classList.add("result");

        }
        else if( arr[0]==c && arr[4] ==c && arr[8]==c){
            result.textContent = `${c} wins`;
            result.classList.add("result");

        } 
        else if( arr[2]==c && arr[4] ==c && arr[6]==c){
            result.textContent = `${c} wins`;
            result.classList.add("result");

        } 
    }

    let play = document.getElementById("refresh-btn");
    play.addEventListener("click", () =>{
        location.reload(); // Refresh the page after alert is closed       
    })
})