import React from 'react';
import PropTypes from 'prop-types';

const images = require('../images');


export default function MultisigSubmitModal(props) {
    const { name, submit } = props;
    const imageName = name === 'Lobstr Vault' ? 'sign-vault' : 'sign-stellarguard';
    return (
        <div className="MultisigSubmitModal ">
            <div className="MultisigSubmitModal__header">
                Sign transaction with your {name}
            </div>
            <div className="MultisigSubmitModal__content">
                <img
                    src={images[imageName]}
                    className="MultisigSubmitModal__logo"
                    alt={name} />
                <span>Transaction has been sent to your {name}</span>
            </div>
            <div className="MultisigSubmitModal__navigation">
                <button className="MultisigSubmitModal__button" onClick={() => submit()}>Ok</button>
            </div>
        </div>
    );
}
MultisigSubmitModal.propTypes = {
    name: PropTypes.string,
    submit: PropTypes.func,
};

