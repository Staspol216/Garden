import { useField } from "formik";
import "./customPrimaryRadio.scss";

const CustomPrimaryRadio = ({ children, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <label htmlFor={ props.id }>
      <input
        type="radio"
        { ...props }
        { ...field }
      />
      { children }
    </label>
  );

};

export default CustomPrimaryRadio;
