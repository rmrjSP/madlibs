var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    noun1: "cat",
    verb1: "run",
    adjective1: "fat",
    noun2: "building",
    verb2: "paint",
    adjective2: "dumb"
  });
});


router.post('/story', function(req,res){
  let body= req.body;
  let newStory =getStory(body);
  res.render('story', {
    newStory: newStory
  })
})


router.post('/random', function(req,res){
  res.render('index', {
    color: generateRandomHexCode(),
    textColor: generateRandomHexCode()
  })
})
module.exports = router;

function getStory(formData) {
  if(formData.storyChoice === "1"){
    return generateStory1(formData);
  }else if(formData.storyChoice === "2"){
    return generateStory2(formData);
  }else if(formData.storyChoice === "3"){
    return generateStory3(formData);
  }else if(formData.storyChoice === "4"){
    return generateRandomStory(formData)
  }else {
    return "invalid";
  }
}

function generateStory1(formData){
  return `There was a ${formData.adjective1} ${formData.noun1}.  that some ${formData.adjective2} ${formData.noun2} ${formData.verb1} and ${formData.verb2}. It was a great ${formData.noun1}.`
}
function generateStory2(formData){
  return `A ${formData.noun1} was very ${formData.adjective1}. The ${formData.noun1} loved to ${formData.verb1}. Then a  ${formData.adjective2} ${formData.noun2} ${formData.verb2} him.`
}
function generateStory3(formData){
  return `Twas was a bright and sunny ${formData.noun1}. Then a  ${formData.adjective1}  ${formData.noun2} started ${formData.verb1}. It was later stopped by a ${formData.adjective2} ${formData.noun2} who ${formData.verb1} it.`
}
function generateRandomStory(formData){
  



}


function generateRandomHexCode(){
  let hexCode = "#"
  while ( hexCode.length < 7) {
    hexcode += (Math.round(Math.random() * 15)).toString(16)
  }
  return hexCode
}

