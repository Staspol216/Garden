import "./backBtn.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { removeActiveBeverage } from "../drinkOrderCreator/drinkOrderCreatorSlice";

const BackBtn = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => {
    navigate(-1);
  };

  const goBackWithReset = () => {
    navigate(-1);
    dispatch(removeActiveBeverage({}));
  };

  return (
    <button onClick={ props.resetBeverage ? goBackWithReset : goBack } className="back-btn">
      { props.children }
    </button>
  );
};

export default BackBtn;
