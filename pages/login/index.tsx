import React from "react";
import { useRouter } from "next/router";
import Button from "@/components/button";
import Input from "@/components/inputs";
import css from "styles/auth.module.scss";
import inter from "@/fonts/inter";
import { useImmer } from "use-immer";
import login from "@/endpoints/api/login";

const LoginPage = () => {
  const router = useRouter();
  const [state, setState] = useImmer({
    email: "",
    password: "",
  });

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: string) => {
      setState((draft) => {
        draft[key] = value;
      });
    },
    [setState]
  );

  const handleSubmit = React.useCallback(
    async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { data } = await login(state);
      console.log(data.token);
      if (data.token) {
        router.push("/");
      }
    },
    [router, state]
  );

  return (
    <div className={`${inter.className} ${css.container}`}>
      <form className={css.login} onSubmit={handleSubmit}>
        <div className={css.heading}>
          <h2>Login as Admin</h2>
        </div>
        <Input
          type="text"
          placeholder="Enter your email"
          label={"Email"}
          value={state.email}
          onChange={(e) => onChangeState("email", e.target.value)}
        />
        <Input
          type="password"
          label={"Password"}
          placeholder="Enter your password"
          value={state.password}
          onChange={(e) => onChangeState("password", e.target.value)}
        />
        <div className={css.controls}>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
