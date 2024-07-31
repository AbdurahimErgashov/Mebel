// utils.js
import Home from '../pages/Home/Home';
import Categories from '../pages/Categories/Categories';
import Contacts from '../pages/Contacts/Contacts';

export const navItems = [
  { title: "Главная", path: "/home", component: <Home/> },
  { title: "Категории", path: "/categories", component: <Categories/> },
  { title: "Контакты", path: "/contacts", component: <Contacts/> }
];

export const subCategories = [
  'Kravat',
  'Parta',
  'Podobuv',  
  'Prixoshka',
  'Shkaf',
  'Tumba'
];
