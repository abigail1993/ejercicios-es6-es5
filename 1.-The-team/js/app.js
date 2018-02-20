

         // ES5

// declaracion de las variables
/*
var [teachersTeam, members] = [
  'formacion',
     ['Amalia',
      'Karla',
      'Silvana',
      'Manu',
      'Jonh',
      'Mike'
    ],
];

var formatTeamMessage = function (teachersTeam, members) {
  var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
  console.log(message)
  return message;
};

formatTeamMessage(teachersTeam, members);
*/
// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables

 let [teamName, product] = [
   'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
 ];


 let formatTeamMessage = (teamName, people) => `Hay ${people.length} personas en el equipo de ${teamName}.
 Ellos son:  ${people.join(', ')}.`;
   // escribe tu código en ES6 aqui...

 let message = formatTeamMessage(teamName, product);
 console.log(message);
