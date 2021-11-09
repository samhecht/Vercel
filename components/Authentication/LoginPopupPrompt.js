import React, { useState, useEffect } from 'react';
import EvoLogin from './EvoLogin';
import { Modal, Button } from 'antd';

const LoginPopupPrompt = ({ visibleProp, setShowLoginModal }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (visible != visibleProp) {
            setVisible(visibleProp);
        }
    });

    const handleCancel = () => {
        setShowLoginModal(false);
    };

    return (
        <Modal 
            title="Login"
            onCancel={handleCancel}
            visible={visible}
            footer={[
                <Button key="back" onClick={handleCancel}>
                No Thanks
                </Button>,
                <EvoLogin hideModal={() => {
                    setShowLoginModal(false);
                }}/>
            ]}
        >
            <p>Please login with Twitter to interact with page</p>
        </Modal>
    );
};

export default LoginPopupPrompt;