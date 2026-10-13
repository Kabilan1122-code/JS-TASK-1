function repeat(){
    var Sname=prompt("Enter Your Student Name:");
    var M1=Number(prompt("Enter Your First Mark:"));
    var M2=Number(prompt("Enter Your second Mark:"));
    var M3=Number(prompt("enter your third Mark:"));
    function total(M1,M2,M3){
        return M1+M2+M3;
    }
    var x=total(M1,M2,M3);
    function avg(M1,M2,M3){
        return (M1+M2+M3)/3;
    }
    var y=avg(M1,M2,M3);
    alert("Average is:" + y)
    if(y>=90){
        alert("Student is Grade A");
    }
    else if(y>=75){
        alert("Student is Grade B");
    }
    else if(y>=50){
        alert("Student is Grade C");
    }
    else if(y>100 || y<=0){
        alert("Student Mark is Not Defined");
    }
    else{
        alert("Student is Grade F")
    }
    var Srepeat=confirm("do You Want to Calculate another Student's Result?")
    if(Srepeat){
        repeat()
    }
    else{
        alert("Student's Result Calculation Completed");
    }
}
repeat()
