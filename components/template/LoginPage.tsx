"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

type Inputs = {
  phone: string;
};
function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(errors);
  return (
    <div className="w-full my-40 mx-auto flex justify-center items-center ">
      <div className="w-full max-w-sm p-4 bg-white shadow-lg border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          action="#"
        >
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            فرم ورود به سایت
          </h5>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              شماره تماس
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone", {
                required: "لطفا شماره را وارد نمایید",
                maxLength: {
                  value: 11,
                  message: "لطفا شماره را درست وارد نمایید",
                },
                minLength: {
                  value: 11,
                  message: "لطفا شماره را درست وارد نمایید",
                },
                pattern: {
                  value: /^09[0-9]{9}$/,
                  message: "لطفا شماره را درست وارد نمایید",
                },
              })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="09193256785"
            />
          </div>
          {errors.phone && (
            <span className=" text-xs mt-5 text-red-500 ">
              {errors.phone?.message}
            </span>
          )}
          <button
            type="submit"
            className="w-full transition-all text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            دریافت کد ورود
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default LoginPage;
