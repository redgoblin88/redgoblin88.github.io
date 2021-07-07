function shuffle(string){
	
	
	var position = document.getElementById("order").value;
	//console.log(string);
	switch (string){
		
		case 0:
		document.getElementById('pos'+position).innerHTML=position+". The cost of oneself is the very definition of a hero\n";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 1:
		document.getElementById('pos'+position).innerHTML=position+". Heroes are the people that stand up on behalf of others, they don";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 2:
		document.getElementById('pos'+position).innerHTML=position+". Say to you when you are struggling... 'do you want a hand?'";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 3:
		document.getElementById('pos'+position).innerHTML=position+". Other times we pay lip service to their achievements.";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 4:
		document.getElementById('pos'+position).innerHTML=position+". Next time you have the opportunity to help someone reach out and";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 5:
		document.getElementById('pos'+position).innerHTML=position+". Armour and fight against all kinds of trouble, they can be";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 6:
		document.getElementById('pos'+position).innerHTML=position+". Now is the time we need to look around, at the people working hard to defend us";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 7:
		document.getElementById('pos'+position).innerHTML=position+". Of the fight, so keep calm, treat others with the respect they deserve as fellow humans";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 8:
		document.getElementById('pos'+position).innerHTML=position+". Having the strength to stand up and do what is needed even at";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 9:
		document.getElementById('pos'+position).innerHTML=position+". Everyone would be better in a world that helps eachother";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 10:
		document.getElementById('pos'+position).innerHTML=position+". soldiers fire fighters medical workers even humble cleaners";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 11:
		document.getElementById('pos'+position).innerHTML=position+". No one should be left behin. the future is a journey, one we all walk together.";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 12:
		document.getElementById('pos'+position).innerHTML=position+". At times we lose sight of this ideal and have";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 13:
		document.getElementById('pos'+position).innerHTML=position+". Each of us has the ability to be a hero even if what you are doing seems minor";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 14:
		document.getElementById('pos'+position).innerHTML=position+". Each one protects us in a different way but all deserve respect for their part ";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 15:
		document.getElementById('pos'+position).innerHTML=position+". [[UNKNOWN]]";
		document.getElementById('neworder'+string).innerHTML = position;
		break;
		case 16:
		document.getElementById('pos'+position).innerHTML=position+". [[UNKNOWN]]";
		break;
		case 17:
		document.getElementById('pos'+position).innerHTML=position+". [[UNKNOWN]]";
		break;
		case 18:
		document.getElementById('pos'+position).innerHTML=position+"";
		break;
			
		
		
		default:
		document.getElementById("output").innerHTML="Something went wrong! error: "+string+":"+position;
		break;
	}
}
