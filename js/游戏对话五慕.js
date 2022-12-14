var i = 0, k = -1, l = 0;
let text = ["次日，武林大会开始……",
    "武林大会当天自愿报名，会依次分配到八个小组中，等到正式开始后，便会截止报名开始比赛。 ",
    "每个组都将会进行顺序战，淘汰剩一人后便可以参加下午的晋级赛，击败对手后，便可获得参与第二天的半决赛，最终将问鼎冠亚军。",
    "张言泽在被分到了戊组，迅速观察了同个小组的人，因为张言泽装备着外骨骼，所以只要近身便可以营造优势。 ",
    "随着看台处一声金锣敲响，比赛正式开始。",
    "张言泽的第一个对手是一个仙人，从一开始张言泽便不曾给过对手施法的机会",
    "在对手抬手默念气语时，张言泽便依靠着外骨骼的加速直接来到对手面前，一记下勾拳直击腹部，对面的仙人便失去了战斗力了。",
    "这仅仅是开场不到五息的时间，便淘汰了对手， 随后一整天战斗都是如此",
    "张言泽凭借极快的速度和极强的爆发力，成功击败一个又一个对手……",
    "一时间，看客们纷纷都将注意力放到了这个名不见经传的新人身上。这倒也正常，毕竟每届武林大会总会杀出几匹黑马。 ",
    "第二天早上是半决赛，昨天张言泽赢得并不算太难， 但是张言泽知道，今天的比赛才是重头戏。",
    "因为对手通过昨晚的分析，已经大致能够判断出张言泽的战斗风格，并针对于此做出应对之策。",
    "今天早上的对手，很明显是个武夫。",
    "比赛开始",
    "张言泽依旧一个突进，但是武夫早已经架好了战拳的姿势，双方两个拳头一个照面，便震出了巨大的气波。",
    "然后双方迅速拉远距离，然后又是互相换拳。",
    "几个来反后，张言泽便意识到这个武夫的硬度跟他的外骨骼不相上下。",
    "而每次换拳，由于张言泽自身并不擅长武道，使得每次内力都对他造成了一定的伤害，然而对面武夫由于从小习武，反倒是占尽优势。",
    "嘁，碰上硬骨头了。",
    "看来换拳不适合这个对手。",
    "但是此人重视攻击力，那么我如果能放弃杀伤力选择加速近身攻击的话……",
    "想罢，张言泽便稍微收了收拳，将外骨骼提供的动力加到了腿部。",
    "对手看到张言泽收势，以为是已经放弃了这场比赛。便大声嘲讽了起来。",
    "张言泽心想，待会谁胜谁负，还不一定呢。",
    "想罢，张言泽便急速突击，其所体现的速度远超昨日。",
    "似乎他的残影还留在原地，本身便已经到了武夫面前，一拳击打到了武夫的侧腹，随后迅速拉远身形。",
    "此后，张言泽故技重施，在每次对面武夫出拳前完成了击打，然后拉开距离，准备下一次进攻。",
    "一时间，整个场上尽是张言泽留下的残影。",
    "武夫也慢慢察觉到不对劲，因为他发现虽然每次对面的伤害不高，但是几十拳下来还是造成了不小的内伤。",
    "明白这一点后，武夫也稍微收起了自己的架势，转为了稍微防守的姿态。",
    "但是很显然，防守并不是这位武夫的强项。但是他认为，防御住张言泽那种力度的攻击，也是足够的。",
    "说时迟那时快，张言泽依旧突进拉近身形，而武夫也架好了防守的姿态",
    "但就在击打的前一瞬间，张言泽突然速度骤降，将外骨骼所带来的动力又重新转到自己的右拳",
    "然后一记直拳，轰打到武夫的胸膛上。",
    "转瞬间，武夫倒飞出擂台，重重地撞在了后面的防护墙上，随后吐出一口精血便重伤昏迷过去了。",
    "而作为当事人的张言泽，此时并不好受",
    "因为速度骤降并且力量的急速转移给他身体带来了巨大的负荷，鼻孔、耳朵、嘴巴，都多少因为这股压力流出了些许鲜血。",
    "当然了，对比起已经重伤昏迷的武夫，此时的张言泽明显要好太多。",
    "张言泽踉踉跄跄地走下场，刘雯也急忙前去搀扶张言泽",
    "她知道这种痛苦不是常人所能承担的住的，眼眶也似有似无地泛起了眼花。",
    "刘雯通过一场场的比赛，已经知道了虽然这里的人没有高科技，但是长期都在“气”的滋润下",
    "或是体格超人，或是仙术满天飞，一个没有太多实战技巧的张言泽仅凭一个外骨骼就想战胜他们，确实是太难了些，更别说自己了。",
    "若是执意自己上场的话，说不定昨日就已经被淘汰了……",
    "没事，我还撑得住，放心吧，我张言泽答应你的事情，就一定会做到。",
    "到了下午，通过紧急修复药剂勉强痊愈些许内伤的张言泽，再一次登场——问鼎冠军。",
    "这次的对手是一位甲组的书生，他看着张言泽，说道：",
    "我看过你之前的比赛，只要不让你近身，我便可以在不输的基础上跟你消耗体力，认输吧，武夫。",
    "很显然，这位书生虽然看不出张言泽身上外骨骼的古怪，但是大致认为他是属于武夫的范畴。",
    "百无一用是书生，别废话，擂台见真章。",
    "金锣最后一次敲响，告示着冠亚的比赛正式开始。",
    "随即，张言泽迅速拉近距离，但是书生早有防备，突然他手上的书籍飞出了一页页的纸张，环绕在整个擂台中。",
    "这一举措，不仅阻挡了张言泽的视线，更重要的是，他没办法直接突进到对手身边了。",
    "我说过了，我已经知道你的近身的厉害，自然不会让你靠过来。",
    "一页页纸张如盾，阻挡着张言泽的前进；又如利剑，不断刺伤着张言泽。不一会，他便身上伤痕满满。",
    "嘶，伤口所带来的阵痛，不禁让张言泽发出了声响。",
    "不行得找个方法破了这阵，纸张属木，怕火……",
    "火？",
    "有了！",
    "张言泽身上的外骨骼，其肩上有配备一次量的微型导弹，用于紧急避险。",
    "但是既然书生知道我近身的厉害，势必在我打破阵法的时候会有所防备。",
    "早上的比赛后，他应该知道我的速度和力量不能同时具备，那么……",
    "想罢，张言泽迅速后撤，直到快退出擂台。",
    "书生见此，不仅露出笑容。毕竟距离越远，他就越安全。",
    "同时他也稍微减少了身上护盾的施法，转而加强了飞书的攻击性。",
    "突然，隐约间看到了张言泽肩上突然冒出了火焰，进而他面前的飞书颤抖了起来",
    "一页页纸张突然燃了起来，随后传来了一声声巨大的爆炸声——阵法已破。",
    "但是书生并不慌张，他只需要在近身一刹那前加强护盾即可，因为在此之前对手的速度肯定会骤降，留下充裕的时间。",
    "张言泽冲刺了过来，十步——",
    "五步——",
    "三步——",
    "理应这时候减速的他，却似乎并不打算减速。",
    "而书生也已经准备好加强护盾后立刻反击——",
    "过载模式，启动！",
    "突然间，身体各部分的能量突然加强。",
    "HOOM！",
    "一拳破开了刚刚建立的护盾，直击书生。",
    "最后的胜负已经明了，张言泽颤颤巍巍地走下台",
    "勉强朝着刘雯笑了笑，随即吐出大口大口的鲜血。",
    "本身便有内伤的张言泽在过载模式下吐出了大口大口的鲜血……"];

let charName = ["",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "张言泽",
    "张言泽",
    "张言泽",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "张言泽",
    "",
    "",
    "书生",
    "",
    "张言泽",
    "",
    "",
    "",
    "书生",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "张言泽",
    "",
    "",
    "",
    "",
    "",
    ""];


function nextText() {
    if (l < 79) {
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



function typingName() {
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