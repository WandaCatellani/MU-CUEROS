import "./WhatsApp.scss";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  return (
    <div className="btn-whats">
      <a
        href="https://api.whatsapp.com/send?phone=542804021588&text=Hola!%20Gracias%20por%20comunicarte%20con%20nosotros."
        target="blank"
      >
        <FaWhatsapp className="icon-w" />
      </a>
    </div>
  );
};

export default WhatsApp;
