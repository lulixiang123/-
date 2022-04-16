import React from "react";
import Navbar from "./Navbar";
import {PhoneOutlined,MailOutlined} from "@ant-design/icons";

interface Props {
}

const Footer:React.FC = ({children}) => {
    return (
        <>
            <footer>
                <div className="footerItem">
                    <div>联系电话 <PhoneOutlined /> 17377793156</div>
                    <div>联系邮箱 <MailOutlined /> 614252324@qq.com</div>
                </div>
                <div className="footerItem">
                    <div>京公网安备 11010102005690号</div>
                    <div>京ICP备 2021029920号</div>
                </div>
            </footer>
            <style jsx>
                {`
                      footer{height: 90px;width: 100%;display: flex;justify-content: space-around;align-items: center;position: absolute;flex-wrap: wrap;;background: #1A1A1A;color:white;font-size: 1.1rem}
                     
                `}
            </style>
        </>
    );
};
export default Footer;