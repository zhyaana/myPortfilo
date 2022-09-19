
$('.btn_nav').click(function() {
    // animate content
    $('.page__style').addClass('animate_content');
      // $('.page__description').fadeOut("200").delay(2800).fadeIn();
      $('.page__description').fadeIn();
  
    setTimeout(function() {
      $('.page__style').removeClass('animate_content');
    }, 3500);
   
    // //remove fadeIn class after 1500ms
    setTimeout(function() {
      $('.page__style').removeClass('fadeIn');
    }, 1500);
   
  });
  
  // on click show page after 1500ms
  $('.home_link').click(function() {
    setTimeout(function() {
      $('.home').addClass('fadeIn');
    }, 1500);
  });
  
  $('.projects_link').click(function() {
    setTimeout(function() {
      $('.projects').addClass('fadeIn');
    }, 1500);
  });
  
  $('.skills_link').click(function() {
    setTimeout(function() {
      $('.skills').addClass('fadeIn');
    }, 1500);
  });
  
  $('.about_link').click(function() {
    setTimeout(function() {
      $('.about').addClass('fadeIn');
    }, 1500);
  });
  
  $('.contact_link').click(function() {
    setTimeout(function() {
      $('.contact').addClass('fadeIn');
    }, 1500);
  });



  let box = document.querySelector(".box");
  
  // box.addEventListener("click" , e=>{
  //   let toggle =document.querySelector("a.toggle");
  //   if(toggle.classList.contains("icon-align-left")){
  //   toggle.classList.remove("icon-align-left")
  //   toggle.classList.add("icon-clear");
  // }
  //   else {
  //     toggle.classList.add("icon-align-left")
  //     toggle.classList.remove("icon-clear");
  //   }
  
  //   document.querySelector(".box ul.nav").classList.toggle("show");
  
  // });

  let boxes = document.querySelectorAll(".box");
  boxes.forEach(box=>{
    box.addEventListener("click" , e=>{
      let toggles =document.querySelectorAll("a.toggle");
      toggles.forEach(toggle=>{
        if(toggle.classList.contains("icon-align-left")){
          toggle.classList.remove("icon-align-left")
          toggle.classList.add("icon-clear");
        }
          else {
            toggle.classList.add("icon-align-left")
            toggle.classList.remove("icon-clear");
          }
        
         
        
        });


        let navs = document.querySelectorAll(".box ul.nav");
        navs.forEach(nav=>{
          nav.classList.toggle("show")
        }) 
        // document.querySelector(".box ul.nav").classList.toggle("show");
      })
})


//   const containerEl = document.querySelector(".container");
// const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];


// let careerIndex = 0;
// let characterIndex = 0;
// updateText();
// function updateText(){
//   characterIndex++;
//   containerEl.innerHTML=`<h1>I am ${careers[careerIndex].slice(0, 1)==="I" ? "an" : "a"} ${careers[careerIndex].slice(0, characterIndex)}</h1>`
  
//   if(characterIndex === careers[careerIndex].length){
//     careerIndex++;
//     characterIndex=0;
//   }
//   if(careerIndex === careers.length){
//     careerIndex=0;
//   }
//   setTimeout(updateText , 400)
// }
