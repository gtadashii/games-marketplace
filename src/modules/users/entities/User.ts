import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("user")
class User {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
