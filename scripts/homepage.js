var API = (() => {
    var divContainer = [];

    var divChoice = (s) =>{
        var output = ""; 
        var href = ""; 
        var hrefTitle = ""; 
        var divOutput = document.getElementById("descriptions");
        divOutput.innerHTML = ""; 
        switch(s){
            case 0:
                output = "CHESS VALIDATION PROJECT \nThis project was the homework assignment for the Software Verification and Validation class (SE 575). The main goal of the assignment was to create a console application in which you could input piece positions of both players' piece positions, and specifically check a specific piece's valid moves.";
                href = "https://gitlab.com/WFaustin/chessvalidationprojectse576";
                hrefTitle = "Chess Validation Software";
                break; 
            case 1:
                output = "RAGBALL \nRagBall is 4 player local party game where players are split of into teams of 2, and try to win by throwing their opponents into their respective goals. The game utilizes ragdoll physics, and as such, teammates will have to communicate and plan with each other to win the game with a use of their special abilities and attributes. (Made in GMAP 378)";
                href = "https://sites.google.com/view/massiveshrimpgames/home";
                hrefTitle = "Ragball Website";
                break; 
            case 2:
                output = "ROBOARENA \nRoboArena is a single player endless game where a player controls a robot whose goal is to survive each wave by killing each enemy in the wave. Killing enemies can drop special powerups that can make your robot stronger. (Made in GMAP 260)";
                href = "https://bitbucket.org/CBrice562/roboarena/src/master/";
                hrefTitle = "Robo-Arena Bitbucket";
                break;
            case 3:
                output = "SONE \nSone is a 2 player co-op horror game where the goal is to escape a church inhabited by a blind demon wanting to kill both of you. While the demon can't see, its hearing is impeccable, so you and your teammate has to work together to mislead the demon as you explore the demonic remains of the church. (Made in GMAP 377)";
                href = "https://github.com/ctd58/Respite/tree/master/Pages%20Wanted";
                hrefTitle = "Sone Github";
                break; 
            case 4:
                output = "CHECKERS \nCheckers is a project that takes the board game and transforms it into a Unity game. The special part of this game is that it uses networking for players to play, instead of just playing on one screen. (Made in CS 451)";
                href = "https://github.com/das446/Checkers";
                hrefTitle = "Networking Checkers Github";
                break;
            case 5:
                output = "CHINESE CHECKERS \nChinese Checks is another project that takes the board game, but instead of a Unity game, it was made into a Java Swing Window Application. This game doesn't have AI support, but up to six players can play against each other. (Made in CS 338)";
                href = "https://github.com/WFaustin/ChineseCheckers";
                hrefTitle = "Chinese Checkers Java Swing Application Github";
                break;
            case 6:
                output = "SANCTUS FORTIS \nSanctus Fortis is a single player platform game that takes inspiration from Greek mythology. You play as an undead hero who serves Hades as his champion, going around and fighting monsters to challenge other gods' champions. (Made in CS 345) ";
                href = "https://github.com/das446/SanctusFortis";
                hrefTitle = "Sanctus Fortis Github";
                break;
            case 7:
                output = "DISCORD POKEMON RANDOMIZER BOT \nThis project is a individual side project that I developed in order for my friends and I to be able to play randomized pokemon games competitively against each other. This bot holds all of the player information about their roms, and then can output it depending on what each member asks for.";
                href = "https://gitlab.com/WFaustin/discordrandomizerbot";
                hrefTitle = "Discord Randomizer Bot Github";
                break;
            case 8:
                output = "SMALL GODOT TEST GAME\nThis project is a simple Godot game I followed from a tutorial I found. I wanted to get some experience with Godot and test how the HTML5 build feels. The link to the project is https://github.com/WFaustin/SmallGodotGame. The button below will take you to the game. CONTROLS are Left Arrow, Right Arrow, and SpaceBar/Up Arrow";
                href = "https://wfaustin.github.io/SmallGodotGame/";
                hrefTitle = "Play The Small Godot Game";
                break;
            case 9:
                output = "GODOT MATCH 3 GAME\nThis Basic Match 3 Game was another game I followed from a tutorial, although I made some minor changes to the code that I felt would better suit my experience with making the game. I plan to build off of this idea in a new project that incorporates Match 3 elements.";
                href = "https://wfaustin.github.io/GodotMatch3Game/";
                hrefTitle = "Play The Godot Match 3 Game";
                break;
            case 10:
                output = "MATCH 3 RTS GAME\nA more novel idea based on earlier prjects, this game is made to be a RTS tower defense game where the player gets access to the RTS units by matching 3 or more tiles on the grid. ";
                href = "https://wfaustin.github.io/Match3RTSGodot/";
                hrefTitle = "Play My Prototype Match 3 RTS Game";
                break;
            case 10:
                output = "FIFTYTWO\nA game that is a first person shooter, and replaces the guns and bullets with cards. ";
                href = "https://wfaustin.github.io/CardShooter/";
                hrefTitle = "Play FiftyTwo";
                break;
            default:
                output = ""; 
                break;
        }
        console.log(output); 
        //Makes the paragraph elements
        var par = document.createElement("div"); 
        var par2 = document.createElement("div");
        var links = document.createElement("a"); 
        par.setAttribute("class", "despar");
        par2.setAttribute("class", "despar2");
        links.setAttribute("class", "projectLinks");
        links.setAttribute("href", href); 
        //Splits the output message and appends them properly
        var outputSplit = output.split("\n"); 
        var o1 = document.createTextNode(outputSplit[0]);
        var o2 = document.createTextNode(outputSplit[1]);
        par.appendChild(o1);
        par2.appendChild(o2);
        links.appendChild(document.createTextNode(hrefTitle));
        //Adds it to the HTML 
        divOutput.appendChild(par);
        divOutput.appendChild(par2);
        divOutput.appendChild(links); 
    }

    return{
        divChoice
    }

})(); 