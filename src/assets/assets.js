import logo from './logo.png';
import logo_full from './logo_full.png';
import logo_insta from './logo_insta.png';
import logo_cats from './logo_cats.png';
import icon_search from './icon_search.png';
import icon_user from './icon_user.png';
import icon_bag from './icon_bag.png';
import icon_menu from './icon_menu.png';
import icon_back from './icon_back.png';
import icon_sustentability from './icon_sustentability.png';
import icon_quality from './icon_quality.png';
import icon_exchange from './icon_exchange.png'
import p_img_1 from './p_img_1.jpeg';
import p_img_2 from './p_img_2.jpeg';
import p_img_3 from './p_img_3.jpeg';
import p_img_4 from './p_img_4.jpeg';
import p_img_5 from './p_img_5.jpeg';
import p_img_6 from './p_img_6.jpeg';

const Assets = {
    logo,
    logo_full,
    logo_cats,
    logo_insta,
    icon_search,
    icon_user,
    icon_bag,
    icon_menu,
    icon_back,
    icon_sustentability,
    icon_exchange,
    icon_quality,
    p_img_1,
    p_img_2,
    p_img_3,
    p_img_4,
    p_img_5,
    p_img_6
};

const Products = [
    {
        _id: "1",
        name: "Calça de Alfaiataria Preta",
        description: "Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.",
        price: 65,
        image: [p_img_1],
        category: "Unissex",
        subCategory: "Calças",
        sizes: ["G"],
        date: 1741998322,
        new_drop: true
    },
    {
        _id: "2",
        name: "Calça de Alfaiataria Cinza Escuro",
        description: "Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.",
        price: 55,
        image: [p_img_2],
        category: "Unissex",
        subCategory: "Calças",
        sizes: ["M"],
        date: 1741998322,
        new_drop: true
    },
    {
        _id: "3",
        name: "Vestido Preto com Cinza",
        description: "Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.",
        price: 70,
        image: [p_img_3],
        category: "Feminino",
        subCategory: "Vestidos",
        sizes: ["M"],
        date: 1741998322,
        new_drop: false
    },
    {
        _id: "4",
        name: "Bermuda de Alfaiataria Cinza",
        description: "Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.",
        price: 40,
        image: [p_img_4],
        category: "Masculino",
        subCategory: "Bermudas",
        sizes: ["M"],
        date: 1741998322,
        new_drop: true
    },
    {
        _id: "5",
        name: "Blazer Cinza",
        description: "Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.",
        price: 75,
        image: [p_img_5],
        category: "Unissex",
        subCategory: "Blazers",
        sizes: ["P"],
        date: 1741998322,
        new_drop: false
    },
    {
        _id: "6",
        name: "Blazer Cinza Escuro",
        description: "Descrição sem uso nenhum apenas para preencher espaço para teste de produtos.",
        price: 75,
        image: [p_img_6],
        category: "Unissex",
        subCategory: "Blazers",
        sizes: ["G"],
        date: 1741998322,
        new_drop: true
    },
]

export {Assets, Products};