import PropTypes from 'prop-types';

import { CiPlane } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { CiFolderOn } from "react-icons/ci";

import { AiFillGithub } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export const headerMenus = [
    {
        title: "현정의 Youtube",
        icon: <CiPlane />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <CiYoutube />,
        src: "/today"
    },
    {
        title: "추천 개발자",
        icon: <CiUser />,
        src: "/developer"
    },

    {
        title: "웹표준 사이트",
        icon: <CiCircleList />,
        src: "/website"
    },
    {
        title: "포트폴리오 사이트",
        icon: <CiDesktop />,
        src: "/port"
    },
    {
        title: "유튜브 클론 사이트",
        icon: <CiFolderOn />,
        src: "/youtube"
    },
];

export const snsLink = [
    {
        title: "github",
        url: "https://github.com/",
        icon: <AiFillGithub />
    },
    {
        title: "youtube",
        url: "https://www.youtube.com/",
        icon: <AiFillYoutube />
    },
    {
        title: "instagram",
        url: "https://www.instagram.com/",
        icon: <AiOutlineInstagram />
    },
]
