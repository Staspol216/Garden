import { Link, useParams } from "react-router-dom";
import CupImg from "assets/categoriesPage/Cup.png";
import "./altDrinksListItem.scss";

const AltDrinksListItem = ({ name, price, slug }) => {

    const { shop, category } = useParams();

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
