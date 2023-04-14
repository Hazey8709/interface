import React from "react";
import {
    FaGithub,
    FaFacebook,
    FaYoutube,
    FaCircle,
    FaTwitter,
    FaStackOverflow,
    FaLinkedin,
    FaCalculator,
} from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { FcTodoList } from "react-icons/fc";
import { CiMobile1, CiMobile2 } from "react-icons/ci";

const QuickLinks = (props) => {
    return (
        <footer>
            <div style={style.iconCont}>
                <a style={style.link} href='https://github.com/Hazey8709'>
                    <FaGithub style={style.github} />
                </a>
                <a
                    style={style.link}
                    href='https://www.facebook.com/people/Noobie-Js/100077721983756/'
                >
                    <FaFacebook style={style.facebook} />
                </a>
                <a
                    style={style.link}
                    href='https://www.youtube.com/channel/UC7fWlqdyFBA1FwEVhtDMcuA'
                >
                    <FaYoutube style={style.youtube} />
                </a>
                <a
                    style={style.link}
                    href='https://www.bitdegree.org/user/Hazey87/profile'
                >
                    <FaCircle style={style.circle} />
                </a>
            </div>

            <div style={style.iconCont}>
                <a
                    style={style.link}
                    href='https://www.linkedin.com/in/jordan-f-97980725b/'
                >
                    <FaLinkedin style={style.linkedin} />
                </a>
                <a style={style.link} href='https://twitter.com/JordanFortin87'>
                    <FaTwitter />
                </a>
                <a
                    style={style.link}
                    href='https://stackoverflow.com/users/20392612/noobiej?tab=profile'
                >
                    <FaStackOverflow style={style.stack} />
                </a>
                <a
                    style={style.link}
                    href='https://portfolium.com/jordanfortin'
                >
                    <AiFillProfile style={style.portfolium} />
                </a>
            </div>

            <div style={style.iconCont}>
                

                <a
                    style={style.link}
                    href='https://main.d1c74q1u2phtya.amplifyapp.com/'
                >
                    <FcTodoList style={style.todo} />
                </a>
                <a
                    style={style.link}
                    href='https://main.d13t589wbjqpur.amplifyapp.com/'
                >
                    <FaCalculator style={style.calculator} />
                </a>
                <a
                    style={style.link}
                    href='https://main.do8onr1c6xllw.amplifyapp.com/'
                >
                    <CiMobile1 style={style.mobile1} />
                </a>
                <a
                    style={style.link}
                    href='https://deploy.d1dz9gbyrcncvk.amplifyapp.com/'
                >
                    <CiMobile2 style={style.mobile2} />
                </a>
            </div>
        </footer>
    );
};

export default QuickLinks;

const style = {
    iconCont: {
        border: "1px solid white",
        backgroundColor: "#0005",
        borderRadius: ".5rem",
        textAlign: "center",
        margin: "0 auto",
        marginTop: "1.8rem",
        padding: ".3rem",
        // // width: "90%",
        // height: "1rem",
    },

    link: {
        padding: ".5rem",
        fontSize: "20px",
        pointer: "cursor",
    },

    //! Links color
    github: {
        color: "black",
    },

    facebook: {
        color: "darkBlue",
    },

    youtube: {
        color: "red",
    },

    circle: {
        color: "green",
    },

    linkedin: {
        color: "Blue",
    },

    stack: {
        color: "orange",
    },

    portfolium: {
        color: "white",
    },

    calculator: {
        color: "yellow",
    },

    mobile1: {
        color: "limeGreen",
    },

    mobile2: {
        color: "lightCoral",
    },
};
