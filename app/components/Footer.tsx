import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-footerBackground flex justify-between px-8 py-3 text-sm md:text-base">
      <div>
        <div className="font-semibold mb-3 flex flex-col">Shop</div>
        <ul> 
          <li>Home & Living</li>
          <li>Accessories</li>
          <li>Stationery</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-3 flex flex-col">Helpful links</div>
        <ul> 
          <li>FAQ</li>
          <li>Terms and conditions</li>
        </ul>
      </div>
      <div>
        <div className="font-semibold mb-3 flex flex-col">Contact</div>
        <ul> 
          <li>nisrayani.13@gmail.com</li>
          <li>+91 222222222</li>
          <li>Github</li>
          <li>LinkedIn</li>
        </ul>
      </div>
    </footer>
  );
}