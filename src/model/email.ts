export class Email {
  id!: number;
  email: string = "";

  constructor(count: number, email: string) {
    this.email = email;
    this.id = count;
  }
}
