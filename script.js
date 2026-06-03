function setupIntro() {
    var intro = document.getElementById('intro');
    if (!intro) {
        return;
    }
    var navType = 'navigate';
    var navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
        navType = navEntries[0].type;
    }
    if (navType === 'reload') {
        sessionStorage.removeItem('entered');
    }
    if (sessionStorage.getItem('entered') === 'yes') {
        intro.style.display = 'none';
    } else {
        intro.style.display = 'block';
    }
}

function enterSite() {
    sessionStorage.setItem('entered', 'yes');
    var intro = document.getElementById('intro');
    intro.style.opacity = '0';
    intro.style.visibility = 'hidden';
}

setupIntro();

function showGaming() {
    document.getElementById('hobby-detail').innerHTML =
        '<h3>Gaming</h3>' +
        '<p>I play a wide range of computer games. My favourite is Counter-Strike. Here are some pictures. One is the Shanghai Major (biggest competition in CS), where I watched the finals in the stadium. The other is the Steam showcase of part of my games.</p>' +
        '<img src="SH Major.jpeg" alt="Shanghai Major CS finals in the stadium">' +
        '<br>' +
        '<img src="showcase.png" alt="Steam showcase of part of my games">';
}

function showMusic() {
    document.getElementById('hobby-detail').innerHTML =
        '<h3>Music</h3>' +
        '<p>I am a huge music lover. I enjoy music of many genres. These are the live photos of my two favourite singers: David Tao &amp; Ye.</p>' +
        '<img src="SP2.jpeg" alt="David Tao live performance">' +
        '<br>' +
        '<img src="yeye.jpeg" alt="Ye live performance">';
}

function showSports() {
    document.getElementById('hobby-detail').innerHTML =
        '<h3>Sports</h3>' +
        '<p>Life is in motion. I participate in lots of sports and I gained happiness, friendship and a healthy life from sports.</p>' +
        '<img src="cjswo.jpeg" alt="Hockey champion with my friend">' +
        '<br>' +
        '<img src="CFASH.jpeg" alt="Shanghai Shenhua CFA champion">';
}

function showBarcelonaPhoto() {
    var modal = document.getElementById('barca-modal');
    modal.style.transition = 'none';
    modal.style.visibility = 'visible';
    modal.style.opacity = '0';
    modal.offsetHeight;
    modal.style.transition = 'opacity 0.7s ease-in-out';
    modal.style.opacity = '1';
}

function closeModal() {
    var modal = document.getElementById('barca-modal');
    modal.style.transition = 'opacity 0.7s ease-in-out, visibility 0s linear 0.7s';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
}

function closeModalOnBackground() {
    if (event.target.tagName !== 'IMG') {
        closeModal();
    }
}

var speechRate = 1;

function readPage() {
    window.speechSynthesis.cancel();
    var msg = new SpeechSynthesisUtterance(document.getElementById('main-content').innerText);
    msg.lang = 'en-US';
    msg.rate = speechRate;
    msg.onend = function() {
        document.getElementById('btn-stop').innerHTML = '<span style="font-size: 1.4em;">&#9632;</span> Stop';
    };
    window.speechSynthesis.speak(msg);
    document.getElementById('btn-stop').innerHTML = '&#10074;&#10074; Playing';
}

function stopReading() {
    window.speechSynthesis.cancel();
    document.getElementById('btn-stop').innerHTML = '&#9632; Stop';
}

function setSpeed(rate, btnId) {
    speechRate = rate;
    document.getElementById('btn-05').style.backgroundColor = 'darkblue';
    document.getElementById('btn-1').style.backgroundColor = 'darkblue';
    document.getElementById('btn-15').style.backgroundColor = 'darkblue';
    document.getElementById('btn-2').style.backgroundColor = 'darkblue';
    document.getElementById(btnId).style.backgroundColor = 'darkred';
}

var ttsOpen = true;

function toggleTTS() {
    var wrap = document.getElementById('tts-wrap');
    var bar = document.getElementById('tts-bar');
    var arrow = document.getElementById('tts-arrow');
    if (ttsOpen) {
        wrap.style.bottom = '-' + bar.offsetHeight + 'px';
        arrow.innerHTML = '&#9650;';
        ttsOpen = false;
    } else {
        wrap.style.bottom = '0';
        arrow.innerHTML = '&#9660;';
        ttsOpen = true;
    }
}
