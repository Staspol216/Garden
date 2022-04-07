import CupImg from "../../assets/categoriesPage/Cup.png";
import "./altDrinksListItem.scss";
import { Link, useParams } from "react-router-dom";

const AltDrinksListItem = (props) => {

    const { shop, category } = useParams();

    const { name, price, slug } = props;

    return (
        <Link to={ `/${shop}/${category}/${slug}` } className="single-category__item">
            <div className="single-category__img">
                <img src={ CupImg } alt="CupImg" />
            </div>
            <div className="single-category__item-bottom">
                <div className="single-category__name">{ name }</div>
                <div className="single-category__price">{ price } ₽</div>
            </div>
        </Link>

    );
};

export default AltDrinksListItem;
