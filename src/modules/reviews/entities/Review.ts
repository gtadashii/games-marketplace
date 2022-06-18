import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

import { Game } from "../../games/entities/Game";
import { User } from "../../users/entities/User";

@Entity("reviews")
class Review {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: User;
  
  @Column()
  userId: string;

  @ManyToOne(() => Game)
  @JoinColumn({ name: "gameId" })
  game: Game

  @Column()
  gameId: string;

  @Column()
  content: string;

  @Column()
  Price: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Review };
