"use client";
import { useState } from "react";
import Svg from "@/components/svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "./loginRegisterViaGoogle/GoogleLoginButton";
import VerifyOtp from "./VerifyOtp";
import LoginViaMailPassword from "./loginViaMailPassword/LoginViaMailPassword";
import LoginRegisterViaMobile from "./LoginRegisterViaMobile";
import RegisterViaMail from "./RegisterViaMail";
import UserDetailRegistrationFormForEmail from "./userDetailRegistrationFormForEmail/UserDetailRegistrationFormForEmail";
import UserDetailRegistrationFormForMobile from "./UserDetailRegistrationFormForMobile";
import RegistrationScreenForGoogleRegister from "./loginRegisterViaGoogle/RegistrationScreenForGoogleRegister";
import ResetPassword from "./loginViaMailPassword/ResetPassword";

const Auth = ({ isOpen, setIsOpen }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [isShowMobile, setIsShowMobile] = useState(true);
  const [isShowOtp, setIsShowOtp] = useState(false);
  const [isShowUserDetailForm, setIsShowUserDetailForm] = useState(false);
  const [mobile, setMobile] = useState(null);
  const [email, setEmail] = useState("");
  const [googleDetails, setGoogleDetails] = useState(null);
  const [isShowForgotPasswordOtp, setShowForgotPasswordOtp] = useState(false);
  const [isResetPasswordScreen, setIsResetPasswordScreen] = useState(false);
  const [resetPasswordOtp, setResetPasswordOtp] = useState("");

  if (!isOpen) return null;

  const handleIsLoginToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn p-[19px]">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      {isShowOtp ? (
        <VerifyOtp
          mobile={mobile}
          email={email}
          isLogin={isLogin}
          isShowForgotPasswordOtp={isShowForgotPasswordOtp}
          setIsShowUserDetailForm={setIsShowUserDetailForm}
          setIsOpen={setIsOpen}
          setIsResetPasswordScreen={setIsResetPasswordScreen}
          setResetPasswordOtp={setResetPasswordOtp}
          setIsShowOtp={setIsShowOtp}
        />
      ) : isResetPasswordScreen ? (
        <ResetPassword
          setIsOpen={setIsOpen}
          email={email}
          resetPasswordOtp={resetPasswordOtp}
        />
      ) : isLogin && !isShowMobile ? (
        <LoginViaMailPassword
          setIsOpen={setIsOpen}
          setIsShowMobile={setIsShowMobile}
          setIsShowOtp={setIsShowOtp}
          setShowForgotPasswordOtp={setShowForgotPasswordOtp}
          setEmail={setEmail}
        />
      ) : (
        <>
          <div className="relative w-full max-w-[600px] rounded-sm bg-white p-6 shadow-xl overflow-y-auto [&::-webkit-scrollbar]:w-[10px] [&::-webkit-scrollbar-thumb]:bg-[#c5c4c4] [&::-webkit-scrollbar-track]:bg-[#f1f1f1]  animate-scaleIn">
            <div className=" md:px-5 md:py-4 p-[10px] border-b border-[#dbdbdb] flex items-center justify-between">
              {!isLogin ? (
                <h2 className="min-[1400px]:text-[22px] md:text-xl text-lg font-medium leading-[1.6]">
                  Register/Create an
                  <span className="text-[#f76900]"> Account</span>
                </h2>
              ) : (
                <h2 className="min-[1400px]:text-[22px] text-xl font-medium leading-[1.6">Login</h2>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="text-black cursor-pointer"
              >
                <Svg name="close" className="size-5" />
              </button>
            </div>
            {googleDetails ? (
              <RegistrationScreenForGoogleRegister
                googleDetails={googleDetails}
                setIsOpen={setIsOpen}
              />
            ) : isShowUserDetailForm ? (
              <>
                {mobile ? (
                  <UserDetailRegistrationFormForMobile
                    mobile={mobile}
                    setIsOpen={setIsOpen}
                  />
                ) : (
                  <UserDetailRegistrationFormForEmail
                    email={email}
                    setIsOpen={setIsOpen}
                  />
                )}
              </>
            ) : (
              <div className=" md:py-[25px] py-5 max-md:px-[10px]">
                {isShowMobile ? (
                  <LoginRegisterViaMobile
                    isLogin={isLogin}
                    mobile={mobile}
                    setMobile={setMobile}
                    setIsShowOtp={setIsShowOtp}
                  />
                ) : (
                  <RegisterViaMail
                    setEmail={setEmail}
                    setIsShowOtp={setIsShowOtp}
                  />
                )}
                <div className="my-6 flex items-center">
                  <hr className="flex-1 border-gray-300" />
                  <span className="px-2 min-[1400px]:text-base text-sm text-[#000000de]">
                    or Continue with
                  </span>
                  <hr className="flex-1 border-gray-300" />
                </div>
                <div className="flex gap-5 md:px-10">
                  <GoogleOAuthProvider
                    clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
                  >
                    <GoogleLoginButton
                      setGoogleDetails={setGoogleDetails}
                      setIsOpen={setIsOpen}
                    />
                  </GoogleOAuthProvider>
                  {isShowMobile ? (
                    <button
                      onClick={() => {
                        setIsShowMobile(false);
                      }}
                      className="cursor-pointer flex-1 border border-[#dbdbdb] rounded-md py-1 max-md:px-4 flex items-center justify-center gap-2"
                    >
                      <Svg name="mail" className="size-4 text-black" />
                      <span> Mail</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setIsShowMobile(true);
                      }}
                      className="cursor-pointer flex-1 border border-[#dbdbdb] rounded-md py-1 max-md:px-4  flex items-center justify-center gap-2"
                    >
                      <Svg name="call" className="size-4 text-black" />
                      <span> Mobile</span>
                    </button>
                  )}
                </div>
                <div className="md:mt-6 pt-5 text-center flex items-center justify-center gap-4">
                  <span className="text-sm min-[1400px]:text-base text-black text-start">
                    {!isLogin
                      ? "Already have an account ?"
                      : "Don't have an account ?"}
                  </span>
                  <button
                    onClick={handleIsLoginToggle}
                    className="cursor-pointer bg-[#f76900] text-sm border border-[#f76900] hover:border-white hover:bg-[#ff7c52] text-white py-3 px-5 rounded-full font-semibold duration-500 transition text-center gap-2 uppercase tracking-[1px]"
                  >
                    {!isLogin ? "LOGIN" : "REGISTER"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Auth;
