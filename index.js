

function snapCrackle(maxValue){
    let array = [];
    
    for(i = 1; i <= maxValue; i++){
        array.push(i);
    }

    for(let j = 1; j <= array.length; j++){
        
        if(j % 5 == 0){
            let add = array.indexOf(j);
            array[add] = 'Crackle';
        }

        if (j % 2 == 0){
            array.length[j]            
        }

        if (j % 2 != 0){
            let add = array.indexOf(j);
            array[add] = 'Snap';
        }
        

        else if(j % 5 == 0 && j % 2 == 0){
            let add = array.indexOf(j);
            array[add] = 'SnapCrackle'; 
        }


    } 
    return array.join(', ')
    }
        
    

console.log(snapCrackle(20))
    
