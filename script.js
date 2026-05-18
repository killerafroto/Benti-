
function check(){
  let pass = document.getElementById("pass").value;

  if(pass === "jomana"){
    document.getElementById("lock").style.display="none";
    document.getElementById("site").style.display="block";

    const music = document.getElementById("bgMusic");

    music.play().catch(()=>{
      document.addEventListener("click",()=>{
        music.play();
      },{once:true});
    });

    start();
  }
}

const text = `عايز أقولك إني بحبك أوي  
إنتي الوحيدة اللي حبيتها وحبيت وجودها جمبي  

أنا بحب كل حاجة فيكي... شكلك، ضحكتك، هزارك وكل تفاصيلك  
عشت معاكي حاجات حلوة كتير محدش هيفهمها غيرنا  

أنا مش برتاح غير معاكي  
وعارف إني ساعات بزعلك مني، بس دايمًا بخاف عليكي أكتر ما بخاف على نفسي  

إنتي تربيتي وبتكبري قدام عيني ومبسوط بيكي جدًا  
يمكن مش بتلاحظي كلام الحب، بس كل أفعالي بتقول إني محبتش غيرك  

إنتي عندي أهم من كل الناس... وربنا يخليكي ليا وينور عيني ❤🌍`;

let i=0;

function type(){
  if(i<text.length){
    document.getElementById("message").innerHTML += text.charAt(i);
    i++;
    setTimeout(type,28);
  }
}

function counter(){
  const start = new Date("2024-03-19T00:00:00");

  setInterval(()=>{
    let now = new Date();
    let diff = Math.floor((now-start)/1000);

    let days = Math.floor(diff/86400);

    document.getElementById("counter").innerHTML =
      days + " سوا💗";
  },1000);
}

function start(){
  type();
  counter();
}
