"use client";

import { ActionResponse } from "@/types";
import { submitForm } from "@/utils/actions/home";
import { useActionState } from "react";

const initialState: ActionResponse = { success: false, message: "" };

const NewsletterForm = () => {
  const [state, action, isPending] = useActionState(submitForm, initialState);

  return (
    <form action={action} className="mx-auto mt-12 flex max-w-[602px] flex-wrap gap-4 md:gap-6">
      <div className="flex-1">
        <input
          type="email"
          name="email"
          defaultValue={state?.inputs?.email}
          placeholder="Your email address"
          className="h-[60px] w-full appearance-none rounded-full border-none px-5 font-open-sans outline-none placeholder:text-black focus-within:ring-2 focus-within:ring-secondary focus:ring-2 focus:ring-secondary"
        />
        {state.errors?.email && <span className="text-xs text-red-500">{state.errors?.email}</span>}
      </div>

      <button className="button-secondary max-sm:w-full" disabled={isPending}>
        Start now
      </button>
    </form>
  );
};

export default NewsletterForm;
