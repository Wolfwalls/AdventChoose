let story = {
    step1: {img:"./images/spookyforest.jpg",
        text: "You awake on October 1st in the middle of the forest because your friends dared you to stay a night in the spooky forest in the spookiest month. As you attempt to find a way out you hear rustling in the bushes.",
        btn1:{text:"Investigate", step:"step2"},
        btn2:{text:"Run Away", step:"step6"}
    },
    step2: {img:"./images/Skeleboi.jpg",
        text: "you peer into the bushes only to find a human skeleton, you watch as it starts to stand upright only to realise it is slightly shorter than you are.",
        btn1:{text:"Wave to it", step:"step3"},
        btn2:{text:"Square Up", step:"step4"}
    },
    step3: {img:"./images/magiskel.jpg",
        text: "The skeleton waves back and produces a magic wand from his mouth. He conjures a magician's hat onto his head and shows you amazing magic tricks like nothing you have ever seen before. After he finishes preforming he returns to being inanimate once more.",
        btn1:{text:"Stay There", step:"step5"},
        btn2:{text:"Continue down the path", step:"step8"}
    },
    step4: {img:"./images/magiskel.jpg",
        text: "As you attempt to throw a punch the skeleton produces a wizard's hat and wand from his mouth and vaporizes you. At least it was a painless death.",
    },
    step5: {img:"./images/dumb-ahh-pumpkin.jpg",
        text: "You wait for the night to end, but before the sun can peek it's head out a pack of hungry pumpkins, too dumb to know they can't be alive nor hungry, eat you. THat is just embarassing",
    },
    step6: {img:"./images/bircheyesbackgroundless.png",
        text: "You run down the path ahead but something catches your eye, in your pripheral vision you swear you see a birch tree deep in the forest. As you turn to look back at where it was something seems different the patterns are strange on their own, but something else about the tree feels like it's different",
        btn1:{text:"Back away slowly with your eyes on it", step:"step8"},
        btn2:{text:"Turn and Run", step:"step7"}
    },
    step7: {img:"./images/theeye.png",
        text: "You run as fast as your legs take you but you soon find out what that odd sensation was as you steal a glimpse back. The tree can tell you are gettign scared and starts uprooting itself revealing spider-like tendrils that allow it to move much faster. You trip and fall on a branch and within moments the skittering grows deafening and you are brought to your end. ONe of the more painful ways to go."
    },
    step8:{img:"./images/wolpwobg.png",
        text:"After going far down the trail you spot a wolf trotting up to you. Upon reahcing you he looks up and sits at your feet waiting for something.",
        btn1:{text:"Pet the Wolf", step:"step9"},
        btn2:{text:"Leave the Wolf", step:"step10"}
    },
    step9: {img:"./images/wolpsavedfrombg.png",
        text: "The wolf wags his tail happily and leads you through the forest and to your house. The night is finally over and you have survived."
    },
    step10: {img:"./images/badendforest.jpg",
        text: "The wolf whines as you leave but does not chase after you.",
        btn1:{text:"Keep Going", step:"step11"},
    },
    step11: {img:"./images/foggyforest.jpg",
        text: "The only thing left to guide you is the beaten path, but that too comes to an end in front of you.",
        btn1:{text:"Lose  the  path", step:"step12"},
    },
    step12: {img:"./images/badendforest.jpg",
        text: "Without the path you have no idea where you are and yet you persist",
        btn1:{text:"L o s e  t h e  w a y", step:"step13"},
    },
    step13: {img:"./images/foggyforest.jpg",
        text: "Your sense of direction betrays you as you find that you have walked in a circle",
        btn1:{text:"L O S E  Y O U R S E L F", step:"step14"},
    },
    step14: {img:"./images/foggyforest.jpg",
        text: "Y O U  H A V E  F O R G O T T E N  Y O U R  O W N  N A M E",
        btn1:{text:"N  O  T  H  I  N  G   M  O  R  E   T  O   L  O  S  E", step:"step15"},
    },
    step15: {img:"./images/foggyforest.jpg",
        text: "WITH NO RECOLLECTION OF WHO YOU ONCE WERE YOU BECOME NOTHING BUT A SPIRIT FORCED TO FOREVER WANDER THESE WOODS AND HUNT FOR MORE UNFORTUNATE SOULS",
    },
}
// Soon, you find that you have no idea where to go and are lost. 
//You have no way out and join the thousands of lost souls in the forest forever.
document.getElementById('Btn1').addEventListener('click', function(){
    currentStep = story[currentStep].btn1.step;
    LoadScene();
})
document.getElementById('Btn2').addEventListener('click', function(){
    currentStep = story[currentStep].btn2.step;
    LoadScene();
})

const storyImage = document.getElementById("TheImage")
const storyText = document.getElementById("StoryText")
const storybtn1 = document.getElementById("Btn1")
const storybtn2 = document.getElementById("Btn2")

let currentStep = "step1"
LoadScene();
function LoadScene(){
    storyImage.src = story[currentStep].img;
storyText.innerHTML = story[currentStep].text;
if(story[currentStep].btn1 == undefined){
    document.getElementById('ButtonDiv').classList.add("hidden")
    document.getElementById('StoryText').classList.add("lost")

}else if(story[currentStep].btn2 == undefined){
    storybtn1.innerHTML = story[currentStep].btn1.text;
    document.getElementById('Btn2').classList.add("hidden")
}
if(currentStep == "step15"){
    document.getElementById('StoryText').classList.add("LOST")
}
else{storybtn1.innerHTML = story[currentStep].btn1.text;
storybtn2.innerHTML = story[currentStep].btn2.text;}

}




