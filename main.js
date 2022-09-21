import $ from 'jquery'
import './style.css'


function marqueeText(t, v) {
  $('#marquee .mtxt').html(t).attr('scrollamount', v);
}

function getData() {
  let txt = 'This text is going to be marqueed.';
  let scroll = 20;
  let u = new URL(window.location.href);

  if (!(() => u.searchParams.get('crisis'))()) {
    txt = prompt("Enter anything: ") || txt;
    scroll = prompt("Enter scroll velocity: ", 20) || scroll;
    location.href = (() => {
      
      u.searchParams.append("crisis", "no");
      u.searchParams.append("text", txt);
      u.searchParams.append("scroll", scroll+"");
      return u;
    })();
  }else {
    txt = u.searchParams.get('text');
    scroll = +u.searchParams.get('scroll')
  }
  return [txt, scroll];
}

$(async function () {


  let dat = getData();
  try {
    await screen.orientation.lock('landscape');
  }catch(err){
    console.log(err);
  }
  // pass


  $("#app").html(`<div class="marquee" id="marquee"><marquee class="mtxt" scrollamount="20" ></marquee></div>`);
  screen.orientation.lock('landscape');

  marqueeText(...dat);
});

window.ondblclick = () => {
  openFullscreen($('html')[0]);
}
let paused = false;
window.onclick = () => {
  let m = $('marquee')[0];
  paused = !paused;
  if (paused) {
    m.stop();
  } else {
    m.start();
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
