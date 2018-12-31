class SlotMachine {
    private coins: number;
  
    constructor() {
      this.coins = 0;
    }
  
    roulette(): boolean {
      return (Math.random() >= 0.5);
    }
  
    play(): void {
      this.coins++;
      if (this.roulette(), this.roulette(), this.roulette()) {
        console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
        this.coins = 0;
      }
      else {
        console.log('Good luck next time!!');
      }
    }}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();