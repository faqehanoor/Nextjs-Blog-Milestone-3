import React from 'react';

export default function ContactUs() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-5xl text-center m-10">
        𝕮𝖔𝖓𝖙𝖆𝖈𝖙 𝖀𝖘 𝕹𝖔𝖜!
      </h1>
      <ul className="text-center text-2xl text-gray-600 space-y-4">
        <li>
          <span className="font-semibold">Email:</span> faqehanoor022@gmail.com
        </li>
        <li>
          <span className="font-semibold">Phone:</span> 0330254356
        </li>
        <li>
          <span className="font-semibold">LinkedIn:</span> <a href="https://www.linkedin.com/in/faqeha-noor-2b5a4a254/" className="text-blue-500 hover:underline">Faqeha Noor</a>
        </li>
      </ul>
    </div>
  );
}
