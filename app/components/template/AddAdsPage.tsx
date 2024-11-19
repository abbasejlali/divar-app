"use client";

// serveractions
import CreateAdsClient from "@/app/actionserver/CreateAdsClient";

// helper
import { callapi } from "@/libs/helpers/callApi";
import { successAlert } from "@/utils/alerts";

// typescript
import { AdsType } from "@/typescript/interface";

// react query
import { useQuery } from "@tanstack/react-query";

// react hook form
import { SubmitHandler, useForm } from "react-hook-form";

function AddAdsPage() {
  const { data } = useQuery({
    queryKey: ["get-category"],
    queryFn: () => callapi().get("/category"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdsType>();

  const onSubmit: SubmitHandler<AdsType> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("category", data.category);
      formData.append("city", data.city);
      formData.append("amount", data?.amount?.toString());
      formData.append("images", data.images[0]);

      const res = await CreateAdsClient(formData);

      if (res?.success) {
        successAlert(res?.data?.message);
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            عنوان آگهی
          </label>
          <input
            type="text"
            id="title"
            {...register("title", {
              required: "لطفا عنوان آگهی را وارد نمایید",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
          {errors?.title && (
            <span className=" text-xs mt-5 text-red-500 ">
              {errors.title?.message}
            </span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="content"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            توضیحات
          </label>
          <textarea
            id="content"
            {...register("content", {
              required: "لطفا توضیحات لازم را وارد نمایید",
            })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="لطفا توضیحاتی برای آگهی مورد نظر بنویسید"
          />
          {errors?.content && (
            <span className=" text-xs mt-5 text-red-500 ">
              {errors.content?.message}
            </span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            دسته بندی
          </label>
          <select
            id="category"
            {...register("category", {
              required: "لطفا دسته بندی را انتخاب کنید",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {data?.data.map((item: any) => (
              <option key={item._id} value={`${item._id}`}>
                {item.name}
              </option>
            ))}
          </select>
          {errors?.content && (
            <span className=" text-xs mt-5 text-red-500 ">
              {errors.content?.message}
            </span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="city"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            شهر
          </label>
          <input
            type="text"
            id="city"
            {...register("city", {
              required: "لطفا شهر مورد نظر را  وارد نمایید",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="تهران"
          />
          {errors?.city && (
            <span className=" text-xs mt-5 text-red-500 ">
              {errors.city?.message}
            </span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="amount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            قیمت
          </label>
          <input
            type="number"
            id="amount"
            {...register("amount", {
              required: "لطفا قیمت مورد نظر را وارد نمایید",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="2500000"
          />
          {errors?.amount && (
            <span className=" text-xs mt-5 text-red-500 ">
              {errors.amount?.message}
            </span>
          )}
        </div>

        <div className="mb-5">
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="images"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">برای آپلود کلیک کنید</span> یا
                  عکس را روی کادر بکشید
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="images"
                {...register("images", {
                  required: "لطفا عکسی را آپلود کنید",
                })}
                type="file"
                className="hidden"
              />
              {errors?.images && (
                <span className=" text-xs mt-5 text-red-500 ">
                  {errors.images?.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default AddAdsPage;
