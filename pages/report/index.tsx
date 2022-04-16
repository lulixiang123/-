import {GetServerSideProps,NextPage} from "next";
import React from "react";
import Head from "next/head"
import axios from "axios";
import {Button} from "antd";
import {BarChartOutlined, HighlightOutlined, MoneyCollectOutlined, RiseOutlined} from "@ant-design/icons";
type props={address:Array<{ city_id: number, city_name:string, province_id:number }>}

const Index: NextPage<props> = (props) => {
    return (
        <>
            <Head>
                <title>联系我们</title>
            </Head>

            <main>
                <div id="bannerImg">
                    <div id="banner">
                        <h1 className='h1' style={{color:"white"}}>问卷调查? 用快速投就够了!</h1>
                        <h2 className='h3' style={{color:"white"}}>快速创建,便捷填写</h2>
                        <Button type="primary" danger style={{width:240,height:56,marginTop:50,fontSize:'1.25rem'}}>免费开始</Button>
                    </div>
                </div>
                <section>
                    <div className='h1'>招聘地点</div>
                    {
                        props.address.map((item,index)=>{
                            switch (index){
                                case 0:
                                    return (
                                        <>
                                            <div className={'position'}>技术执行官</div>
                                            <div className={'address'} key={item.city_name}>{item.city_name}</div>
                                        </>
                                    )
                                case 3:
                                    return(
                                        <>
                                            <div className={'position'}>后端工程师</div>
                                            <div className={'address'} key={item.city_name}>{item.city_name}</div>
                                        </>
                                    )
                                case 18:
                                    return(
                                        <>
                                            <div className={'position'}>UI设计师</div>
                                            <div className={'address'} key={item.city_name}>{item.city_name}</div>
                                        </>
                                    )
                                default:
                                    return (
                                        <div className={'address'} key={item.city_name}>{item.city_name}</div>
                                    )
                            }

                        })
                    }
                </section>
            </main>
            <style jsx>
                {`
                     #banner{height:100vh;min-height: 100vh;min-width: 500px;display: flex;justify-content: center;align-content: center;flex-wrap: wrap;background-color: rgba(57, 49, 49, 0.7);}
                     #bannerImg{background-image: url("/reportBanner.jpg")}  
                     .h1{width: 100%;text-align: center;font-size: 3rem;font-weight: bold}  
                     .h3{width: 100%;text-align: center;font-size: 1.25rem}  
                     section{width: 80%;margin: 0 10%;display: flex;flex-wrap: wrap;padding: 50px 0}
                     
                     section .position{width: 100%;font-size: 32px;color: cornflowerblue}
                     section .address{width: 12.5%;margin: 10px 0;text-align: center;font-weight: bold;font-size: 20px}
                `}
            </style>
        </>
    )
}

//props动态获取数据
export const getServerSideProps:GetServerSideProps =async (ctx)=> {
    //方法需要返回一个props属性，会合并到属性上
    const result=await axios.get("http://localhost:3000/api/getAddress")
    return {
        props: {
            address: result.data.address
        }
    };
}
export default Index
