let playing=false;
let score=0;
let action;
let timeremain;
document.getElementById('start').onclick=function(){
    
    if(playing===true)
        {
           location.reload(); 
        }
    else
    {
        playing=true;
        document.getElementById('scoreValue').innerHTML = score ;
        document.getElementById('time').style.display="block"; 
        timeremain=60;
        genQA();
        document.getElementById('start').innerHTML="Reset Game";
       
        startCount();
    }
    
    
    
}


function startCount()
{
    
   action = setInterval(function(){
       timeremain -=1;
       document.getElementById('timeremain').innerHTML = timeremain;
       if(timeremain===0)
           {
               document.getElementById('time').style.display="none";
               gameOver();
           }
   },1000);
}


function gameOver()
{
    
    document.getElementById('gameover').style.display="block";
    document.getElementById('scoreno').innerHTML=score;
}

function genQA() {

    var x=Math.round(10*Math.random());
    var y=Math.round(10*Math.random());
    correctAnswer= x*y;
    document.getElementById('qtn').textContent=x +' x '+y;
    var correctPostion= 1+Math.round(3*Math.random());
    document.getElementById('option'+correctPostion).innerHTML=correctAnswer;

}


for(i=1;i<5;i++)
{
    document.getElementById('option'+i).onclick=function(){

        if(playing===true)
        {
            if(this.innerHTML==correctAnswer)
            {
                score++;
                document.getElementById('scoreValue').innerHTML = score ;
                hide('try');
                show('correct');
                setTimeout(function(){
                    hide('correct');
                },1000);
                
                genQA();
            }else{
                show('try');
                hide('correct');
                setTimeout(function(){
                    hide('try');
                },1000);
            }
        }
    }
}
