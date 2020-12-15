 // variable for menuknap og menu
 var menu = document.querySelector(".menu")
 var menuknap = document.querySelector(".menuknap")

 window.addEventListener("load", sidenVises);

 function sidenVises() {
     console.log("sidenVises");
 }


 // ved klik på menuknap --> toggleMenuKnap
 menuknap.addEventListener("click", toggleMenuKnap)

 // vis menuen --> (trasnlateX(0%)) aktiveres
 function toggleMenuKnap() {
     console.log("toggleMenuKnap");
     menu.classList.toggle("menuknap_aktiv")
 }


 //window.addEventListener("load", sidenVises);
 //
 //function sidenVises() {
 //    console.log("sidenVises");



 // toggle menuen når der klikkes på links

 //definer variablen menuLink
 // var menuLink = document.querySelectorAll(".menu")
 // menuLink.forEach(
 //         function (menuLink) {
 //             menuLink.addEventListener("click", toggleMenuKnap)
 //         }
 // )



 //  let menuSlide = () => {
 //        let menuknap = document.querySelector(".menuknap");
 //        let menu = document.querySelector(".menu");
 //    }


 // window.addEventListener("load", sidenVises);
 //
 // function sidenVises() {
 //     console.log("sidenVises");
 //     document.querySelector(".menuknap").addEventListener("click", toggleMenu);
 // }
 //
 // //Når vi klikker på "menuknappen" skal "menu" få klassen "menuknap_aktiv" så translateX bliver 0%
 //
 // function toggleMenu() {
 //     console.log("toggleMenu")
 //     document.querySelector(".menu").classList.toggle(".menuknap_aktiv");
 //
 //
 //     //     let erSkjult = document.querySelector(".menuknap").classList.contains(".menu");
 //     //
 //     //     if (erSkjult == true) {
 //     //         document.querySelector(".menuknap").textContent = "☰";
 //     //     } else {
 //     //         document.querySelector(".menuknap").textContent = "✕";
 //     //     }
 // }
 //




 //window.addEventListener("load", sidenVises);
 //
 //function sidenVises() {
 //    console.log("sidenVises");
 //    document.querySelector(".menuknap").addEventListener("click", toggleMenu);
 //}
 //
 //function toggleMenu() {
 //    console.log("toggleMenu")
 //
 //    document.querySelector(".menu").classList.toggle(".menuknap_aktiv");
 //
 //    //    indeholder nogle af klasserne hidden
 //    let erSkjult = document.querySelector(".menu").classList.contains(".menuknap_aktiv");
 //
 //    if (erSkjult == true) {
 //        document.querySelector(".menuknap").textContent = "☰";
 //    } else {
 //        document.querySelector(".menuknap").textContent = "✕";
 //




 //window.addEventListener("load", sidenVises);
 //
 //function sidenVises() {
 //    console.log("sidenVises");
 //    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
 //}
 //
 //function toggleMenu() {
 //    console.log("toggleMenu")
 //
 //    document.querySelector("#menu").classList.toggle("hidden");
 //
 //    //    indeholder nogle af klasserne hidden
 //    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
 //
 //    if (erSkjult == true) {
 //        document.querySelector("#menuknap").textContent = "☰";
 //    } else {
 //        document.querySelector("#menuknap").textContent = "✕";
 //
 //    }
 //
 //}
