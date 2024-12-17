"use client";
import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  lastName: z.string().min(1, { message: "Last name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log("hafnle submit", data);
  });

  return (
    <form
      className="flex flex-col gap-4 w-full"
      onSubmit={onSubmit}
      autoComplete="off"
    >
      <h1 className="text-xl font-semibold">Create a new teacher</h1>
      <span className="text-gray-500 text-xs font-gray">
        Authentication Information
      </span>
      <div className="flex flex-col md:flex-row justify-between ">
        <InputField
          label="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
          name="username"
        />
        <InputField
          label="Email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
          name="email"
          type="email"
        />
        <InputField
          label="Password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
          name="password"
          type="password"
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-4">
        <InputField
          label="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors?.firstName}
          name="firstName"
          type="text"
        />
        <InputField
          label="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors?.lastName}
          name="lastName"
          type="text"
        />
        <InputField
          label="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
          name="address"
          type="text"
        />
        <InputField
          label="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
          name="phone"
          type="text"
        />
        <InputField
          label="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
          name="bloodType"
          type="text"
        />
        <InputField
          label="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors?.birthday}
          name="birthday"
          type="date"
        />

        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label htmlFor="">Sex</label>
            <select
              size={1}
              className="p-2 rounded-md ring-gray-300 ring-[1.5px]"
              {...register("sex")}
              defaultValue={data?.sex}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-1/4 items-center">
            <label
              htmlFor="file"
              className="flex gap-2 cursor-pointer items-center"
            >
              <Image src="/upload.png" alt="" width={20} height={20} />
              <span className="text-sm text-gray-400">Upload a Photo</span>
            </label>
            <input
              type="file"
              id="file"
              className="hidden"
              {...register("img")}
            />
            {errors?.img?.message && (
              <p className="text-xs text-red-600">
                {errors?.img.message.toString()}
              </p>
            )}
          </div>
        </div>
      </div>

      <button type="submit" className="text-white bg-blue-400 p-2 rounded-md">
        {type == "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default TeacherForm;
