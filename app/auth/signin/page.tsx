"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";

import toast from "react-hot-toast";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signin() {
  const Router = useRouter();
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateOnBlur: false,
    validateOnChange: true,
    validationSchema: Yup.object({
      username: Yup.string().required("نام کاربری خود را وارد کنید"),
      password: Yup.string().required("کلمه عبور خود را وارد کنید"),
    }),

    onSubmit: async (values) => {
      toast.loading("درحال ارسال", { id: "authLoad" });
      const res = await signIn("credentials", {
        ...values,
        redirect: false,
      });

      console.log(res);

      if (res?.error) {
        toast.remove("authLoad");
        toast.error("نام کاربری یا رمز عبور اشتباه است");
      }

      if (res?.ok) {
        toast.remove("authLoad");
        toast.success("ورود با  موفقیت انجام شد");
        Router.push("/panel");
      }
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 place-items-center text-gray-500">
        <div>
          <span>نام کاربری :</span>
          <span>emilys</span>
        </div>
        <div>
          <span>رمز عبور :</span>
          <span>emilyspass</span>
        </div>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username">
            ایمیل یا نام کاربری
            <span className="mr-3 inline-block text-red-400">
              {formik.errors.username}
            </span>
          </Label>
        </div>
        <TextInput
          id="username"
          name="username"
          placeholder="name@flexo.com"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">
            رمز عبور
            <span className="mr-3 inline-block text-red-400">
              {formik.errors.password}
            </span>
          </Label>
        </div>
        <TextInput
          id="password1"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">مرا به یاد داشته باش</Label>
      </div>
      <Button type="submit" disabled={formik.isSubmitting}>
        ورود
      </Button>
      <div className="flex items-center justify-between gap-2">
        <hr className="w-full border-gray-300" />
        <span>یا</span>
        <hr className="w-full border-gray-300" />
      </div>
      <Button as={Link} href="/auth/signup" color="third" outline>
        ثبت نام
      </Button>
    </form>
  );
}
