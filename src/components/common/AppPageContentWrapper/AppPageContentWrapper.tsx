import React from 'react';

import './AppPageContentWrapper.scss';
import { AppPageContentWrapperProps } from './types';

const AppPageContentWrapper = ({ children }: AppPageContentWrapperProps) => {
  return (
    <section>
      <div className="container w-100">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <div className={`${'pt-40 pb-80'}`}>{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPageContentWrapper;
