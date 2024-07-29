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
                 <div className="flex w-full items-center">
            <div className="flex w-full flex-col gap-1.5 rounded-[26px] p-1.5 transition-colors bg-[#f4f4f4] dark:bg-[#1A1A1A]">
              <div className="flex items-end gap-1.5 md:gap-2">
                <div>
                  <div className="flex flex-col">
                   
                  <Link href={'/chat-bot-ai/new'}>
                    <button
                      className="flex items-center justify-center h-8 w-8 rounded-full  focus-visible:outline-black border dark:text-white  dark:focus-visible:outline-white mb-1 ml-1.5"
                      
                    >
                     <IconPlus />
                    </button>
                    </Link>
                  </div>
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <Textarea
                    ref={inputRef}
                    id="prompt-textarea"
                    tabIndex={0}
                    onKeyDown={onKeyDown}
                    data-id="cfa4d3a1-2e12-4214-91a0-166009d43714"
                    dir="auto"
                    autoFocus
                    rows={1}
                    placeholder="Message ChatFy"
                    value={input}
                    onChange={handleInputChange}
                    className="m-0 resize-none border-0 bg-transparent px-0 text-token-text-primary min-h-[32px] focus:ring-0 focus-visible:ring-0 max-h-[25dvh] "
                 
                  />
                </div>
                <button
                type="submit"
                  className="mb-1 me-1 flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:outline-black disabled:bg-[#D7D7D7] disabled:text-[#f4f4f4] disabled:hover:opacity-100 dark:bg-white dark:text-black dark:focus-visible:outline-white disabled:dark:bg-token-text-quaternary dark:disabled:text-token-main-surface-secondary"
                
                >
                    < IconShare/>
                </button>
              </div>
            </div>
          </div>
                </form>
              </div>
            </Card>
          </BlurFade>
        </section>
      </main>
    </>
  );
}
