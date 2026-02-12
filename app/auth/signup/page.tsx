"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function Signup() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">نام کاربری</Label>
        </div>
        <TextInput id="email1" type="text" placeholder="ali" required />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">ایمیل</Label>
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="name@flexo.com"
          required
        />
      </div>

      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">رمز عبور</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">تکرار رمز عبور</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">تمام شرایط سایت flexo را میپذیرم</Label>
      </div>

      <Button type="submit">ثبت نام</Button>

      <div className="flex items-center justify-between gap-2">
        <hr className="w-full border-gray-300" />
        <span>یا</span>
        <hr className="w-full border-gray-300" />
      </div>
      <Button as={Link} href="/auth/signin" color="third" outline>
        ورود
      </Button>
    </form>
  );
}
