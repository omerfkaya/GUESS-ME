# Near Game

It is a game like well known game [Wordle](https://www.nytimes.com/games/wordle/index.html).

## Game Life Cycle

* Owner starts a round with calling startNewRound function with a word lenght is between 5 and 15.
* Users try to guess the word with calling makeGuess and try to find in 5 guess.
* Game will give hints to users with 3 state 
    * If a letter is in the word and in the correct spot returns 0
    * If a letter is in the word but in wrong spot returns 1
    * If a letter is not in the word returns 2
* When owner creates a new round guess limits are resetted.

## Example Game

Let assume word is WANTS.

* If user's guess is WEARY contract will return [0, 2, 1, 2, 2]. And user will know first letter is W and should move A to another spot.
* If user's guess is WAKEN contract will return [0, 0, 2, 2, 2]. And user will know A is in right spot now.
* If user's guess is PILLS contract will return [2, 2, 2, 2, 2]. And user will know any of the letter not in the word.

## Near Features

* Saving users guess count on **PersistentUnorderedMap**.
* Saving every word in rounds on **storage**
* Make sure round starter is the owner with **Context**
* Checking limits with **assert** 