import styled from "styled-components";
import { Link } from "react-router-dom";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 33, 71, 0.7);
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 1;
  transition: background-color 0.3s ease-in-out;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #002147;
  color: white;
  width: ${({ open }) => (open ? "13%" : "5%")};
  height: 100vh;
  position: fixed;
  z-index: 2;
  transition: width 0.3s ease-in-out;
`;

export const Logo = styled.div`
display: flex;
width: 100%;
justify-content: center;
  img { 
    width: 100px;
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  margin: 10px;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ open }) => (open ? "100vh" : "0")};
  transition: max-height 0.3s ease-in-out;

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

export const MenuItem = styled.li`
  display: flex;
  width: 100%;
  transition: background-color 0.3s ease-in-out;

  &:hover .subcategory {
    opacity: 1;
    max-height: 40vh;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  border-top: 1px solid #0c3861;
  border-bottom: 1px solid #0c3861;
  width: 100%;
  height: 70px;
  line-height: 70px;
  transition: background-color 0.3s ease-in-out;
  text-align: center;

  &:hover {
    background-color: #003366;
  }
`;

export const SubCategories = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #003366;
  position: absolute;
  left: 100%;
  top: 35%;
  width: 200px;
  max-height: 0;
  height: 100vh;
  overflow: hidden;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
`;

export const SubCategoryItem = styled.p`
  color: white;
  text-align: center;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ffcc00;
  }
`;

export const Contact = styled.div`
  margin: 10px 0;

  button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: darkred;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  margin: 10px 0;

  i {
    margin: 0 10px;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

