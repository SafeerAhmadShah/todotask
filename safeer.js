//ternery operator

// let age =16

// let result= age>=18 ? "adult" : "minor"
// console.log(result)

// let score= 19;
// let grade;
// if(score>=90 && score<=100){
//     grade= "a"
// }else if (score>=70 && score<=89){
//      grade= "b"
// }else if (score>=50 && score<=69){
//      grade= "c"
// }else if (score>=1 && score<=49){
//      grade= "fail"
// }

// let num=25;
// let usernumber= prompt("gussess the number")
// while( num != usernumber){
//     usernumber= prompt("you enter wrong umber")
// }
// console.log(congo)
    let boxes = document.querySelectorAll(".box");
    let resetbtn = document.querySelector("reset-btn")
      
    let turn0 = true;

    const Winpatterns =[
         [1, 2, 3],[4, 5, 6],[7, 8, 9],
  [1, 4, 7],[2, 5, 8],[3, 6, 9],
  [1, 5, 9],[3, 5, 7]
    ];
    boxes.forEach((box) =>{
        box.addEventListener("click",() =>{

            console.log("box waas clicked");

            if (turn0){
                box.innerText ="0";
                turn0 = false;
            } else{
                box.innerText = "x"
                turn0 = true;
            }
            box.disabled = true;
            checkWinner();
        });
    } );
    const checkWinner = () => {
        for(pattern of Winpatterns ) {
            console.log(pattern[1],pattern[2],pattern[3],pattern[4],pattern[5],pattern[6],pattern[7],pattern[8],);
        }
    }


    


