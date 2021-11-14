let outputScreen;
function display(num) {
    outputScreen = document.getElementById("output-screen");
    outputScreen.value += num;
}

function calculate() {
   try{ outputScreen.value = eval(outputScreen.value);}
   catch (err) {
       alert("fungsi ini akan segera hadir!")
   }
}

function allClear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}
