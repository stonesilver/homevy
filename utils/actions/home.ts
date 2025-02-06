"use server";

import { ActionResponse } from "@/types";

export const submitForm = async (_: ActionResponse, formData: FormData): Promise<ActionResponse> => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 2000);
  });
  const email = formData.get("email")?.toString() ?? "";
  const isEmailValid = /[!-_#$£<>~%^&.*a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,3}/.test(email);
  if (isEmailValid) {
    return {
      success: true,
      message: "Thank you for subscribing!",
    };
  }

  return {
    success: false,
    message: "Not a valid email address",
    errors: { email: "Please enter a valid email address" },
    inputs: { email },
  };
};
