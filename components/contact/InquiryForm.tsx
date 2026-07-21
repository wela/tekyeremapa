"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "@/components/shared/Icon";

type Status = "idle" | "sending" | "received";

const FIELD_CLASSES =
  "w-full bg-white border border-secondary/20 rounded-[14px] px-4 py-3 font-body-md text-secondary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");
    timers.current.push(
      window.setTimeout(() => {
        setStatus("received");
        formRef.current?.reset();
        timers.current.push(
          window.setTimeout(() => setStatus("idle"), 3000),
        );
      }, 1500),
    );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-6 bg-surface p-8 rounded-xl border border-on-surface/10 shadow-sm"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label
            className="font-label-caps text-label-caps text-on-surface-variant ml-1"
            htmlFor="name"
          >
            FULL NAME
          </label>
          <input
            className={FIELD_CLASSES}
            id="name"
            name="name"
            required
            type="text"
          />
        </div>
        <div className="space-y-2">
          <label
            className="font-label-caps text-label-caps text-on-surface-variant ml-1"
            htmlFor="email"
          >
            EMAIL ADDRESS
          </label>
          <input
            className={FIELD_CLASSES}
            id="email"
            name="email"
            required
            type="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label
          className="font-label-caps text-label-caps text-on-surface-variant ml-1"
          htmlFor="interest"
        >
          PRIMARY INTEREST
        </label>
        <select
          className={`${FIELD_CLASSES} appearance-none`}
          id="interest"
          name="interest"
          defaultValue="general"
        >
          <option value="general">General Inquiry</option>
          <option value="sponsorship">Sponsorship Opportunity</option>
          <option value="academic">Academic Partnership</option>
          <option value="press">Press &amp; Media</option>
        </select>
      </div>
      <div className="space-y-2">
        <label
          className="font-label-caps text-label-caps text-on-surface-variant ml-1"
          htmlFor="message"
        >
          YOUR MESSAGE
        </label>
        <textarea
          className={FIELD_CLASSES}
          id="message"
          name="message"
          required
          rows={5}
        />
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        className={`w-full md:w-auto ${status === "received" ? "bg-tertiary" : "bg-primary"} text-on-primary px-10 py-4 rounded-xl font-label-caps text-label-caps hover:bg-primary-container transition-all active:scale-95 shadow-lg shadow-primary/10 disabled:active:scale-100`}
      >
        {status === "sending" ? (
          <span className="inline-flex items-center gap-2">
            <Icon name="sync" className="animate-spin" /> SENDING...
          </span>
        ) : status === "received" ? (
          "INQUIRY RECEIVED"
        ) : (
          "SEND INQUIRY"
        )}
      </button>
    </form>
  );
}
