import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Page404() {
  return (
    <div className="page-404">
      <img className="page-404__img" src="/images/error404.png" alt="error 404" />
      <Link className="page-404__link" to="/">
        Back to home page
      </Link>
    </div>
  );
}
