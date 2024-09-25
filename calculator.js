const display=document.getElementById("display");
const buttons= document.querySelectorAll("button")

for(const btn of buttons){
    btn.addEventListener('click',(e)=>{
     
        try {
               if(e.target.value==="AC"){
               display.value="";
        }
        else if(e.target.value==="DEL"){
            display.value=display.value.slice(0, -1)
        }
        else if(e.target.value==="="){
            let result=eval(display.value)
            display.value=result;   
        }
        else if(e.target.value==="Sin"){
            display.value=Math.sin(display.value)
            console.log("sign click",display.value);
        }
        else if(e.target.value==="Cos"){
            display.value=Math.cos(display.value)
            console.log("cos click",display.value);
        }
        
        else if(e.target.value==="tan"){
            display.value=Math.tan(display.value)
            console.log("cos click",display.value);
        }
        else if(e.target.value==="√"){
            display.value=Math.sqrt(display.value,2)
            console.log("cos click",display.value);
        }
        else if(e.target.value==="log"){
            display.value=Math.log(display.value)
            console.log("cos click",display.value);
        }
        
        else if(e.target.value==="e"){
            display.value=display.value*2.7182828182846;
        
        }
        else if(e.target.value==="π"){
           display.value=display.value*3.141592653589793;
        
        }
        else if(e.target.value==="χY"){
           display.value=Math.pow(display.value,2);
        }
        
        else if(e.target.value==="x!"){
           let i=1;
           let f=1;
           let num=display.value;
            for(i=1;i<=num;i++){
                f=f*1
            }
               i=i-1;
            display.value=i;
            console.log("factorial is click")
        }
        
        else{
            let newValue=e.target.value;
            display.value+=newValue;
        }
          }
          catch(err) {
            alert(err.message)
          }
    })
    
}

