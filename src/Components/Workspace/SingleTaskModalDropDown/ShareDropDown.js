import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  TelegramIcon,
} from "react-share";
const ShareDropDown = () => {
  return (
    <div
      tabIndex={5}
      className="dropdown-content p-2 rounded-md w-64 bg-stone-300 divide-black text-black"
    >
      <p className="font-semibold space-x-3 text-center">Share</p>

      <hr />
      <div className="flex items-center justify-center mt-4">
        <div className="pr-2">
          <EmailShareButton
            url={"https://mail.google.com/"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </div>
        <div className="pr-2">
          <FacebookShareButton
            url={"https://www.facebook.com/"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
        </div>
        <div className="pr-2">
          <TwitterShareButton
            url={"https://twitter.com/"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
        </div>
        <div className="pr-2">
          <WhatsappShareButton
            url={"https://www.whatsapp.com"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
        <div className="pr-2">
          <TelegramShareButton
            url={"https://telegram.org"}
            quote={"Dummy text!"}
            hashtag="#muo"
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
};

export default ShareDropDown;
