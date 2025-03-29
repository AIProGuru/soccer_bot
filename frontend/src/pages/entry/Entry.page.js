import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../components/login/Login.comp";
import { ResetPassword } from "../../components/password_reset/Password_reset.comp";
import { SignupForm } from "../../components/signup/signup.comp";
import { SERVER_URL, GOOGLE_CLIENT_ID } from "../../utils/config";
import "./entry.style.css";
import React, { useCallback, useRef, useState } from "react";
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
} from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/account/login";
// import { login, signup } from '../../utils/auth';

export const Entry = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const amazonRef = useRef();
  const instagramRef = useRef();
  const googleRef = useRef();
  const facebookRef = useRef();
  const microsoftRef = useRef();
  const linkedinRef = useRef();
  const githubRef = useRef();
  const pinterestRef = useRef();
  const twitterRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [website, setWebsite] = useState("");
  const [agree, setAgree] = useState(false);
  const [formState, setFormState] = useState("login");
  const navigate = useNavigate();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
    if (name === "website") {
      setWebsite(value);
      console.log(website);
    }
    if (name === "agree") {
      setAgree(e.target.checked);
      console.log(agree);
    }
  };

  const handleGoogleLogin = (email) => {
    const user = {
      email: email
    }
    axios.post(`${SERVER_URL}/v1/user/google`, user).then((res) => {
      if (res.data.status === "success") {
        console.log(res.data)
        setFormState("login");
      } else {
        alert(res.data.message);
        console.log("message", res.data.message);
      }
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (formState === "signup") {
      if (!email || !password || !website || !agree) {
        alert("Fill up all the form !!!");
        return;
      }
      const user = {
        email: email,
        password: password,
        website: website,
      };
      axios.post(`${SERVER_URL}/v1/user`, user).then((res) => {
        if (res.data.status === "success") {
          console.log(res.data)
          setFormState("login");
        } else {
          alert(res.data.message);
          console.log("message", res.data.message);
        }
      });
    } else if (formState === "login") {
      if (!email || !password) {
        alert("Fill up all the form !!!");
      }
      const user = {
        email: email,
        password: password,
      };
      axios.post(`${SERVER_URL}/v1/user/login`, user).then((res) => {
        if (res.data.status === "success") {
          console.log(res.data)
          localStorage.clear();
          localStorage.setItem("access-token", res.data.accessJWT);
          localStorage.setItem("refresh-token", res.data.refreshJWT);
          localStorage.setItem("email", user.email);
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("assistantId", res.data.assistant.assistantId);
          localStorage.setItem("threadId", res.data.assistant.threadId);
          navigate("/dashboard");
        } else {
          console.log("message", res.data.message);
        }
      });
    }
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter the email");
    }
    console.log(email);
  };
  const formSwitcher = (formState) => {
    setFormState(formState);
  };

  return (
    <>
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <h1 className="title">ReactJS Social Login</h1>
        <LoginSocialFacebook
          ref={facebookRef}
          appId={"431451242017946"}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

        <LoginSocialGoogle
          ref={googleRef}
          client_id={GOOGLE_CLIENT_ID}
          onLogoutFailure={onLogoutFailure}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);

            navigate('/dashboard')

            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log("hbhbdhd", err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>

      </div>

      <div
        className="entry-page bg-info"
        style={{ backgroundImage: "url(/image/bg.jpg)" }}
      >
        <div className="jumbotron">
          {formState === "login" && (
            <LoginForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              email={email}
              pass={password}
              agree={agree}
            />
          )}
          {formState === "reset" && (
            <ResetPassword
              handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              email={email}
              pass={password}
            />
          )}
          {formState === "signup" && (
            <SignupForm
              handleOnChange={handleOnChange}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
              agree={agree}
              email={email}
              pass={password}
            />
          )}
        </div>
      </div>
    </>
  );
};
