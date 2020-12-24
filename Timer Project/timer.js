class Timer{
	constructor(durationInput,startBtn,endBtn,callbacks){
	this.durationInput=durationInput;
	this.startBtn=startBtn;
	this.endBtn=endBtn;
	if(callbacks){
		this.onStart=callbacks.onStart;
		this.onTick=callbacks.onTick;
		this.onComplete=callbacks.onComplete;
	}
	this.startBtn.addEventListener('click',this.start);
	this.endBtn.addEventListener('click',this.pause);
	}
	
	//starting the timer
	start=()=>{
		if(this.onStart){
			this.onStart(this.timeRemaining);
		}
		this.tick();
		this.interval=setInterval(this.tick,50);
		
	};
	
	//pausing the timer
	pause=()=>{
	    clearInterval(this.interval);	
	};
	
	//Start the timer
	tick=()=>{
		if(this.timeRemaining<=0){
			this.pause();
			if(this.onComplete){
				this.onComplete();
			}
		}else{
			this.timeRemaining=this.timeRemaining-0.05;
			if(this.onTick){
				this.onTick(this.timeRemaining);
			}
		}

		
	};
	
	//Getter and setter
	
	get timeRemaining(){
		return parseFloat(this.durationInput.value);
	};
	set timeRemaining(time){
		 this.durationInput.value=time.toFixed(2);
	}
	
}