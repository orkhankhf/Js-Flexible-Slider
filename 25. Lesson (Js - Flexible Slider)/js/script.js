/* flexible parameters */
var sliderWidth = 550;
var sliderHeight = 350;
var wrapperTopMargin = 50;
var desctriptionColor = "white";
var desctriptionBgColor = "rgba(1,1,1,0.7)";
var desctriptionTextAlign = "center";
var imageSources = [["img/1.jpg","1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc iaculis dolor sodales est sagittis pellentesque. In sit amet imperdiet neque. Integer venenatis pretium ex at consectetur."],["img/2.jpg","2. Aenean eget finibus nisi. Vivamus ut finibus orci. Vestibulum tortor sem, lacinia nec risus id, mattis ultricies purus."],["img/3.jpg","3. Phasellus laoreet, eros sed finibus convallis, turpis lacus tempus lorem, in finibus metus nisl ut ipsum. Pellentesque blandit rhoncus pharetra."],["img/4.jpg","4. Integer tincidunt quam sapien, ac porta nisl congue at. Curabitur dictum porttitor diam vitae ultrices."],["img/5.jpg","5. Pellentesque faucibus sapien sit amet mi laoreet, sit amet aliquam tellus pulvinar."],["img/6.jpg","6. Morbi ultrices est neque, at auctor justo sodales sed. Ut fringilla congue posuere."],["img/7.jpg", "7. Sed commodo rhoncus diam quis finibus. Aliquam euismod ligula vitae sodales bibendum."]];


/* creating elements */
var wrapper = document.createElement("div");
var slider = document.createElement("img");
var leftArrow = document.createElement("button");
var rightArrow = document.createElement("button");
var desctription = document.createElement("p");


/* appending elements */
document.body.appendChild(wrapper);
wrapper.appendChild(slider);
wrapper.appendChild(leftArrow);
wrapper.appendChild(rightArrow);
wrapper.appendChild(desctription);


/* giving a attributes */
wrapper.setAttribute("class", "wrapper");
slider.setAttribute("class", "slider");
leftArrow.setAttribute("class", "btns btn-left");
leftArrow.setAttribute("onclick", "previus()");
leftArrow.innerHTML="<<";
rightArrow.setAttribute("class", "btns btn-right");
rightArrow.setAttribute("onclick", "next()");
rightArrow.innerHTML=">>";
desctription.setAttribute("class", "desctription");


/* flexible styling */
wrapper.style.width = sliderWidth+"px";
wrapper.style.height = sliderHeight+"px";
wrapper.style.margin = wrapperTopMargin+"px auto";
desctription.style.color = desctriptionColor;
desctription.style.background = desctriptionBgColor;
desctription.style.textAlign = desctriptionTextAlign;


/* functions */
var currentImage = 0;
var imageCount = imageSources.length-1;

function previus(){
	if(currentImage == 0){
		currentImage = imageCount;
		slider.setAttribute("src",imageSources[imageCount][0]);
		desctription.innerHTML=imageSources[imageCount][1];
	}else{
		currentImage--;
		slider.setAttribute("src",imageSources[currentImage][0]);
		desctription.innerHTML=imageSources[currentImage][1];
	}
}

function next(){
	if(currentImage == imageCount){
		currentImage=0;
		slider.setAttribute("src", imageSources[currentImage][0]);
		desctription.innerHTML=imageSources[currentImage][1];
	}else{
		currentImage++;
		slider.setAttribute("src", imageSources[currentImage][0]);
		desctription.innerHTML=imageSources[currentImage][1];
	}
}


/* first loading */
slider.setAttribute("src", "img/1.jpg");
desctription.innerHTML=imageSources[currentImage][1];