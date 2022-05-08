import { Context, PersistentUnorderedMap } from "near-sdk-as";
import { Game } from "./model";

@nearBindgen
export class Contract {
  private game: Game;
  private guesses: PersistentUnorderedMap<string, i32>  = new PersistentUnorderedMap<string, i32>("p2");

  constructor(owner: string) {
    this.game = new Game(owner);
    this.guesses.clear();
  }

  get_owner(): string {
    return this.game.owner;
  }

  @mutateState()
  makeGuess(guess: string): Array<i32> {
    assert(this.guesses.contains(Context.sender) ? this.guesses.getSome(Context.sender) < 5 : true, "You exceed your guess limit!");
    this.guesses.set(Context.sender, this.guesses.contains(Context.sender) ? this.guesses.getSome(Context.sender) + 1 : 1);
    return this.game.makeGuess(guess);
  }

  @mutateState()
  startNewRound(word: string): void {
    this.game.startNewRound(word);
    this.guesses.clear();
  }

  getGuessLeft() : i32 {
    return this.guesses.contains(Context.sender) ? 5 - this.guesses.getSome(Context.sender) : 5;
  }

  getWordLenght(): i32 {
    return this.game.getWordLenght();
  }
  
}
