import React from 'react';
import CustomTitle from "../../../../../component/CustomTitle";
import { Collapse, Row, Col } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './styles.scss'
import { listGuide } from "./script";
const { Panel } = Collapse;

const Section2 = () => {

    const renderListGuide = () => {
        return listGuide.map((guide) => (
            <Col lg={12} sm={24}>
                <div className="home__section-2--card">
                    <h2>{guide.title}</h2>
                    <Collapse accordion={true} bordered={false} defaultActiveKey={['0']} style={{backgroundColor: "transparent"}}>
                        {guide.questions.map((ques, index) => (
                            <Panel header={ques.title} key={index} className="home__section-2--card__panel">
                                <p>
                                    {ques.sections[0].text}
                                </p>
                                <a href={`/intro/${ques.id}`}>View more <RightOutlined /></a>
                            </Panel>
                        ))}
                    </Collapse>
                </div>
            </Col>
        ))
    }

    return (
        <section className="home__section home__section-2">
            <CustomTitle name="two" title="PTE Knowledge"/>
            <Row gutter={32} wrap={true} className="home__section-2--wrapper">
                {renderListGuide()}
            </Row>
        </section>
    );
}

export default Section2;
