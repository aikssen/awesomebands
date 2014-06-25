(function(){
	//instance of the lib, and apply correct configuration
	var poller = new massrel.Poller({
      frequency: 15, //refresh every 15 seconds
      limit: 5 //get only 5 bands
    }, getBands);

	poller.start();

	//callback function for get the top 5 bands
	function getBands(bands){
		//handlebars template
		var source = '{{#each .}}<li class="list-group-item"><span class="badge">{{count}}<span class="units"> Mentions</span></span> {{name}}</li>{{/each}}';
    	//compile the handlebars template
    	var template = Handlebars.compile(source);
    	$box = $('.bands-top-five');

    	//apply simple animation TODO: replace thsi with a css3 animation
		$box.fadeOut(300,function(){
			$box.fadeIn(300,function(){
				$box.html(template(bands));
			});
		}); 
	}

})();



