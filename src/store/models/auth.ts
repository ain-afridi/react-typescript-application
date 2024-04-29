import { createModel } from "@rematch/core";

import { RootModel } from ".";

interface IAuth {
  isLoggedIn: boolean;
  loading: boolean;
  // userData: ILoginResponse | null;
  // forgetPasswordState: "send-email" | "change-password";
  // forgetVerificationToken: string;
  // email: string;
  // users: IUsers[];
  // selectedUser: IUsers | null
}

export const auth = createModel<RootModel>()({
  name: "auth",
  state: {
    isLoggedIn: !!localStorage.getItem("token") || false,
    loading: false,
    userData: null,
    forgetPasswordState: "send-email",
    forgetVerificationToken: "",
    users: [],
    email: "",
    selectedUser: null,
  } as IAuth,
  reducers: {
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  effects: (dispatch) => ({
    // async handleLogin(payload) {
    //   try {
    //     dispatch.auth.setLoading(true);
    //     const { data, navigate } = payload;
    //     const response = await login(data);

    //     if (response.status === 200) {
    //       dispatch.auth.setUserData(response.data);
    //       if (localStorage.getItem("rank-token")) {
    //         localStorage.removeItem("rank-token");
    //       }
    //       localStorage.setItem("rank-token", response.data.accessToken);
    //       navigate("/document-list");
    //     }
    //   } catch (err: any) {
    //     console.log(err.message);
    //   } finally {
    //     dispatch.auth.setLoading(false);
    //   }
    // },
  }),
});
