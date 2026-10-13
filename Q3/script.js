function repeat(){
    var iname=["Chips","KitKat","7UP","Milkshake","Fanta"];
    var imoney=[15,25,10,50,20];
    alert("0. Chips Rs.15/-" + "\n"+"1. KitKat Rs.25/-"+ "\n"+"2. 7UP Rs.10/-"+ "\n"+"3. Milkshake Rs.50/-"+ "\n"+"4. Fanta Rs.20/-");
    var item=Number(prompt("Enter item num:"));
    alert("The item is:" + iname[item]);
    var money=Number(prompt("Enter ammount of You Have:"));
    if(money>0){
        for(let i=3;i>=1;i--){
            alert(i + "!");
        }
        alert("Order Placed")
        var changereq=confirm("Do you Want to See Your Remaining Balance?");
        if(changereq){
            changemoney(money)
        }
    }
    else{
        alert("Your Balance is insufficient");
    }
    function changemoney(money){
        if(money>=imoney[item]){
            var cmoney=money-imoney[item];
            alert("Your Remaining Balance:" + cmoney);
        }
        else{
            alert("Insufficient Balance");
        }
    }
    var Srepeat=confirm("do You Want to buy again?")
    if(Srepeat){
        repeat()
    }
    else{
        alert("item delivered successfully");
    }
}
repeat()
