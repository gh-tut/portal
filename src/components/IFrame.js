import React from 'react';
import styled from 'styled-components/macro';
function IFrame({ iframe }) {
  return (
    <div
      css={`
        width: 100%;
      `}
    >
      <div
        css={`
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          iframe {
            width: 90%;
            max-width: 800px;
          }
          @media screen and (max-width: 479px) {
            iframe {
              width: 95%;
            }
          }
        `}
        dangerouslySetInnerHTML={{ __html: iframe }}
      />
    </div>
  );
}

export default IFrame;
