import React from 'react';
import { Icons } from './icons';

const WhatsAppRedirect: React.FC = () => {
  const phoneNumber = '+6285646658259'; // Replace with the WhatsApp phone number (with country code)
  const message = 'Hello, I need help with your service.'; // Customize the message
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className='flex justify-center'>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Icons.whatsapp className="size-8" />
      </a>
    </div>
  );
};

export default WhatsAppRedirect;
