let CamelToSnake =(input)=>{
    arrstring = input.split("")
    cml_to_snake=""
    for(let i=0 ; i<arrstring.length ; i++){
     
        if(i==0){
            cml_to_snake+= arrstring[i].toLowerCase()
        }
     else if(arrstring[i].toUpperCase()==arrstring[i]){
       cml_to_snake += "_"+arrstring[i].toLowerCase()
      }
      else{
        cml_to_snake += arrstring[i]
      }
      
    }
    return(cml_to_snake)
    }
    
    CamelToSnake("XML")