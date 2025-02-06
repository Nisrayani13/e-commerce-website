import { Github, Linkedin } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-footerBackground w-full text-sm md:text-base">
      <div className="flex justify-around gap-x-10 px-8 pt-4">
        <div>
          <div className="font-semibold mb-3">Shop</div>
          <ul>
            <li className="pb-1">Home & Living</li>
            <li className="pb-1">Accessories</li>
            <li className="pb-1">Stationery</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 flex flex-col">Helpful links</div>
          <ul>
            <li className="pb-1">FAQ</li>
            <li className="pb-1">Terms and conditions</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3 flex flex-col">Contact</div>
          <ul>
            <li className="break-all">
              <a href="mailto:nisrayani.13@gmail.com">nisrayani.13@gmail.com</a>
            </li>
            <li className="pb-1">+91 222222222</li>
            <li className="pb-1">
              <a href="https://github.com/Nisrayani13" className="flex gap-x-1.5">
              <Github size={20}></Github>
              <div >Github</div></a>
            </li>
            <li className="pb-1">
              <a href="https://www.linkedin.com/in/nisrayani-raj-12a317242?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BfHQo5VKxTL6ZXeb5FkfeFw%3D%3D"
              className="flex gap-x-1.5" >
              <Linkedin size={20}></Linkedin>
              <div>LinkedIn</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center text-xs italic pb-1.5 pt-0.5 border-t border-slate-300">
        &copy; 2024 Nisrayani Raj. All rights reserved.
      </div>
    </footer>
  );
}
