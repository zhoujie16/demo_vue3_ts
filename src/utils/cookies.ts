import cookies from "js-cookie";

class Cookies {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  set(key, value, options) {
    cookies.set(key, value, { ...options, secure: true });
  }

  get(key) {
    return cookies.get(key);
  }

  remove(key) {
    return cookies.remove(key);
  }
}
export default new Cookies();
