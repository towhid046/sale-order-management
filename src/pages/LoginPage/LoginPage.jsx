import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import swal from "sweetalert";
import { scrollToTop } from "../../utilities/scrollToTop.js";

const LoginPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, []);

  const handelLoginForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await loginUser(email, password);
      swal("Login Success", "You have login successfully", "success");
      e.target.reset();
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      toast.error(`Something went wrong! ${err?.message} `, {
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  const handelShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="my-24">
      <div className="hero  pb-8 mb-12">
        <div className="w-full">
          <div
            className={`max-w-xl border rounded-lg bg-base-100 mx-auto md:p-12 py-5 px-6 "
              }`}
          >
            <div>
              <div className=" flex gap-5 mb-3">
                <div>
                  <p>
                    <strong className="italic">Email: </strong>
                    <span>test@gmail.com</span>
                  </p>
                  <strong className="italic">Password: </strong>
                  <span>Test1234</span>
                </div>
              </div>
            </div>
            <form onSubmit={handelLoginForm} className="mt-5 text-black">
              <div>
                <label className="label">
                  <strong className="label-text">Email address</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className=" text-base-content w-full focus:outline-none border-2 rounded text-gray-800 py-2 px-3 focus:border-gray-400"
                  required
                />
              </div>

              <div className="relative mt-2">
                <label className="label">
                  <strong className="label-text">Password</strong>
                </label>
                <input
                  type={isShowPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="py-2 px-3 w-full text-gray-800 rounded focus:outline-none border-2 focus:border-gray-400"
                  required
                />

                {/* password show eye off-on */}
                <div className="absolute  right-3 bottom-4 ">
                  {isShowPassword ? (
                    <span
                      className="cursor-pointer"
                      onClick={handelShowPassword}
                    >
                      <LuEye />
                    </span>
                  ) : (
                    <span
                      className="cursor-pointer"
                      onClick={handelShowPassword}
                    >
                      <LuEyeOff />
                    </span>
                  )}
                </div>
              </div>

              <div className="form-control my-5">
                <button className="btn w-full font-semibold  text-gray-200 bg-gray-800 py-2.5 rounded">
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
