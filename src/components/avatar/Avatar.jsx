import "./avatar.scss";
import AvatarIcon from "../../assets/banner_icon/036-robot-1.svg";

const Avatar = () => {
  return (
    <div className="avatar">
      <div className="avatar__box">
        <img src={ AvatarIcon } alt="Avatar" />
      </div>
    </div>
  );
};

export default Avatar;
