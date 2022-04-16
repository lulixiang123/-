import React,{FC} from "react";
import {ProfileFilled} from "@ant-design/icons";
import Link from "next/link";

interface Props {

}

const Navbar:React.FC<Props> = () => {
    return (
        <>
            <nav>
                <div id="homeLogo">
                    <div id="title"><ProfileFilled />快速投官方</div>
                    <div id="summary">年轻人的第一份问卷</div>
                </div>
                <div id="linkList">
                    <Link href={"/"} ><a>快投首页</a></Link>
                    <Link href={"/report"} ><a>招聘计划</a></Link>
                    <a href="http://localhost:4000">系统登录</a>
                </div>
            </nav>
            <style jsx>
                {`
                      nav{height: 90px;width: 100%;display: flex;justify-content: space-around;align-items: center;position: absolute;}  
                      nav #homeLogo{text-align: center;color: white;margin: 0 100px;}  
                      nav #homeLogo #title{font-size: 1.4rem;font-weight: bold;}  
                      nav #homeLogo #summary{font-size: 0.8rem;}  
                      nav #linkList a{font-size: 1.2rem;font-weight: bold;color: white;margin: 0 20px;letter-spacing: 2px;text-decoration-line:none}  
                      nav #linkList a:hover{color: #17a2b8;border-bottom: 2px solid #17a2b8;}
                `}
            </style>
        </>
    );
};

export default Navbar;
