
import { Form, Formik } from "formik";
import CustomPrimaryRadio from "../customPrimaryRadio/CustomPrimaryRadio";
import "./drinkOrderForm.scss";

const DrinkAdditievs = (props) => {

    const { onCreateOrder, onRenderCounter, backToAddBtn } = props;

    const handleSubmit = (additievs) => {
        onCreateOrder(additievs);
        onRenderCounter();
    };

    return (
        <div className="additives">
            <Formik
                initialValues={ {
                    cream: "",
                    modify: ""
                } }
                onSubmit={ (additievs) => {
                    handleSubmit(additievs);
                } }>
                { ()  => (
                    <Form id="additievs">
                        <div className="additives__title">Добавки</div>
                        <div
                            className="additives__group custom-radio-input"
                            role="group"
                            aria-labelledby="first-radio-group">
                            <CustomPrimaryRadio
                                type="radio"
                                name="cream"
                                value=""
                                id="first-radio"
                                onClick={ () => backToAddBtn() }
                            >
                                <span>Без добавок</span>
                            </CustomPrimaryRadio>
                            <CustomPrimaryRadio
                                type="radio"
                                name="cream"
                                value="+cливки"
                                id="second-radio"
                                onClick={ () => backToAddBtn() }
                            >
                                <span>Сливки</span>
                                <span className="additievs__add-price">20 ₽</span>
                            </CustomPrimaryRadio>
                        </div>
                        <div className="additives__title">Модификации</div>
                        <div
                            className="additives__group custom-radio-input"
                            role="group"
                            aria-labelledby="second-radio-group">
                            <CustomPrimaryRadio
                                type="radio"
                                name="modify"
                                value=""
                                id="third-radio"
                                onClick={ () => backToAddBtn() }
                            >
                                <span>Без модификаций</span>
                            </CustomPrimaryRadio>
                            <CustomPrimaryRadio
                                type="radio"
                                name="modify"
                                value="меньше сахара"
                                id="fourth-radio"
                                onClick={ () => backToAddBtn() }
                            >
                                <span>Меньше сахара</span>
                            </CustomPrimaryRadio>
                            <CustomPrimaryRadio
                                type="radio"
                                name="modify"
                                value="+соевое молоко"
                                id="fifth-radio"
                                onClick={ () => backToAddBtn() }
                            >
                                <span>Cоевое молоко</span>
                                <span className="additievs__add-price">20 ₽</span>
                            </CustomPrimaryRadio>
                        </div>
                    </Form>
                ) }
            </Formik>
        </div>
    );
};

export default DrinkAdditievs;
