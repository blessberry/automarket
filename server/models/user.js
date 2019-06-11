
class User {
  constructor() {
    this.users = [];
  }

  create(info) {
    const user = {
      id: this.users.length + 1,
      ...info,
      isAdmin: false,
    };
    this.users.push(user);
    return user;
  }

  email(email) {
    return this.users.find(user => user.email === email);
  }
}

export default new User();
