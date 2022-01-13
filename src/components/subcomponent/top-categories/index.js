
import './style.scss';
import {Row, Col, Card} from 'antd';

const TopCategories = (props) => {
    // console.log(props.catList);
    return (
        <>
            <section className="pb-5">
                <div className="container">
                    <Row gutter={[16, 16]}>
                        {
                            props.catList.categories.map(category=>{
                                return <Col lg={8} md={12} sm={12} xs={24} key={category._id.toString()} className='d-flex'>
                                <Card bordered={true} className='bg-light top__category__card shadow-sm border w-100'>
                                    <div className='d-flex '>
                                        <img src={category.img} className='img-fluid cat__img' alt='home-device'/>
                                        <div className='caption ps-xl-5 ps-md-4 ps-3'> 
                                            <h5>{category.catName}</h5>
                                            <ul> 
                                                {
                                                    category.categoryList.map(list=>{
                                                        return <li key={list._id.toString()}><a href='#'>{list.name}</a></li>
                                                    })
                                                }
                                            </ul>
                                        </div>

                                    </div>
                                </Card>
                            </Col>
                            })
                        }
                        
                    </Row> 
                </div>
            </section>
            
        </>
    )
}

export default TopCategories;
