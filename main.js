import $ from 'jquery'
import './style.css'


function marqueeText(t,v){
  $('#marquee .mtxt').html(t).attr('scrollamount',v);
}

$(async function(){



  let txt = 'This text is going to be marqueed.';
  txt = prompt("Enter anything: ") || txt;
  let scroll = prompt("Enter scroll velocity: ",20);


  $("#app").html(`<div class="marquee" id="marquee"><marquee class="mtxt" scrollamount="20" ></marquee></div>`);

  marqueeText(txt,scroll);
});

window.ondblclick = ()=>{
  openFullscreen($('html')[0]);
}
let paused = false;
window.onclick = ()=>{
  paused = !paused;
  if(!paused){
    $('#marquee').stop();
  }else {
    $('#marquee')[0].start();
  }
}

function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
