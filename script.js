document.getElementById("form-contact").onsubmit=function(e){
    e.preventDefault();

   var name = document.getElementById("name").value.trim();
   var mail = document.getElementById("mail").value.trim();
   var messege = document.getElementById("messege").value.trim();

    var a = [];
    a.push(`Your Information !!!`);
    a.push(`................`);
    a.push(`Your Name: ${name}`);
    a.push(`Email: ${mail}`);
    a.push(`Messenge: ${messege}`)
    a.push(`................`);
    a.push(`Thanks for your respond. We will reply you soon.`);
    alert(a.join("\n"));
}