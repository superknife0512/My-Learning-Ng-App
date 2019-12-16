
export class User {
  constructor(
    private email: string,
    private userId: string,
    private tokenId: string,
    private expiresIn: Date,
  ) {}

  get token() {
    if(!this.expiresIn || (new Date() > this.expiresIn)) {
      return null;
    } else {
      return this.tokenId;
    }
  }
}