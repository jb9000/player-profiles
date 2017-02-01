// URL for the JSON file
var url = 'http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=2016-17&TeamID=1610612744';

// When the button is clicked, run this callback function
$('#quote').click(function() {

  // Retrieve the data from the JSON file
  $.getJSON (url, function(data) {
    var playerProfiles = [];
    
    // For each object in the JSON file, push a **Weight/Height/Player** array to the playerProfiles array.
    $.each(data, function( key, val ) {
      playerProfiles.push([key, val]);
    });
    
//     // Sort the playerProfiles array (default is alphabetical)
//     playerProfiles.sort();
    
//     var playerProfiles2 = [];
    
//     // For each subarray in the salaries2017 array, push an <li></li> entry into the salariesByTeam array.
//     $.each(playerProfiles, function(index, value){
//       playerProfiles2.push( "<li>" + value[0] + ', ' + value[1] + ', ' + value[2] + "</li>" );
//     });
    
//     console.log(playerProfiles);
    
    console.log(data);
 
    // Append a <ul> and the salariesByTeam array (500+ <li> entries, joined into a string) to the <body> element
    $( "<ul/>", {"class": "salary-list", html: playerProfiles.join("")
      }).appendTo( "body" );
    
  });
}); 
