import React from "react";
import { useForm } from "react-hook-form";
import CheckboxHook from "../checkbox/CheckboxHook";
import DropdownHook from "../dropdown/DropdownHook";
import InputHook from "../input/InputHook";
import RadioHook from "../radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "constructor",
    text: "Constructor",
  },
];

const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
        }
      )
      .required("Please enter your password"),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select male or female"),
    job: yup
      .string()
      .required("Please select your job")
      .oneOf(["teacher", "developer", "doctor", "constructor"]),
    term: yup.string().required("Please accept the terms and conditions"),
  })
  .required();
const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    setValue,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      gender: "male",
      term: false,
    },
  });
  const showGender = watch("gender");
  const showTerm = watch("term");
  const onSubmitHandler = (values) => {
    if (!isValid) return;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
        console.log(values);
        reset({
          username: "",
          email: "",
          password: "",
          gender: "male",
          job: "",
          term: false,
        });
      }, 1000);
    });
  };
  return (
    <form
      className="max-w-[300px] mx-auto my-10"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          type="text"
          id="username"
          name="username"
          control={control}
          placeholder="Enter your username"
        ></InputHook>
        {errors?.username && (
          <p className="text-red-500 text-sm font-medium">
            {errors.username.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email address
        </label>
        <InputHook
          type="email"
          id="email"
          name="email"
          control={control}
          placeholder="Enter your email address"
        ></InputHook>
        {errors?.email && (
          <p className="text-red-500 text-sm font-medium">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          type="password"
          id="password"
          name="password"
          control={control}
          placeholder="Enter your password"
        ></InputHook>
        {errors?.password && (
          <p className="text-red-500 text-sm font-medium">
            {errors.password.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-x-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              control={control}
              value="male"
              checked={showGender === "male"}
            ></RadioHook>
            <span>Male</span>
          </div>
          <div className="flex items-center gap-x-3">
            <RadioHook
              name="gender"
              control={control}
              value="female"
              checked={showGender === "female"}
            ></RadioHook>
            <span>Female</span>
          </div>
        </div>
        {errors?.gender && (
          <p className="text-red-500 text-sm font-medium">
            {errors.gender.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropdownHook
          name="job"
          control={control}
          setValue={setValue}
          data={dropdownData}
          dropdownLabel="Select your job"
        ></DropdownHook>
        {errors?.job && (
          <p className="text-red-500 text-sm font-medium">
            {errors.job.message}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <CheckboxHook
          id="term"
          name="term"
          control={control}
          text="I accept the terms and conditions"
          checked={showTerm}
        ></CheckboxHook>
        {errors?.term && (
          <p className="text-red-500 text-sm font-medium">
            {errors.term.message}
          </p>
        )}
      </div>
      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <div className="w-5 h-5 border-2 border-white border-t-2 border-t-transparent animate-spin rounded-full mx-auto"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
