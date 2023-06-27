import { Row, Col,  Button, Dropdown  } from "antd"
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { PremiumCard, OrdinaryCard } from "../PremiumCard/PremiumCard";

const items = [
{
    key: '1',
    label: (
    <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
    </a>
    ),
},
];

const Content = () => {
    const headDropdown = ["Haircut", "Beauty & Spa", "Location", "Price" ]
    const arr = [1,2,3,4,5,6]

    return(
    <>
    <Row>
        <Col span={24} style={{padding: '0 140px' }}>
            <h1 style={{fontSize:'20px'}}>Haircut</h1>
            <Row>
                <Col>
                    {headDropdown.map((item) => {
                        return (
                            <Dropdown menu={{ items }} placement="bottom" arrow>
                                <Button>{item} <DownOutlined /></Button>
                            </Dropdown>
                        )
                    })}
                </Col>
                <Col>
                    <Dropdown menu={{ items }} placement="bottom" arrow>
                        <Button>Sort By <DownOutlined /></Button>
                    </Dropdown>
                </Col>
            </Row>
            <Row>
            <Col span={24}>
                    <h4 style={{color:'#72959A'}} >Featured Saloons</h4>
                <Row>
                    <Col span={12}>
                        <PremiumCard data={{ color:'#4E39B7', title:"Haircut", org:"ABC", discprice: 50.00, price: 950, venue: "Vishnu, Signapore", rating: 4.2 }} />
                    </Col>
                    <Col span={12}>
                        <PremiumCard data={{ color:'#450303', title:"Trim", org:"CDE", discprice: 60.00 ,price: 750, venue: "Vishnu, Signapore", rating: 4.9 }} />
                    </Col>
                </Row>
                <Row gutter={16}>
                        {arr.map((item,ind) => {
                            return (
                                    <Col span={6} className="yoo">
                                        <OrdinaryCard data={{ title:"Trim", org:"CDE", discprice: 60.00 ,price: 750, venue: "Vishnu, Signapore", rating: 4.2,  tag : {tag1:"saloon", tag2:"beauty", tag3:"spa"} }} />
                                    </Col>
                            )
                        })}
                </Row>

            </Col>
            </Row>
        </Col>  
    </Row>
    </>
    )
}

export default Content;