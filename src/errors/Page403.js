import React from "react";
import { Link } from 'react-router-dom';
function Page403() {
  return (
    <div>
      <h1>403 | Forbidden</h1>
      <p>Access Denied</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Page403;
