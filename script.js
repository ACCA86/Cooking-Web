const landpage_container = document.querySelector('.landpage_container');
const landpage = document.querySelector('.landpage');
const image = document.querySelectorAll('.landpage img');
const video = document.querySelector('#videos');
const videoIcon = document.querySelector('#video_icon');
const videoButton = document.querySelector('#video_button');
const arrow_up = document.querySelector('#arrow-scroll-up');
const dark_theme = document.querySelector('.dark_theme');

dark_theme.addEventListener('click',()=>{
	document.body.classList.toggle('dark_theme');
})
let i = 0;
const slideWidth = image[i].clientWidth;



const scrolltop = ()=>{
	var topDistance = (document.documentElement && document.documentElement.scrollTop) ||  document.body.scrollTop;	
	if(window.scrollY >= 550){
	 arrow_up.style.display="inline-block";
    }else{
    arrow_up.style.display="none";

}
}

window.addEventListener('scroll',scrolltop);
window.addEventListener('load',scrolltop);

const scrollEffect = ()=>{
	const reveals = document.querySelectorAll('.reveal');
	for(var i = 0; i < reveals.length; i++){
		const page = window.innerHeight;
	    const scrollTop = reveals[i].getBoundingClientRect().top;
	    let point = 180;
	    if(scrollTop < page - point) {
		reveals[i].classList.add('effect');
	}else{reveals[i].classList.remove('effect');}
	}
	
}
window.addEventListener('scroll',scrollEffect);


const Slidermove = ()=>{
	i++;
	if(i <= image.length){
		landpage.style.transform="translateX(" + i*(-slideWidth) + "px)";
	}if(i == image.length){
		i = 0;
		landpage.style.transform="translateX(" + i*(-slideWidth) + "px)";
		landpage.style.transition= "none";
	}
}

setInterval(Slidermove,5000);

const play = ()=>{
	if(video.paused){
		video.play();
		videoIcon.classList.add('ri-pause-circle-line');
		videoIcon.classList.remove('ri-play-circle-line');
	}else{
		video.pause();
		videoIcon.classList.add('ri-play-circle-line');
		videoIcon.classList.remove('ri-pause-circle-line');
	}
}

const finalvideo = ()=>{
	video.pause();
	videoIcon.classList.remove('ri-pause-circle-line');
	videoIcon.classList.add('ri-play-circle-line');
}


videoButton.addEventListener('click',play);
video.addEventListener('ended',finalvideo);


