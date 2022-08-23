var i = 0, k = -1, l = 0;
let text = ["善万物之得时，感吾生之行休。已矣乎！御行宇内复几时，曷不委心任去留？胡为乎惶惶兮于何之？富贵非吾愿，帝乡不可期。",
    "什么狗屁玩意，完全看不懂啊，上三区的人天天就读这些破玩意啊，这封面画的是什么鬼东西啊",
    "《归去来兮辞并序》作者陶渊明，是距今4000年前的地球文明作品，此外，本次航行中您的一切行为都将会被记录，请注意您的言行",
    "好了好了好了，我没有在问问题，你们这些机器就是死脑筋，给我闭嘴",
    "很抱歉，本机在刚刚接收到了紧急任务。",
    "桃花星，距离您0.7光年处。由资深采蜜人刘雯首次发现，通过采蜜人刘雯带回来的外太空拍摄资料，天文院判断该星系无任何开发价值。",
    "但4个月前，刘雯依旧申请探查，经中央审查批准，刘雯于上个星期成果到达桃花星，此后一直处于失联状态。",
    "鉴于航行中的工蜂中只有你离桃花星最近，现委派紧急任务探查桃花星，确认是否存在文明并进行文明等级评估",
    "Dx2冰冷的合成音说完之后，自动驾驶驶向桃花星",
    "……",
    "警告，警告，飞船前方正高速飞来陨石带，请手动驾驶避让！请手动驾驶避让！再重复一遍……"];

let charName = ["",
    "张言泽",
    "工蜂·DXⅡ",
    "张言泽",
    "Dx2",
    "Dx2",
    "Dx2",
    "Dx2",
    "Dx2",
    "",
    "工蜂·DXⅡ"];


function nextText() {
    if (l < 11) {
        k++;
        i = 0;
    }
    else {
        return;
    }
    typingEffect();
    typingName();
}

function typingEffect() {

    if (i < text[k].length) {
        document.getElementById('duihua').innerHTML += text[k].charAt(i);
        i++;
        setTimeout(typingEffect, 50);


    }

}



function typingName(){
    document.getElementById('mingzi').innerHTML = charName[k];
    
}


function remove() {
    document.getElementById('duihua').innerHTML = "";
    document.getElementById('mingzi').innerHTML = "";
    nextText();
}

function nextDialogue() {
    addEventListener('click', remove);
        
}

nextDialogue();