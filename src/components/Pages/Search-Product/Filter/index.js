import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { Menu, Checkbox, Input, Button } from 'antd'; 
 

import Fildata from '../../../data/FilterData';



const { SubMenu } = Menu;

 

const Filter = () => {
   
    return(
        <>
            <div className="filter__menu bg-white pb-3">
                <h5 className="pt-3 ps-3 pb-1 border-bottom text-dark mb-2">CATEGORIES</h5>
                <Menu mode="inline">
                    {
                        Fildata.fillData.map(data=>{
                            return <SubMenu key={data._id} title={data.name}>
                                        {
                                            data.subCategories.map(subCat=>{
                                                return <Menu.Item key={subCat.id}><Link to='/'>{subCat.name}</Link></Menu.Item>  
                                            })
                                        }
                                    </SubMenu>
                        })
                        
                    } 
                </Menu>

                <h5 className="pt-3 ps-3 pb-1 border-bottom text-dark mb-2">Service</h5>
                <div className="ps-3"> 
                    <Checkbox>Installment</Checkbox>
                    <Checkbox>Cash On Delivery</Checkbox>
                    <Checkbox>Free Shipping</Checkbox>
                </div>
                <h5 className="pt-3 px-3 pb-1 border-bottom text-dark mb-2">Price</h5>
                <div className="ps-3 d-flex"> 
                    <Input placeholder="Min" />
                    <Input placeholder="Max" />
                    <Button type="primary">Go</Button>
                </div>
            </div>
        </>
    )
}
export default Filter;
