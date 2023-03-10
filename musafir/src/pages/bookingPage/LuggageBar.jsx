import { CancelDetailsCSS } from "./CancelDetails";

const LuggageBar = () => {
  return (
    <CancelDetailsCSS>
      <div className="luggagebar">
        <div className="cancel_footer">
          <div className="cancel_footer_left">
            <img
              alt=""
              className="rs_icon"
              src="https://imgak.mmtcdn.com/flights/assets/media/dt/rta_assets/extra-bag.png"
            />
            <p>
              Got excess luggage? Don't stress, buy extra check-in baggage
              allowance at fab rates!
            </p>
          </div>
          <p className="upgrade">+ ADD</p>
        </div>
      </div>
    </CancelDetailsCSS>
  );
};

export default LuggageBar;
