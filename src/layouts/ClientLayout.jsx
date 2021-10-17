// import Footer from "components/Footer/Footer";
// import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import withLayout from "hocs/withLayout";
import React from "react";

function ClientLayout(props) {
  return (
    <>
      <div className="">
        <div>
          <Header />
        </div>
        <div>
          {props.children}
        </div>
        
        <div className="mt-20">
          <Footer />

        </div>


      </div>
    </>
  );
}

export default withLayout(ClientLayout);
