import { useState } from "react"; 
import { Card, Row, Col, Button } from 'antd';
import styled from '@emotion/styled';
import ConfirmModel from '../confirmModal/Modal';

const CustomCard = styled(Card)`
.ant-card-body {
    padding: 0px;
}
`;

const boxStyle = {
    marginTop:'8px',
    fontSize: '10px',
    color:"black",
    padding: '3px',
    fontWeight: 400,
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    background: 'white',
    marginLeft: "12px"
};


export const PremiumCard = (props) => { 
    const { Meta } = Card;
    const [isVisible, setIsVisible] = useState(false)

    const onHandleClick = () => { return setIsVisible(true) }

return (
    <>
        <ConfirmModel
            open={isVisible}
            onCancel={() => { setIsVisible(false) }}
            onOk={() => { setIsVisible(false) }}
            modelText={'Are you sure you want perform changes'}
        />
    <Row style={{padding:'20px 0'}}>
        {props && 
        <Col>
            <CustomCard
                hoverable style={{display:'flex', width: "540px", height: '250px',  background: `${props?.data?.color}`, color:'white' }}
                cover={ <img alt="example" style={{display:'flex', width: "250px", height: '250px' }} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> }
            >
                <div style={{padding: '0 20px'}}>

                    <div style={{  display:'flex' }}>
                        <span style={boxStyle} >TAG</span>
                        <span style={boxStyle}>TAG</span>
                        <span style={boxStyle}>TAG</span>
                    </div>

                    <h5 style={{color: 'white', marginTop:'10px', fontWeight: 600, fontStyle:'Poppins', fontSize: "18px" }} >{props?.data?.title}</h5>
                    
                    <p style={{marginTop:"-28px"}} >{props?.data?.org}</p>
                    
                    <span className="product__rating" style={{display:'flex', marginTop:"-23px"}}>
                        <span style={{ marginTop: '14px', marginRight:"2px"}}>{props?.data?.rating}</span> {Array(Math.round(props?.data?.rating)).fill().map((rate) => ( <p>⭐</p> ))} <span style={{ marginTop: '14px', marginLeft:'2px'}}>376 Ratings</span>
                    </span>          
                    
                    <p style={{ marginTop:"-9px"}} >{props?.data?.venue}</p>
                    
                    <p style={{fontSize: '12px', marginTop:"-8px"}}>Starts From</p>
                    
                    <div style={{marginTop: '-18px' }} >
                        <span style={{color: '#ED510C', fontWeight: 700, fontSize: '21px'}}>
                            ${props?.data?.discprice}
                        </span>
                        <span style={{ fontWeight: 400, fontSize: '18px', paddingLeft:"5px", textDecoration:'line-through'}} >
                            {props?.data?.price}
                        </span>
                    </div>
                    <br/>
                    
                    <div style={{marginTop: '-18px' }} >
                        <Button style={{backgroundColor: 'transparent', color:'white', border: '1px solid white'}}
                            onClick={() => {onHandleClick()}}>Button</Button>
                    </div>

                </div>
            </CustomCard>
        </Col>}
    </Row>
    </>
);
};

export const OrdinaryCard = (props) => {
return (
    <>
    <Row>
        <Col style={{padding:'10px 0' }} >
            <CustomCard
                hoverable
                cover={ <img alt="example" style={{ height: '150px' }}  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" /> }
            >
                <div style={{padding: '0 20px'}}>

                    <div style={{  display:'flex', color:'black' }}>
                        <span style={boxStyle} >{props?.data?.tag?.tag1}</span>
                        <span style={boxStyle}>{props?.data?.tag?.tag2}</span>
                        <span style={boxStyle}>{props?.data?.tag?.tag3}</span>
                    </div>

                    <h5 style={{ marginTop:'10px', fontWeight: 600, fontStyle:'Poppins', fontSize: "18px" }} >{props?.data?.title}</h5>

                    <p style={{marginTop:"-28px"}} >{props?.data?.org}</p>

                    <span className="product__rating" style={{display:'flex', marginTop:"-23px"}}>
                    <span style={{ marginTop: '14px'}}>{props?.data?.rating}</span> {Array(Math.round(props?.data?.rating)).fill().map((rate) => ( <p>⭐</p> ))} <span style={{ marginTop: '14px'}}>376 Ratings</span>
                    </span>          

                    <p style={{ marginTop:"-9px"}} >{props?.data?.venue}</p>

                    <p style={{fontSize: '12px', marginTop:"-8px"}}>Starts From</p>

                    <div style={{marginTop: '-18px' }} >
                    <span style={{color: '#ED510C', fontWeight: 700, fontSize: '21px'}}>
                        ${props?.data?.discprice}
                    </span>
                    <span style={{ fontWeight: 400, fontSize: '18px', paddingLeft:"5px", textDecoration:'line-through'}} >
                        {props?.data?.price}
                    </span>
                    </div>
                </div>
            </CustomCard>
        </Col>
    </Row>
    </>
);
};
