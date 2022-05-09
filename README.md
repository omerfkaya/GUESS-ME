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
* If user's guess is PILLS contract will return [2, 2, 2, 2, 0]. And user will know any of the letter not in the word.

## Deploy

* Cloning the project and after cloning the project please run `yarn` in order to install all of the necessary packages for the project to run correctly. 
* Building and Deploying the contract. The contract is located in under the assembly folders, after editing the contract you can run `yarn build` in order to build the contract and get the .wasm file.
* If you want to build and deploy the contract for update, at the same time, you can run `yarn dev`
* If you create a new contract, you can run `yarn firstDev`
* After the contract is deployed, it is necessary to run the following command in the terminal in order to be able to run the contract `export CONTRACT=ACCOUNT_ID`

## Functions

* startNewRound(word: string)
    * This function only can called from owner and creates a new round with new word.
    * Example call `near call $CONTRACT startNewRound '{"word": "pinkpanter"}' --accountId $NEAR_ACCOUNT`
* getGuessLeft()
    * This function returns a users guess left
    * Example call `near call $CONTRACT getGuessLeft '' --accountId $NEAR_ACCOUNT`
* getWordLenght()
    * This function returns current round's word lenght
    * Example call `near call $CONTRACT getWordLenght '' --accountId $NEAR_ACCOUNT`
* makeGuess(guess: string)
    * This function called for making guesses by users
    * Example call `near call $CONTRACT makeGuess '{"guess": "petepanter"}' --accountId $NEAR_ACCOUNT`

## Scripts 

* You can simply run `scripts/deploy.sh` for deploying contract.

* After deploy you should call this with contract id, `export CONTRACT=ACCOUNT_ID` after that you can simply call `scripts/run.sh` to test.
## Near Features

* Saving users guess count on **PersistentUnorderedMap**.
* Saving every word in rounds on **storage**
* Make sure round starter is the owner with **Context**
* Checking limits with **assert** 

## Loom Video

* It exceeds file limit of git so https://www.loom.com/share/11a31e9e8ff64d199189ee59156f9a73 this is the link of loom.
