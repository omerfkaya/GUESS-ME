// contract/assembly/model.ts
import { Context, storage } from "near-sdk-as";

@nearBindgen
export class Game {
  round: u32;
  owner: string;
  constructor(_owner: string) {
    this.round = -1;
    this.owner = _owner;
  }

  startNewRound(word: string) : void {
    assert(this.owner == Context.sender, "You cant start a new round!");
    assert(word.length >= 5 && word.length <= 15, "Word lenght should be between 5 and 15!");
    this.round++;
    storage.set(this.round.toString(), word);
  }

  getWordLenght(): i32 {
    return storage.contains(this.round.toString()) ? storage.get<string>(this.round.toString())!.length : -1;
  }

  makeGuess(guess: string) : Array<i32> {
    assert(this.round != -1, "Game not started!");
    assert(guess.length == this.getWordLenght(), "You should check words lenght!");
    return this.checkWord(guess);
  }

  checkWord(guess: string) : Array<i32> {
    let vals : Array<i32> = new Array<i32>();
    const wordOfRound = storage.get<string>(this.round.toString())!;
    for(let i = 0; i < guess.length; i++){
      if(guess.at(i) == wordOfRound.at(i)){
        vals.push(0);
      } 
      else if(wordOfRound.indexOf(guess.at(i)) != -1){
        vals.push(1);
      }
      else {
        vals.push(2);
      }
    }
    return vals;
  }
}