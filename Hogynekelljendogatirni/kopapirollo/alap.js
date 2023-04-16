const dobasok = {
  jel: {
    ertek: 0,
    dobhate: true,
    img: null,
    idozites: null
  },
  eredmeny: 0
};
var elindul = 0;
var botoloko = 0;
var marind = false;
var nyomhatom = false;
var pontom = 0;
function veletlenszamgenereal(mettol, meddig) {
  return Math.floor(Math.random() * (meddig - mettol + 1) + mettol);
}

function megjelenit() {
  const div = document.getElementById("botv");
  div.innerHTML = "";
  let h1 = document.createElement("h1");
  let br = document.createElement("br");
  h1.style.textAlign="center";
  div.appendChild(h1);
  div.appendChild(br);
  h1.innerHTML = "Bot választása:";
  let img = document.createElement("img");
  img.className="kor2";
  img.setAttribute("onclick", "kattintas(this)");
  div.appendChild(img);
  dobasok.jel.img = img;
}

function dobas() {
  dobasok.jel.dobhate = true;
  dobasok.jel.eredmeny = 0;
  megjelenit();
  porog(dobasok.jel);
}

function porog(jel) {
  jel.ertek = veletlenszamgenereal(1, 3);
  botoloko = jel.ertek;
  jel.img.src = jel.ertek + ".png";
}

function porget() {
  if (dobasok.jel.dobhate) {
    marind = true;
    nyomhatom = true;
    var getdiv = document.getElementById("eredmeny");
    let h1 = document.createElement("h1");
    h1.innerHTML="?"
    getdiv.appendChild(h1);
    dobasok.jel.idozites = setInterval(porog, 50, dobasok.jel);
    dobasok.jel.ertek = veletlenszamgenereal(1, 3);
    lefutott = false;
    marind = false;
  }
}

function megall()
{
  clearInterval(dobasok.jel.idozites);
  
}
dobas();
var gepnyerte;
var lefutott = false;
var valaszt = 0;
function veletlenszamgenereal(mettol, meddig) {
    return Math.floor(Math.random() * (meddig - mettol + 1) + mettol);
}


function Robotjatszik() {
    if (!lefutott) {
        var hely = document.getElementById("botv");
        var kep = document.createElement("img");
        kep.src="./kepek/1.png";
        hely.appendChild(kep);
        lefutott = true;
    }
}


function Kovalaszt()
{
    if (!lefutott && nyomhatom == true) {
    console.log(botoloko);
    valaszt = 1;
    console.log(valaszt);
    lefutott = true;
    megall();
    if(valaszt==1 && botoloko ==1)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="Döntetlen";
      pontom++;
      
    }
    else if(valaszt==1 && botoloko ==2)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="A felhasználó nyert";
      pontom++;
      
    }
    else if(valaszt==1 && botoloko ==3)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="A bot nyert";
      
    }
    }
}

function Papirvalaszt()
{
    if (!lefutott && nyomhatom == true) {
    console.log(botoloko);
    valaszt = 2;
    console.log(valaszt);
    lefutott = true;
    megall();
    if(valaszt==2 && botoloko ==2)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="Döntetlen";
      pontom++;
      
    }
    else if(valaszt==2 && botoloko ==1)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="A bot nyert";
      
    }
    else if(valaszt==2 && botoloko ==3)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="A felhasználó nyert";
      pontom++;
      
    }
    }
}

function Ollovalaszt()
{
    if (!lefutott && nyomhatom == true) {
      console.log(botoloko);
    valaszt = 3;
    console.log(valaszt);
    lefutott = true;
    megall();
    marind == true;
    if(valaszt==3 && botoloko ==3)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="Döntetlen";
      pontom++;
      
    }
    else if(valaszt==3 && botoloko ==2)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="A bot nyert";
      
    }
    else if(valaszt==3 && botoloko ==1)
    {
      var getdiv = document.getElementById("eredmeny");
      getdiv.innerHTML="A felhasználó";
      pontom++;
      
    }
    }
}
function ujkor()
{
    var getdiv = document.getElementById("eredmeny");
    getdiv.innerHTML="";
    porget();

}

function Pontszamol()
{
  var pont = document.getElementById("pont");
  pont.innerHTML= "A felhasználó pontszáma:"+pontom;
  
}
Pontszamol();