//funktioner til mailListe
let skriv;
let mail;

//funktioner til LæsMail
let Svar
let Slet
let t
let Tilbage

//Funktioner til SkrivMail
let tekstFelt
let tilFelt
let send


function setup() {
  createCanvas(360, 600);
  background("white")
  
  function mailListe(){
  background("white")
  skriv = createButton("Skriv").position(300,550)
  mail = createButton("Mail").position(30,100).size(300,50)
  mail.mousePressed(() => {
    skriv.hide()
    mail.hide()
    LæsMail();
  })
  skriv.mousePressed(()=>{
    skriv.hide()
    mail.hide()
    SkrivMail();
  })
  }
    
  function LæsMail(){
    t = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta facilisis tempus. Aenean mi nibh, ultrices ac tincidunt quis, pulvinar sit amet sem. Cras tempus imperdiet lacinia. Praesent sagittis porttitor sapien nec consequat. Nunc congue commodo neque sit amet ullamcorper. Mauris eu dolor in felis fringilla ornare eu euismod est."
    fill(157,218,255)
    rect(30,10,300,50,45)
    Tilbage = createButton("Tilbage").position(50,25)
    Tilbage.mousePressed(()=>{
      Tilbage.hide()
      Svar.hide()
      Slet.hide()
      mailListe()
    })
    fill(157,218,255)
    rect(30,100,300,300,45)
    fill("black")
    text(t,50,150,280,200)
    Svar = createButton("Svar").position(150,500)
    Slet = createButton("Slet").position(280,25)
  }
  
  function SkrivMail(){
    fill(157,218,255)
    rect(30,10,300,50,45)
    Tilbage = createButton("Tilbage").position(50,25)
    Tilbage.mousePressed(()=>{
      Tilbage.hide()
      tekstFelt.hide()
      tilFelt.hide()
      mailListe()
    })
    tekstFelt = createInput("Skriv din mail her").position(30,170).size(300,200)
    tilFelt = createInput("Til:").position(30,100).size(300,50)
  }

  
  

  mailListe()
  

}

