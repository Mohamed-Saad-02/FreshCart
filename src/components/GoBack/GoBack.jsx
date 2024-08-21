import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function GoBack({ replace = false }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1, { replace })}
      className="py-2 transition-colors duration-300 hover:text-gray-400 flex items-center gap-2"
    >
      <FontAwesomeIcon icon={faArrowLeft} size="lg" /> Back
    </button>
  );
}

export default GoBack;
