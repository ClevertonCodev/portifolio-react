'use client';

import { useState, useEffect } from 'react';
import GlassButton from '../GlassButton';

interface ContactFormProps {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendText: string;
  sendingText: string;
  restrictionText: string;
}

export default function ContactForm({
  nameLabel,
  namePlaceholder,
  emailLabel,
  emailPlaceholder,
  messageLabel,
  messagePlaceholder,
  sendText,
  sendingText,
  restrictionText
}: ContactFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [isMessageAvailable, setIsMessageAvailable] = useState(true);
  const [cooldownTimeLeft, setCooldownTimeLeft] = useState('00:00');

  useEffect(() => {
    checkMessageAvailable();
  }, []);

  const checkMessageAvailable = () => {
    if (typeof window === 'undefined') return true;
    
    const lastMessage = localStorage.getItem('lastMessage');
    if (lastMessage) {
      const lastMessageTime = new Date(lastMessage);
      const currentTime = new Date();
      const difference = currentTime.getTime() - lastMessageTime.getTime();
      const differenceInMinutes = difference / 60000;
      
      if (differenceInMinutes < 30) {
        const minutes = 30 - Math.floor(differenceInMinutes);
        const seconds = 59 - Math.floor((difference % (1000 * 60)) / 1000);
        setCooldownTimeLeft(`${minutes}:${seconds.toString().padStart(2, '0')}`);
        setTimeout(() => {
          checkMessageAvailable();
        }, 1000);
        setIsMessageAvailable(false);
        return false;
      }
    }
    setIsMessageAvailable(true);
    return true;
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkMessageAvailable()) {
      console.error("You can't send more messages");
      return;
    }
    
    setSending(true);
    
    const currentDateTime = new Date(Date.now()).toISOString();
    localStorage.setItem('lastMessage', currentDateTime);
    checkMessageAvailable();
    setSending(false);
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form
      onSubmit={submitForm}
      className="flex w-full max-w-[600px] flex-col gap-y-5 self-center pt-3 text-start"
    >
      <label className="block" htmlFor="name">
        {nameLabel}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          placeholder={namePlaceholder}
          className="block min-h-[45px] w-full select-all rounded-md border-[1px] border-neutral-400 bg-white px-3 outline-0 focus:outline-1 focus:outline-primary-700"
          required
        />
      </label>
      <label className="block" htmlFor="email">
        {emailLabel}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder={emailPlaceholder}
          className="block min-h-[45px] w-full select-all rounded-md border-[1px] border-neutral-400 bg-white px-3 outline-0 focus:outline-1 focus:outline-primary-700"
          required
        />
      </label>
      <label className="block" htmlFor="message">
        {messageLabel}
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="block min-h-[100px] w-full select-all rounded-md border-[1px] border-neutral-400 bg-white px-3 py-2 outline-0 focus:outline-1 focus:outline-primary-700"
          placeholder={messagePlaceholder}
          required
        />
      </label>

      {!isMessageAvailable && (
        <span className="text-center text-sm text-red-600">
          {restrictionText}
        </span>
      )}

      <span className="mx-auto">
        <GlassButton disabled={sending || !isMessageAvailable} type="submit" title="Send message">
          {isMessageAvailable ? (
            <span className="px-3">{sending ? sendingText : sendText}</span>
          ) : (
            <span className="px-3">{cooldownTimeLeft}</span>
          )}
        </GlassButton>
      </span>
    </form>
  );
}

