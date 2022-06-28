import {
  SearchOffOutlined,
  SearchOutlined,
  ShoppingBasket,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.scss";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul className="ul-items">
          <li className="li-items">
            <Link to="/"></Link>
            <Link to="/denim">Кто мы</Link>
            <Link to="/coats" className="orange">
              Каталог
            </Link>
            <Link to="/pants" className="orange">
              Условия работы
            </Link>
            <Link to="/pants" className="orange">
              Доставка
            </Link>
          </li>
        </ul>
        <div className="logo">
          <h1>Modeshop</h1>
        </div>
        <div className="right">
          <div className="search">
            <SearchOutlined className="search-icon " />
            <button className="btn-search">Поиск</button>

            <div className="right-buttons">
              <button>
                <Link to="/login ">Войти</Link>
              </button>
              <button>
                <Link to="/sign-up ">Зарегистрироваться</Link>
              </button>
              <ShoppingBasket className="basket" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
