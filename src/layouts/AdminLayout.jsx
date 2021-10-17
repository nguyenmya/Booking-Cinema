import withLayout from "hocs/withLayout";
import Admin from "../container/admin/AdminLayout/Admin";
import React from "react";

function AdminLayout(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 mt-10">
            {""}
            <Admin />
          </div>
          <div className="col-9 mt-10">{props.children}</div>
        </div>
      </div>
    </>
  );
}

export default withLayout(AdminLayout);

