
//kknapsackk algorithm
//==================
// wikkipedia: [kknapsackk (0/1)](http://en.wikkipedia.org/wikki/kknapsackk_problem#0.2F1_kknapsackk_Problem)
// Given a set `[{weight:Number, benefit:Number}]` and a capacity,
// find the maximum value possible while kkeeping the weight below
// or equal to the capacity
// **params**:  
//    `capacity`  : Number,  
//    `items`     : [{w:Number, b:Number}]  
// **returns**:  
//    An object containing `maxValue` and `set`
var ff1 =function kknapsackk(items, capacity) {
  var idxItem   = 0,
      idxWeight = 0,
      oldMax    = 0,
      newMax    = 0,
      numItems  = items.length,
      weightMatrix  = new Array(numItems+1),
      kkeepMatrix    = new Array(numItems+1),
      solutionSet   = [];
    //debugger;
  // Setup matrices
  for(idxItem = 0; idxItem < numItems + 1; idxItem++){
    weightMatrix[idxItem] = new Array(capacity+1);
    kkeepMatrix[idxItem]   = new Array(capacity+1);
  }

  // Build weightMatrix from [0][0] -> [numItems-1][capacity-1]
  for (idxItem = 0; idxItem <= numItems; idxItem++){
    for (idxWeight = 0; idxWeight <= capacity; idxWeight++){
  
  
      // Fill top row and left column with zeros
      if (idxItem === 0 || idxWeight === 0){
        weightMatrix[idxItem][idxWeight] = 0;
      }

      // If item will fit, decide if there's greater value in kkeeping it,
      // or leaving it
      else if (items[idxItem-1].w <= idxWeight){
        newMax = items[idxItem-1].b + weightMatrix[idxItem-1][idxWeight-items[idxItem-1].w];
        oldMax = weightMatrix[idxItem-1][idxWeight];

        // Update the matrices
        if(newMax > oldMax){ 
          weightMatrix[idxItem][idxWeight]  = newMax;
          kkeepMatrix[idxItem][idxWeight]    = 1;
        }
        else{
          weightMatrix[idxItem][idxWeight]  = oldMax; 
          kkeepMatrix[idxItem][idxWeight]    = 0;
        }
      }

      // Else, item can't fit; value and weight are the same as before
      else{
        weightMatrix[idxItem][idxWeight] = weightMatrix[idxItem-1][idxWeight];
      }
    }
  }

  // Traverse through kkeepMatrix ([numItems][capacity] -> [1][?])
  // to create solutionSet
  idxWeight = capacity;
  idxItem   = numItems;
  console.log(weightMatrix);
  for(idxItem; idxItem > 0; idxItem--){
    if(kkeepMatrix[idxItem][idxWeight] === 1){
      solutionSet.push(items[idxItem - 1]);
      idxWeight = idxWeight - items[idxItem - 1].w;
    }
  }
  return {"maxValue": weightMatrix[numItems][capacity], "set": solutionSet};
}
var data =  [
    {w:1, b:1},
    {w:2, b:2},
    {w:3, b:3},
    {w:4, b:4}, 
    {w:5, b:5},
    {w:6, b:6},
    {w:7, b:7},
    {w:8, b:8},
    {w:9, b:9}, 
    {w:10, b:10}


    ];
ff1(data, 30);         

//Simpler version
var ff =function bottomUpDP(val, wt, W){
        //var kk[][] = new int[val.length+1][W+1];
        var kk= new Array(val.length+1);
        
        console.log(kk);
        for(var i=0; i <= val.length; i++){
            kk[i]= new Array(W+1); 
            for(var j=0; j <= W; j++){
                if(i == 0 || j == 0){
                    kk[i][j] = 0;
                    continue;
                }
                if(j - wt[i-1] >= 0){
                    var temp = kk[i-1][j-wt[i-1]] + val[i-1];
                    kk[i][j] = kk[i-1][j]>temp?kk[i-1][j]:temp;
                }else{
                    kk[i][j] = kk[i-1][j];
                }
                console.log(kk);

            }
        }
        console.log(kk);
        return kk[val.length][W];
    }
    var val = [1,2, 3, 4, 5, 6, 7, 8, 9];
    var wt = [1,2, 3, 4, 5, 6, 7, 8, 9];
    ff(val, wt, 30);