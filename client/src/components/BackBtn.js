import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate(-1)}> &#x2B05; Go back</button>
    </div>
  );
};

export default BackBtn;
