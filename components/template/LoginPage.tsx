"use client";

import LoginActionClient from "@/app/actionserver/LoginActionClient";
import { errorAlert, successAlert } from "@/utils/alerts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  phone: string;
  code: string;
};

function LoginPage() {
  const router = useRouter();
  const [iscode, setIscode] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { phone, code } = data;
    try {
      const response = await LoginActionClient(data);
      if (response?.success) {
        successAlert(response.message);
        if (phone && !code) setIscode(true);
        if (phone && code) router.replace("/");
      } else {
        errorAlert("متاسفانه مشکلی پیش امده است");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <div className="w-full my-40 mx-auto flex justify-center items-center ">
        <div className="w-full max-w-sm p-4 bg-white shadow-lg border border-gray-200 rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            {iscode && (
              <div>
                <label
                  htmlFor="code"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  کد یکبار مصرف
                </label>
                <input
                  type="text"
                  id="code"
                  {...register("code", {
                    required: "لطفا کد ارسال شده را وارد کنید",
                    maxLength: {
                      value: 5,
                      message: "لطفا کد را درست وارد نمایید",
                    },
                    minLength: {
                      value: 5,
                      message: "لطفا کد را درست وارد نمایید",
                    },
                    pattern: {
                      value: /^\d{5}$/,
                      message: "لطفا کد را درست وارد نمایید",
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
            )}
            {errors.code && (
              <span className=" text-xs mt-5 text-red-500 ">
                {errors.code?.message}
              </span>
            )}
            <button
              type="submit"
              className="w-full transition-all text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              دریافت کد ورود
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
