echo ---------------------------------------------------------
echo "Step 1: Create a game"
echo ---------------------------------------------------------


near call $CONTRACT startNewRound '{"word": "pinkpanter"}' --accountId $NEAR_ACCOUNT

echo ---------------------------------------------------------
echo "Step 2: Get Word Lenght Left"
echo ---------------------------------------------------------
echo


WORDLEN=$(near call $CONTRACT getWordLenght '' --accountId $NEAR_ACCOUNT | tail -c 3)

echo $WORDLEN
echo ---------------------------------------------------------
echo "Step 2: Guesses Left"
echo ---------------------------------------------------------
echo

GUESSLEFT=$(near call $CONTRACT getGuessLeft '' --accountId $NEAR_ACCOUNT | tail -c 2)

echo $GUESSLEFT
echo ---------------------------------------------------------
echo "Step 3: Make a guess"
echo ---------------------------------------------------------

HINT=$(near call $CONTRACT makeGuess '{"guess": "petepanter"}' --accountId $NEAR_ACCOUNT | tail -c 37)
echo $HINT

echo ---------------------------------------------------------
echo "Step 4: Guesses Left"
echo ---------------------------------------------------------
echo

GUESSLEFT=$(near call $CONTRACT getGuessLeft '' --accountId $NEAR_ACCOUNT | tail -c 2)

echo $GUESSLEFT