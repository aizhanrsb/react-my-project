import React from "react";
import "../styles/Footer.scss";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallIcon from "@mui/icons-material/Call";

const Footer = () => {
  return (
    <section className="footer">
      <p>
        <span>
          Telegram <TelegramIcon className="span-icon" />
        </span>
        <span>
          WhatsApp <WhatsAppIcon className="span-icon" />
        </span>
        <span>
          Instagram <InstagramIcon className="span-icon" />
        </span>
      </p>
      <p>
        <h2>ModeShop</h2>

        <span>
          {" "}
          +996 559 656 000 <CallIcon className="span-icon" />
        </span>
        <span>
          +996 700 89 99 56 <CallIcon className="span-icon" />
        </span>
      </p>
      <p>
        <span>
          О нас <TelegramIcon className="span-icon" />
        </span>
        <span>
          <WhatsAppIcon className="span-icon" />
        </span>
        <span>
          Instagram <InstagramIcon className="span-icon" />
        </span>
      </p>
    </section>
  );
};

export default Footer;
