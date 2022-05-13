import { Field, Form, Formik, useField } from "formik";
import CustomPrimaryRadio from "../customPrimaryRadio/CustomPrimaryRadio";
import "./paymentForm.scss";

const PaymentForm = () => {
  const CustomTimeRadio = ({ span, ...props }) => {
    const [field] = useField(props);

    return (
      <label htmlFor={ props.id }>
        <input { ...props } { ...field } />
        <span className="payment__time-text-inputs">{ span }</span>
      </label>
    );
  };

  return (
    <div className="payment__actions">
      <Formik
        initialValues={ {
          address: "",
          comment: "",
          delivery: "",
          time: ""
        } }
        onSubmit={ () => {} }
      >
        <Form
          Form
          id="payment"
          className="payment__form">
          <label htmlFor="select-address" className="payment__label">
            <span className="payment__input-title">
              Ждём вас в кофейне по адресу
            </span>
            <Field
              as="select"
              id="select-address"
              name="address"
              className="payment__input"
            >
              <option value="">Выберите адресс</option>
              <option value="Ул. 50 лет Октября, 14">
                Ул. 50 лет Октября, 14
              </option>
              <option value="Ул. 50 лет Октября, 14">
                Ул. 50 лет Октября, 14
              </option>
              <option value="Ул. 50 лет Октября, 14">
                Ул. 50 лет Октября, 14
              </option>
            </Field>
          </label>
          <label htmlFor="input-comment" className="payment__label">
            <span className="payment__input-title">Комментарий</span>
            <Field
              type="text"
              id="input-comment"
              name="comment"
              className="payment__input"
              placeholder="Хочу кофе попит просто"
            />
          </label>
          <span className="payment__input-title">Заберете заказ через</span>
          <div
            className="payment__time-radio-group time-radio"
            role="group"
            aria-labelledby="time-radio-group"
          >
            <CustomTimeRadio
              type={ "radio" }
              name={ "time" }
              value={ "5" }
              id={ "5-minuts" }
              span={ "5 минут" }
            />
            <CustomTimeRadio
              type={ "radio" }
              name={ "time" }
              value={ "10" }
              id={ "10-minuts" }
              span={ "10 минут" }
            />
            <CustomTimeRadio
              type={ "radio" }
              name={ "time" }
              value={ "15" }
              id={ "15-minuts" }
              span={ "15 минут" }
            />
            <CustomTimeRadio
              type={ "radio" }
              name={ "time" }
              value={ "20" }
              id={ "20-minuts" }
              span={ "20 минут" }
            />
          </div>
          <div
            className="payment__delivery-radio-group custom-radio-input"
            role="group"
            aria-labelledby="delivary-radio-group"
          >
            <CustomPrimaryRadio
              name="delivery"
              value="with myself"
              id="withMyself"
            >
              <span>С собой</span>
            </CustomPrimaryRadio>
            <CustomPrimaryRadio
              name="delivery"
              value="inCoffeeShop"
              id="inCoffeeShop"
            >
              <span>В кофейне</span>
            </CustomPrimaryRadio>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentForm;
