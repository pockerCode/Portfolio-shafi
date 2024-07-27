// Inspired by Chatbot-UI and modified to fit the needs of this project
// @see https://github.com/mckaywrigley/chatbot-ui/blob/main/components/Chat/ChatMessage.tsx
'use client'
import { Message } from 'ai';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { cn } from '@/lib/utils';
import { CodeBlock } from '@/components/ui/codeblock';
import { MemoizedReactMarkdown } from '@/components/ui/markdown';
import {  IconUser, IconVercel } from '@/components/ui/icons';
import { ChatMessageActions } from '@/components/chat-message-actions';

export interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  const isUserMessage = message.role === 'user';

  return (
    <div
      className={cn(
        'group relative w-full h-auto mb-4 flex items-start py-2  border-b',
        isUserMessage ? 'justify-end text-right' : 'justify-start'
      )}
      {...props}
    >
      {!isUserMessage && (
        <div
          className={cn(
            'flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
            'bg-primary text-primary-foreground'
          )}
        >
          <IconVercel />
        </div>
      )}
      <div
        className={cn(
          'flex-1 px-4 py-2 rounded-lg space-y-2 overflow-hidden h-auto ',
          isUserMessage ? '' : '',
          isUserMessage ? 'ml-4' : 'mr-4'
        )}
      >
        <MemoizedReactMarkdown
          className="prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 "
          remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }) {
              return <p className="mb-2 last:mb-0">{children}</p>;
            },
            code({ node, inline, className, children, ...props }) {
              if (children.length) {
                if (children[0] === '▍') {
                  return (
                    <span className="mt-1 cursor-default animate-pulse">▍</span>
                  );
                }
                children[0] = (children[0] as string).replace('`▍`', '▍');
              }

              const match = /language-(\w+)/.exec(className || '');

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ''}
                  value={String(children).replace(/\n$/, '')}
                  {...props}
                />
              );
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </div>
      {isUserMessage && (
        <div
          className={cn(
            'flex size-8 shrink-0 select-none items-center justify-center rounded-md border shadow',
            'bg-background'
          )}
        >
          <IconUser />
        </div>
      )}
    </div>
  );
}
