function max(a, b) { return (a > b)? a: b; } 
  
/* Function to get minimum number of trials needed in worst 
  case with n eggs and k floors */
function eggDrop(n, k) 
{ 
    /* A 2D table where entery eggFloor[i][j] will represent minimum 
       number of trials needed for i eggs and j floors. */
    var eggFloor = []; 
    var res; 
    var i, j, x; 
    
   for(var i=0; i<n+1;i++){
      var n1 = new Array(k+1).fill(0);
      
      eggFloor[i]=n1;
   } 
    // We need one trial for one floor and0 trials for 0 floors 
    for (i = 1; i <= n; i++) 
    { 
        eggFloor[i][1] = 1; 
        eggFloor[i][0] = 0; 
    } 
  
    // We always need j trials for one egg and j floors. 
    for (j = 1; j <= k; j++) 
        eggFloor[1][j] = j; 
  
    // Fill rest of the entries in table using optimal substructure 
    // property 
    for (i = 2; i <= n; i++) 
    { 
        for (j = 2; j <= k; j++) 
        { 
            eggFloor[i][j] = 9999999999; 
            for (var x = 1; x <= j; x++) 
            { 
                res = 1 + max(eggFloor[i-1][x-1], eggFloor[i][j-x]); 
                if (res < eggFloor[i][j]) 
                    eggFloor[i][j] = res; 
            } 
        } 
    } 
  
    // eggFloor[n][k] holds the result 
    return eggFloor[n][k]; 
} 
eggDrop(2, 36);  