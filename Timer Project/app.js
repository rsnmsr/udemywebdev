const durationInput=document.querySelector("#duration");
const startBtn=document.querySelector("#start");
const endBtn=document.querySelector("#pause");

// Getting the circle element, obtaining the radius data from dom and setting perimeter 
const circle=document.querySelector('circle');
const perimeter=circle.getAttribute('r')*2*Math.PI;
circle.setAttribute('stroke-dasharray',perimeter);

let duration;
const timer=new Timer(durationInput,startBtn,endBtn,{
	onStart(totalDuration){
		duration=totalDuration;
	},
	onTick(timeRemaining){
		
		circle.setAttribute('stroke-dashoffset',
		(perimeter*timeRemaining/duration)-perimeter
		);
		

	},
	onComplete(){
	console.log("Timer Stopped")	
	}
});


