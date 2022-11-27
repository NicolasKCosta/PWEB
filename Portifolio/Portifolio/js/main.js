 
  function enviarEmail() {
    const link =
      "https://mail.google.com/mail/?view=cm&fs=1&tf=0&to=nicolaskcosta@gmail.com";
    window.open(link, "_blank");
  }
  
  function trocaFoto(obj) {
    obj.src = "img/31.jpg";
  }
  
  function voltaFoto(obj) {
    obj.src = "img/3.jpg";
  }
  
  function enviarWhatsapp() {
    const link =
      "https://api.whatsapp.com/send?phone=5515991810248&text=Saudações! Estou precisando de alguém, está disponível para me ajudar? Podemos conversar?";
    window.open(link, "_blank");
  }