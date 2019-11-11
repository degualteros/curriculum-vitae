const app = new Vue({
  el: "#app",
  data: {
    nombre: "David Eduardo Gualteros Gualtero",
    skills: [
      {nombre: "Java", icono: "https://image.flaticon.com/icons/svg/226/226777.svg"}, 
      {nombre: "JavaScript", icono: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/245px-Unofficial_JavaScript_logo_2.svg.png"},
      {nombre: "CSS", icono: "https://image.flaticon.com/icons/svg/919/919826.svg"},
      {nombre: "HTML 5", icono: "https://image.flaticon.com/icons/svg/174/174854.svg"},
      {nombre: "Python", icono: "https://image.flaticon.com/icons/svg/1822/1822899.svg"},
      {nombre: "MySQL", icono: "https://image.flaticon.com/icons/svg/1199/1199128.svg"},
      {nombre: "Vue jS", icono: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"},
      {nombre: "WordPress", icono: "https://image.flaticon.com/icons/svg/174/174881.svg"},
      {nombre: "Git", icono: "https://www.stickpng.com/assets/images/5847f981cef1014c0b5e48be.png"},
      {nombre: "GitHub", icono: "http://iconsetc.com/icons-watermarks/simple-yellow/bfa/bfa_brands-github-square/bfa_brands-github-square_simple-yellow_512x512.png"}
    ],
    derechos: "Creado por David G. 2019",

    proyectos: [
      {
        nombre: "Domicilio Sorpresa Jireh", 
        url: "www.domiciliosorpresa.com", 
        descripcion: "Tienda online, donde puedes comprar diferentes tipos de sorpresas a domicilio para un ser querido",
        logo: "https://www.domiciliosorpresa.com/wp-content/uploads/Imagenes/Logo-180x180-PNG.png"
      },
      {
        nombre: "Alecstom", 
        url: "www.alecstom.com", 
        descripcion: "Tienda online, productos relacionados con tecnologia de construccion liviana, desde materiales hasta sistemas de videoconferencia gerenciales",
        logo: "https://alecstom.com/wp-content/uploads/2018/07/alecstom-logo-03.jpg"
      },
      {
        nombre: "Ecoss ingeniería", 
        url: "www.ecossingenieria.com", 
        descripcion: "Empresa dedicada a la personalización y modernizacion de espacios de trabajo, salas de gerencia, etc.",
        logo: "https://www.ecossingenieria.com/wp-content/uploads/2019/01/Logo-Sin-Fondo.png"
      }
    ]
  }  
});