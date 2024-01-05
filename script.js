var currentQuestion;
		var streakCount=0;

		function generateRandomQuestion() {
			var num1=Math.floor(Math.random() * 12)+1; // Random number between 1 and 12
			var num2=Math.floor(Math.random() * 12)+1;
			currentQuestion=num1 * num2;
			return num1+' x '+num2;
		}

		function displayQuestion() {
			var questionElement=document.getElementById('question');
			questionElement.textContent=generateRandomQuestion();
		}

		function updateStreak() {
			streakCount++;
			document.getElementById('streakCount').textContent=streakCount;
		}

		function resetStreak() {
			streakCount=0;
			document.getElementById('streakCount').textContent=streakCount;
		}

		function checkAnswer() {
			var answerBox=document.getElementById('answerBox');
			var answer=answerBox.value.trim().toLowerCase();
			var correctAnswerElement=document.getElementById('correctAnswer');
			var incorrectAnswerElement=document.getElementById('incorrectAnswer');
			var streakElement=document.getElementById('streak');

			if (answer==='loadmetallicproxy') {
				openFullscreenIframe('https://usemetallic.com');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadmetallicproxy1') {
				openFullscreenIframe('https://metalli.zc.al');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}


			if (answer==='loadocelotproxy') {
				openFullscreenIframe('https://proxy.ocelot.lol/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadmetallicproxy2') {
				openFullscreenIframe('https://metallic.eu.org');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadminecraftgame') {
				openFullscreenIframe('https://radmanplays.github.io/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadmultiproxy') {
				openFullscreenIframe('https://proxy.outred.dev/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadskribblgame') {
				openFullscreenIframe('/skribblbrowser.html');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadgalaxyproxy') {
				openFullscreenIframe('https://geoquiz.gq/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadttgame') {
				openFullscreenIframe('https://www.rossipotti.de/ausgabe28/tetris/index.html');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadinterstellar') {
				openFullscreenIframe('https://nimbuss.cloud/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadtacoproxy') {
				openFullscreenIframe('https://dcqrmp.sse.codesandbox.io/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loaddantegame') {
				openFullscreenIframe('https://usemetallic.com/ultraviolet/hvtrs8%2F-jq11keaoeq.aoo%2Feaoeq%2Ffaltg%2Fknfez.jtol');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadbrowseremulator') {
				openFullscreenIframe('/browser.html');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadultravioletproxy') {
				openFullscreenIframe('https://developmentbuild.herokuapp.com');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadslitheriogame') {
				openFullscreenIframe('https://developmentbuild.herokuapp.com/service/hvtr%3A-%2Fqlktjep.ko-');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadrobloxgame') {
				openFullscreenIframe('https://extrememath.net/service/hvtrs8%2F-nmw%2Cge%2Frlcy-rmbnoz-aoppmrctkol%2F7369-rmbnoz');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadbidoofproxy') {
				openFullscreenIframe('https://94tcyy-8080.csb.app/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='listofcommandsuwu') {
				openFullscreenIframe('https://cmdlistalphaomega.vercel.app/');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			if (answer==='loadretrobowlgame') {
				openFullscreenIframe('https://game316009.konggames.com/gamez/0031/6009/live/index.html');
				answerBox.value=''; // Clear the input box after opening the iframe
				resetStreak();
				return;
			}

			var numericAnswer=parseInt(answer, 10);

			if ( !isNaN(numericAnswer) && numericAnswer===currentQuestion) {
				correctAnswerElement.textContent='Correct!';
				correctAnswerElement.classList.remove('hidden');
				correctAnswerElement.classList.add('text-green-600');
				incorrectAnswerElement.classList.add('hidden');
				answerBox.value=''; // Clear the input box after a correct numeric answer
				displayQuestion(); // Show a new question
				updateStreak(); // Increment the streak
			}

			else {
				incorrectAnswerElement.textContent='Incorrect!';
				incorrectAnswerElement.classList.remove('hidden');
				incorrectAnswerElement.classList.add('text-red-600');
				correctAnswerElement.classList.add('hidden');
				answerBox.value=''; // Clear the input box after an incorrect answer
				displayQuestion(); // Show a new question
				resetStreak(); // Reset the streak
			}
		}
  


		function openFullscreenIframe(url) {
			var iframe=document.createElement('iframe');
			iframe.src=url;
			iframe.id='quiz-iframe';
			var container=document.getElementById('body');
			container.innerHTML=''; // Clear the container
			container.appendChild(iframe);
		}

		// Enable both Enter key and Submit button to trigger the checkAnswer function
		document.getElementById('answerBox').addEventListener('keydown', function (event) {
				if (event.key==='Enter') {
					checkAnswer();
				}
			}

		);
		// Initial display of a question
		displayQuestion();
