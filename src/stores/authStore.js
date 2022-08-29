import { defineStore } from "pinia";

let timer;

export const useStore = defineStore({
  id: "auth",
  state: () => ({
    userId: null,
    token: null,
    didAutoLogout: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async auth(email, password, mode) {
      if (mode === "signup") {
        const url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDyquz8UBqFIdb9joo7PUojuB_hnWHXRpM";
      } else if (mode === "login") {
        const url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDyquz8UBqFIdb9joo7PUojuB_hnWHXRpM";
      } else {
        return;
      }

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to authenticate.");
      }

      const expiresIn = +responseData.expiresIn * 1000;
      const expirationDate = new Date().getTime() + expiresIn;

      localStorage.setItem("token", responseData.idToken);
      localStorage.setItem("userId", responseData.localId);
      localStorage.setItem("tokenExpiration", expirationDate);

      timer = setTimeout(() => {
        this.autoLogout();
      }, expiresIn);
    },
    tryLogin() {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const tokenExpiration = localStorage.getItem("tokenExpiration");

      const expiresIn = +tokenExpiration - new Date().getTime();

      if (expiresIn < 0) {
        return;
      }

      timer = setTimeout(() => {
        this.autoLogout();
      }, expiresIn);

      if (token && userId) {
        this.userId = userId;
        this.token = token;
        this.didAutoLogout = false;
      }
    },
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("tokenExpiration");

      clearTimeout(timer);

      this.userId = null;
      this.token = null;
      this.didAutoLogout = false;
    },
    autoLogout() {
      this.logout();
      this.didAutoLogout = true;
    },
  },
});
