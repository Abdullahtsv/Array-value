var studentName = [];
var a;
for (a = 0; a < 5; a++)
    if(a <= studentName.length){
    studentName.push (prompt("enter value"))
    document.write("<h1>" + studentName.length + ") " + studentName[a] + "</br>" + "</h1>")
};
