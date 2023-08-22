const buttons = document.querySelectorAll(".btn");
for (let i = 0; i < btns.length; i++) {
    console.log(btns[i].textContent);
}
const op = document.querySelectorAll(".op");
for (let i = 0; i <op.length; i++) {
    if (op[i].textContent == '+') {
         addition();
    }else if (op[i].textContent == 'X') {
        multiplication();
    }
}
