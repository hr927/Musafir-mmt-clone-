import React from "react";

import style_qna from "../CSS/Qna.module.css";

const Qna = () => {
  return (
    <>
      <div className={style_qna.container}>
        <div className={style_qna.top}>
          <div className={style_qna.left}>
            <h3> Why MakeMyTrip?</h3>
            <p>Established in 2000, MakeMyTrip has since positioned itself as one of <br />  the leading companies,<br />  providing great offers, competitive airfares, exclusive discounts, and a seamless online booking experience to many <br /> of its customers. The experience of booking your flight tickets, hotel <br /> stay, and holiday package through our desktop site or mobile app can be<br />  done with complete ease and no hassles at all. We also deliver amazing <br /> offers, such as Instant Discounts, Fare Calendar, MyRewardsProgram, <br /> MyWallet, and many more while updating them from time to time <br /> to better suit our customers’ evolving needs and demands.</p>
            
          </div>

          <div className={style_qna.right}>
            <h4>Q. How to find the cheapest hotel deals in any city?</h4>

            <p>
              A. MakeMyTrip, being the best hotel-booking site in the country,
              offers several discounts on budget <br /> hotels as well. If you
              are looking for the cheapest hotels with amazing deals on the app,
              you can tap on <br /> Sort & Filter option and drag down the Price
              option from Rs.0 to Rs.500 or from Rs.0 to Rs.1000. <br /> Choose
              from the various amenities you would need during your stay
              including access to Wi-Fi, <br />
              room service and in-house restaurants. The list will first show
              you the cheapest one on top. You can also <br /> sort by prices
              from Low to High, scroll down the list and find your preferred
              ones with great discounts.
            </p>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default Qna;
