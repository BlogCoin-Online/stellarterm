import React from 'react';
import PropTypes from 'prop-types';

const images = require('../images');


export default function MultisigUnknownSubmitModal(props) {
    return (
    <div className="MultisigUnknownSubmitModal ">
        <div className="MultisigUnknownSubmitModal__header">
            More signatures needed
        </div>
        <div className="MultisigUnknownSubmitModal__content">
            <div className="MultisigUnknownSubmitModal__title">
                <img
                    src={images['sign-unknown']}
                    className="MultisigUnknownSubmitModal__logo"
                    alt="sign unknown" />
                <div>
                    <span><b>Your account has multisignature enabled.</b></span>
                    <span>StellarTerm has signed the transaction, now continue with your multisig service</span>
                </div>
            </div>
            <div className="MultisigUnknownSubmitModal__XDR_header">
                <span>Transaction XDR</span>
                <div onClick={() => window.navigator.clipboard.writeText(props.tx)}>
                    <img src={images['icon-copy']} alt="copy" width="24" height="24" />
                    <span>COPY</span>
                </div>
            </div>
            <div className="MultisigUnknownSubmitModal__XDR_content">
                <textarea defaultValue={props.tx} />
                <span>Copy this XDR to your multisignature service and add additional signatures.</span>
            </div>
        </div>
        <div className="MultisigUnknownSubmitModal__navigation">
          <button className="MultisigUnknownSubmitModal__button" onClick={() => props.submit()}>Ok</button>
        </div>
    </div>
    );
}
MultisigUnknownSubmitModal.propTypes = {
    tx: PropTypes.string,
    submit: PropTypes.func,
};
