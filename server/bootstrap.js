import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if(Polls.find().count() === 0){
  	var samplePolls = [
  		{
  			question: "Is Meteor awesome?",
  			choices:[
  				{text: 'Of course!', votes: 0},
  				{text: 'Eh', votes: 0},
  				{text: 'No. I like plain JS', votes: 0}
  			]
  		},
  		{
	        question: 'Is CSS3 Flexbox the greatest thing since array_slice(bread)?',
	        choices: [
	          { text: '100% yes', votes: 0 },
	          { text: '200% yes', votes: 0 },
	          { text: '300% yes', votes: 0 }
	        ]
	    }
  	];

  	_.each(samplePolls, function(poll) {
      Polls.insert(poll);
    });

  }
});
