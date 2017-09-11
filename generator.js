 function generator(){

   var adjectives = [
     "Crazy", "Rabid", "Snarky", "Sly", "Quick", "Loco", "Bloody",
     "Psycho", "Brave", "Old Dirty", "Wise", "Deadly", "Dirty", "Arrogant",
     "Killer", "Lethal", "Terrible", "Witty", "Brillant", "Silent", "Psycho",
     "Drunken", "Zen", "Meditating", "Lurking", "Hidden", "Dangerous",
     "Ghostface", "Masked", "Flying", "Disappering", "Quick", "Aggressive",
     "Tempramental", "Lucid", "Lazy", "Chaotic", "Fast", "Snappy",
     "Diabolical", "Astral", "Cosmic", "Thunderous", "Adventerous", "Skilled",
     "Manical", "Metaphysical"
   ];

   var animals = [
     "Fox", "Monkey", "Tiger", "Dragon", "Swan", "Eagle",
     "Bull", "Scorpion", "Frog", "Snake", "Spider", "Bat",
     "Mongoose", "Lemur", "Rabbit", "Boar", "Mantis", "Cricket",
     "Lion", "Elephant", "Jackal", "Mosquito", "Wasp",
     "Beetle", "Hornet", "Ant", "Hyena", "Crocodile", "Wolf",
     "Jaguar", "Leopard", "Buffalo", "Cougar", "Hawk", "Butterfly",
     "Kangaroo", "Octopus", "Shark", "Squid", "Kraken", "Thunderbird",
     "Dog", "Cat", "Sasquatch", "Bear", "Deer", "Badger", "Wolverine",
     "Dove", "Cobra", "Mamba", "Rattlesnake", "Lizard"
   ];

   var quotes = [
     "Live by the sword.",
     "Study the moon to gain perspective.",
     "Darkness is your friend and your opponent's nightmare!",
     "Strike without hesistation or death becomes you.",
     "Live with honor, fight dirty.",
     "The Pen is mightier than the sword.",
     "If your opponent doesn't kill you he has underestimated you.",
     "Water can be gentle or hard.",
     "The lotus is the giver of life.",
     "Meditate on the cosmos.",
     "Balance is key in life.",
     "The student with no master is lost.",
     "War is an art of deception and perception.",
     "Study the enemy and strike at a moment of weakness.",
     "The sun shines on shady personalities.",
     "Your mind is your greatest weapon.",
     "Sharp is the sword that strikes only when neccesary.",
     "Truth is like sunlight, it shines through the clouds.",
     "Strike like lightning so they never hear the thunder.",
     "Stand for a righteous cause.",
     "Believe in the universe, everything will fall in place.",
     "Narrow is the mind that can't think outside the box.",
     "Never underestimate the power of the slight of hand.",
     "Anger dulls the senses.",
     "Even hardened killers can show mercy.",
     "Weave your words like wind.",
     "A game of chess is like a sword fight, think or lose.",
     "Conquer yourself before you try to conquer others."
   ];
   var stones =[
     "Amethyst", "Rose Quartz", "Opal", "Onyx", "Amber", "Sapphire",
     "Emerald", "Jade", "Turquoise", "Lapis Lazuli", "Pearl", "Ruby",
     "Agate", "Peridot", "Tanzanite", "Malachite", "Tourmaline", "Jasper",
     "Sapphire", "Carnelian", "Citrine"
   ];

   var numbers = [
     "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13",
     "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25",
     "26", "27", "28", "29", "30"
   ];

   //this will make random numbers for adjectives, animals, quotes, stones and #'s
   var randomNumber1 = parseInt(Math.random() * adjectives.length);
   var randomNumber2 = parseInt(Math.random() * animals.length);
   var randomNumber3 = parseInt(Math.random() * quotes.length);
   var randomNumber4 = parseInt(Math.random() * stones.length);
   var randomNumber5 = parseInt(Math.random() * numbers.length);
   var name = adjectives[randomNumber1] + " " + animals[randomNumber2];
   var haiku = quotes[randomNumber3];
   var lucky = "Lucky Stone: " + stones[randomNumber4];
   var num = "Lucky Number: " + numbers[randomNumber5];


   //If there is already a name it will be removed..
   if(document.getElementById("result")){
     document.getElementById("placeholder").removeChild(document.getElementById("result"));
   }

   if(document.getElementById("result")){
     document.getElementById("placeholder2").removeChild(document.getElementById("result"));
   }

   if(document.getElementById("result")){
     document.getElementById("placeholder3").removeChild(document.getElementById("result"));
   }
   if(document.getElementById("result")){
     document.getElementById("placeholder4").removeChild(document.getElementById("result"));
   }


   //div will be created with randomly generated name
   var element = document.createElement("div");
   //name is added as textnode which is added to a placeholder.
   element.setAttribute("id", "result");
   element.appendChild(document.createTextNode(name));
   document.getElementById("placeholder").appendChild(element);

   //div will be created with randomly generated quote
   var element = document.createElement("div");
   //haiku is added as textnode which is added to a placeholder.
   element.setAttribute("id", "result");
   element.appendChild(document.createTextNode(haiku));
   document.getElementById("placeholder2").appendChild(element);

   //div will be created with randomly generated lucky stone
   var element = document.createElement("div");
   //lucky stone is added as textnode which is added to a placeholder.
   element.setAttribute("id", "result");
   element.appendChild(document.createTextNode(lucky));
   document.getElementById("placeholder3").appendChild(element);

   //div will be created with randomly generated lucky number
   var element = document.createElement("div");
   //number is added as textnode which is added to a placeholder.
   element.setAttribute("id", "result");
   element.appendChild(document.createTextNode(num));
   document.getElementById("placeholder4").appendChild(element);
 }
