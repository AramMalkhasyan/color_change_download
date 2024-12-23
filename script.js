let innerBox = document.querySelectorAll(".inner-container");

const changeButton = document.querySelector(".changing_color");
const downloadButton = document.querySelector(".download"); 
let colors = [];
let testContent = "" 



changeButton.onclick = () => {
    colors = [];
    testContent = "" 
    for(let i = 0; i < innerBox.length; i++) {
        let random = Math.floor(Math.random() * 1000000)
        colors.push(random)
        innerBox[i].style.backgroundColor = "#" + random
    }
    for(let j = 0; j <colors.length; j++) {
        testContent += colors[j] + "/"; 
    }
    console.log(testContent);
}


function downlaodFile() {
    const link = document.createElement("a");
    const content = testContent;
    const file = new Blob([content], {type: 'text/plain'});
    link.href = URL.createObjectURL(file);
    link.download = "color.txt";
    link.click();
    URL.revokeObjectURL(link.href);
}

downloadButton.onclick = () => {
    downlaodFile()
}




