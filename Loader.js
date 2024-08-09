import React from 'react';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
  display: block;
  margin: 0 auto;
`;

const BeatLoaderComponent = ({
    loading,
    size = 20,
    color = '#00966b',
    // gradient = 'linear-gradient(135deg, #8E2DE2, #4A00E0)',
}) => {
    return (
        <div
            className="beat-loader"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: loading ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                background: "rgba(255, 255, 255, 0.5)",
            }}
        >
            <BeatLoader color={color} loading={loading} css={override} size={size} />
        </div>
    );
};

export default BeatLoaderComponent;
