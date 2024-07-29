"use client";

import React, { Suspense, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChatMessage } from "@/components/message";
import Textarea from "react-textarea-autosize";
import { useEnterSubmit } from "@/lib/hooks/use-enter-submit";
import { IconPlus, IconRefresh } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconShare } from "@/components/ui/icons";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { useChat } from "ai/react";
import Markdown from "react-markdown";
const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-2xl font-bold tracking-tighter sm:text-2xl xl:text-4xl/none"
                  yOffset={8}
                  text={`ChatiFy 🐸`}
                />
                <BlurFadeText
                  className="max-w-[600px] md:text-sm"
                  delay={BLUR_FADE_DELAY}
                  text={
                    "This project demonstrates the integration of Metas Llama 3.1, a state-of-the-art language model, with a Next.js application using the Vercel AI SDK and Groq as in the model provider."
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section id="chatify">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-light">Chat Box</h2>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 6 * 0.05}>
            <Card className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full">
              <div className="w-full flex flex-col min-h-[50vh] p-4 shadow-md">
                <div className="flex-grow overflow-y-auto md:p-2">
                  {messages.map((message) => (
                    <ChatMessage message={message} key={message.id} />
                  ))}
                </div>
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="flex items-center border-t border-gray-300 md:p-2  py-4 md:py-2 md:px-2"
                >
                  <Link href={"/chat-bot-ai/new"}>
                    <div
                      className={cn(
                        "flex size-8 md:min-h-[58px] min-h-[40px]  min-w-[45px] md:min-w-[58px]  shrink-0 select-none items-center justify-center rounded-md border shadow",
                        "bg-background"
                      )}
                    >
                      <IconPlus />
                    </div>
                  </Link>
                  <Textarea
                    ref={inputRef}
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    placeholder="Send a message."
                    className="md:min-h-[58px] min-h-[40px]  w-full resize-none  md:px-4 px-1 md:py-[1rem] py-1 focus-within:outline-none text-xs  sm:text-sm  bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                    autoCorrect="on"
                    name="message"
                    rows={1}
                    value={input}
                    onChange={handleInputChange}
                  />
                  <button
                    type="submit"
                    className="md:px-8 md:py-[1rem] md:rounded-r-lg md:block hidden   focus:outline-none bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] "
                  >
                    <p>Send</p>
                  </button>

                  <button
                    type="submit"
                    className={cn(
                      "flex size-8 min-h-[40px]  min-w-[45px] md:hidden   shrink-0 select-none items-center justify-center rounded-md border shadow",
                      "bg-background"
                    )}
                  >
                    <IconShare />
                  </button>
                </form>
              </div>
            </Card>
          </BlurFade>
        </section>
      </main>
    </>
  );
}
