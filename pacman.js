            // if (document.readyState == 'loading') {
            //     console.log("Loading");
            //     document.getElementById('board').innerHTML = "loadingggg";
            // }
            var rowColArray = [
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [1, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1],
                [1, 2, 0, 2, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 1, 1, 0, 2, 2, 3, 1, 0, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 1, 2, 1],
                [1, 2, 3, 2, 1, 1, 2, 3, 1, 1, 1, 2, 3, 2, 1, 1, 0, 2, 2, 1, 1, 0, 2, 3, 1, 1, 0, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1],
                [1, 2, 1, 3, 1, 1, 2, 3, 1, 1, 1, 2, 3, 2, 1, 1, 0, 1, 2, 1, 1, 0, 2, 2, 1, 1, 0, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 1],
                [1, 1, 3, 2, 1, 1, 2, 3, 2, 1, 1, 2, 3, 2, 1, 1, 0, 2, 2, 1, 1, 0, 2, 2, 1, 3, 0, 2, 2, 1],
                [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 1, 1],
                [1, 2, 3, 2, 1, 1, 2, 3, 2, 1, 1, 2, 3, 2, 1, 1, 0, 2, 3, 1, 1, 1, 2, 2, 1, 1, 1, 2, 2, 1],
                [1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 2, 1],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            ]

            var colClass = {
                0: 'path',
                1: 'wall',
                2: 'goldCoin',
                3: 'ongiri',
            }
            var pacman = {
                x: 1,
                y: 1
            }
            var score = 0;

            function createBoard() {
                var board = "";
                for (var row = 0; row < rowColArray.length; row++) {

                    board += "<div class= 'row'>"
                    for (var col = 0; col < rowColArray[row].length; col++) {
                        var cls = colClass[rowColArray[row][col]];
                        board += "<div class = " + cls + "></div>"
                    }
                    board += "</div>"

                }
                document.getElementById('board').innerHTML = board;
            }
            createBoard();


            function changePosition() {
                document.getElementsByClassName('pacman')[0].style.left = pacman.x * 20 + 340 + 'px';
                document.getElementsByClassName('pacman')[0].style.top = pacman.y * 20 + 150 + 'px';
                document.getElementById('score').innerHTML = score;
            }
            changePosition();

            document.onkeydown = function(e) {
                if (e.code == "ArrowDown") {
                    if (rowColArray[pacman.y + 1][pacman.x] != 1) {
                        pacman.y++;
                    }
                }
                if (e.code == "ArrowUp") {
                    if (rowColArray[pacman.y - 1][pacman.x] != 1) {
                        pacman.y--;
                    }
                }
                if (e.code == "ArrowRight") {
                    if (rowColArray[pacman.y][pacman.x + 1] != 1) {
                        pacman.x++;
                    }

                }
                if (e.code == "ArrowLeft") {
                    if (rowColArray[pacman.y][pacman.x - 1] != 1) {
                        pacman.x--;
                    }
                }

                if (rowColArray[pacman.y][pacman.x] == 2) {

                    score += 10;
                } else if (rowColArray[pacman.y][pacman.x] == 3) {
                    score += 30;
                }

                rowColArray[pacman.y][pacman.x] = 0;


                createBoard();
                changePosition();

            }








            var ghosts = [{
                    x: 1,
                    y: 6
                },
                {
                    x: 6,
                    y: 1
                }
            ]






            function movingGhost() {
                for (var num = 0; num < ghosts.length; num++) {
                    document.getElementsByClassName('ghosts')[num].style.left = ghosts[num]['x'] * 40 + 'px';
                    document.getElementsByClassName('ghosts')[num].style.top = ghosts[num]['y'] * 40 + 'px';
                    if (rowColArray[ghosts[num]['y'] + 1][ghosts[num]['x']] != 1) {
                        ghosts[num]['y']++;

                    } else if (rowColArray[ghosts[num]['y']][ghosts[num]['x'] + 1] != 1) {
                        ghosts[num]['x']++;
                    }

                    if (pacman['x'] == ghosts[0]['x'] && pacman['y'] == ghosts[0]['y']) {
                        clearInterval(clearinterval);
                    }

                }
            }
            // movingGhost();


            function drawLoop() {
                // movingGhost();
                // setTimeout(drawLoop, 1000);
            }





            // let pacmanPos = rowColArray[pacman.y][pacman.x];
            // let ghostPos = rowColArray[ghosts[0]['y']][ghosts[0]['x']];
            // console.log("pacmanPos", pacmanPos);
            // console.log("ghostPos", ghostPos);