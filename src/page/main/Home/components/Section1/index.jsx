import React from 'react';
import CustomTitle from "../../../../../component/CustomTitle";
import './styles.scss'
import {Row, Col} from 'antd'
import Button from '../../../../../component/Button/index'

const Section1 = () => {
    return (
        <section className="home__section home__section-1">
            <CustomTitle name="one" title="PTE Practice Platform"/>
            <Row gutter={50} wrap={true} className="home__section-1--container">
                <Col md={24} lg={12} className="home__section-1--col">
                    <img src="https://corptrain.thimpress.com/demo-kit/wp-content/uploads/sites/25/2019/10/img-1.png" alt="" />
                </Col>
                <Col md={24} lg={12} className="home__section-1--col">
                    <h1>Speaking & Writing</h1>
                    <div className="divider"></div>
                    <ul>
                        <li>Simulate Pearson PTE scoring engines</li>
                        <li>Evaluate speaking pronunciation & fluency</li>
                        <li>Check writing grammar and spelling</li>
                        <li>Synchronize practice records across Web & APPs</li>
                    </ul>
                    <Button outline>
                        Practise Now
                    </Button>
                </Col>
            </Row>
        </section>
    );
}

export default Section1;
