import cookies from "js-cookie";

class Cookies {
  // eslint-disable-next-line no-useless-constructor
  constructor() {}

  set(key: any, value: any, options: any) {
    cookies.set(key, value, { ...options, secure: true });
  }

  get(key: any) {
    return cookies.get(key);
  }

  remove(key: any) {
    return cookies.remove(key);
  }
}
export default new Cookies();
