import "./WhatsApp.scss";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const WhatsApp = () => {
  return (
    <div class="btn-whats">
      <Link
        to="https://api.whatsapp.com/send?phone=542804021588&text=Hola!%20Gracias%20por%20comunicarte%20con%20nosotros."
        target="_blank"
      >
        <FaWhatsapp class="icon-w" />
      </Link>
    </div>
  );
};

export default WhatsApp;
