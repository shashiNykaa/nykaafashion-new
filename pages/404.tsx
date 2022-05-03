import React, { memo, useEffect } from 'react';
import Link from 'next/link'
import { TEXT } from '../constants/error';

function NotFoundError() {
  return (

      <div className="brokenPage">
        <div className="brokenLink icon-broken-link" />
        <div data-test={'404'} className="msg404">
          {TEXT.FOUR_O_FOUR}
        </div>
        <div data-test={'broken-message'} className="brokenmsg">
          {TEXT.BROKEN_MSG}
        </div>
        <div data-test={'corrupt-message'} className="corruptmsg">
          {TEXT.CORRUPT_MSG}
        </div>
        <Link href="/" className="goBack">
          {TEXT.HOME_LINK_LABEL}
        </Link>
      </div>
  );
}

export default memo(NotFoundError);
