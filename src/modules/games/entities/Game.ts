import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("games")
class Game {
  @PrimaryColumn()
  id: string;
  
  @Column()
  title: string;

  @Column()
  categories: string;

  @Column()
  price: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Game };
