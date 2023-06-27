import { Col, Row } from "antd";
import styled from "@emotion/styled";
import { Modal } from "antd";


const ConfirmModel = (props) => {
const { title, open, onOk, onCancel, modelText } = props;
return (
    <Row style={{ justifyContent: "center", alignItems: "center" }}>
    <Col>
        <Modal
        title={title ?? "Alert!"}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        >
        <div>
            <p>{modelText}</p>
        </div>
        </Modal>
    </Col>
    </Row>
);
};

export default ConfirmModel;
