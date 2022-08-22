var  i=0 , k=0 , l=0;
let text = ["什么狗屁玩意，完全看不懂啊，上三区的人天天就读这些破玩意啊，这封面画的是什么鬼东西啊", 
        "《归去来兮辞并序》作者陶渊明，是距今4000年前的地球文明作品，此外，本次航行中您的一切行为都将会被记录，请注意您的言行", 
          "好了好了好了，我没有在问问题，你们这些机器就是死脑筋，给我闭嘴"];

let charName = [""]


function nextText(){
    if(l<3){
        k++;
         i = 0;
    }
    else{
        return;
    }
    typingEffect();
}

function typingEffect(){
    if(i<text[k].length){
        document.getElementById('duihua').innerHTML += text[k].charAt(i);
        i++;
        setTimeout(typingEffect, 50);
        
  
    }

}

typingEffect();


function remove(){
    document.getElementById('duihua').innerHTML = "";
    nextText();
}

function nextDialogue(){
    addEventListener('click', remove);
 
}

nextDialogue();