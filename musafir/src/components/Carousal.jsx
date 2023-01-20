import React, { useContext, useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";
import "../CSS/Carousal.css";
import { slider0, slider1, slider2,slider3,slider4,slider5,slider6 } from "../CarouselData";
import { ListenerContext } from "../Contexts/ListenerProvider";

export const Carousal = () => {
  const [offers, setOffers] = useState(0);
  const { width } = useContext(ListenerContext);
  console.log(width);
  const properties = {
    duration: 20000,
    transitionDuration: 500,
    canSwipe: false,
    autoPlay: false,
    slidesToShow: width < 1024 ? 1 : 2,
    slidesToScroll: width < 1024 ? 1 : 2,
    prevArrow: (
      <div className="left-arrow">
        <NavigateBefore style={{ color: "#008cff", fontSize: 30 }} />
      </div>
    ),
    nextArrow: (
      <div className="right-arrow">
        <NavigateNext style={{ color: "#008cff", fontSize: 30 }} />
      </div>
    ),
  };

  return (
    <div className="homeContainer">
      <div className="sliderContainer">
        <div className="sliderTitle">
          <h2 className="Offers">Offers</h2>
          <div className="sliderLinks">
            <p
              className="indLinks"
              style={{ borderBottom: offers === 0 ? "3px solid #008cff" : "" }}
              onClick={() => setOffers(0)}
            >
              ALL OFFERS
            </p>
            <p
              className="indLinks"
              onClick={() => setOffers(1)}
              style={{ borderBottom: offers === 1 ? "3px solid #008cff" : "" }}
            >
              FLIGHTS
            </p>
            <p
              className="indLinks"
              onClick={() => setOffers(2)}
              style={{ borderBottom: offers === 2 ? "3px solid #008cff" : "" }}
            >
              HOTELS
            </p>
            <p
              className="indLinks"
              onClick={() => setOffers(3)}
              style={{ borderBottom: offers === 3 ? "3px solid #008cff" : "" }}
            >
              HOLIDAY
            </p>
            <p
              className="indLinks"
              onClick={() => setOffers(4)}
              style={{ borderBottom: offers === 4 ? "3px solid #008cff" : "" }}
            >
              TRAINS
            </p>
            <p
              className="indLinks"
              onClick={() => setOffers(5)}
              style={{ borderBottom: offers === 5 ? "3px solid #008cff" : "" }}
            >
              CABS
            </p>
            <p
              className="indLinks"
              onClick={() => setOffers(6)}
              style={{ borderBottom: offers === 6 ? "3px solid #008cff" : "" }}
            >
              OTHERS
            </p>
          </div>
        </div>
        {offers === 0 ? (
          <Slide {...properties}>
            {slider0.map((item) => {
              return (
                <div key={item.id}>
                  <div className="each-slide">
                    <div className="ind-slide">
                      <div className="imageSection">
                        <img src={item.first.thumbnail_image} alt="" />
                        <p>T&C's Apply</p>
                      </div>
                      <div className="contentSection">
                        <div>
                          <p className="offerCardTitle">{item.first.title}</p>
                          <p className="offerCardSubTitle">
                            {item.first.subTitle}
                          </p>
                          <div className="divider" />
                          <p className="offerCardOffers">{item.first.offer}</p>
                        </div>
                        <div className="knowMore">
                          <p>KNOW MORE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="each-slide">
                    <div className="ind-slide">
                      <div className="imageSection">
                        <img src={item.second.thumbnail_image} alt="" />
                        <p>T&C's Apply</p>
                      </div>
                      <div className="contentSection">
                        <div>
                          <p className="offerCardTitle">{item.second.title}</p>
                          <p className="offerCardSubTitle">
                            {item.second.subTitle}
                          </p>
                          <div className="divider" />
                          <p className="offerCardOffers">{item.second.offer}</p>
                        </div>
                        <div className="knowMore">
                          <p>KNOW MORE</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slide>
        ): offers === 1 ? (
            <Slide {...properties}>
              {slider1.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.first.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.first.title}</p>
                            <p className="offerCardSubTitle">
                              {item.first.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.first.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.second.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.second.title}</p>
                            <p className="offerCardSubTitle">
                              {item.second.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.second.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          ): offers === 2 ? (
            <Slide {...properties}>
              {slider2.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.first.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.first.title}</p>
                            <p className="offerCardSubTitle">
                              {item.first.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.first.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.second.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.second.title}</p>
                            <p className="offerCardSubTitle">
                              {item.second.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.second.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          ): offers === 3 ? (
            <Slide {...properties}>
              {slider3.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.first.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.first.title}</p>
                            <p className="offerCardSubTitle">
                              {item.first.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.first.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.second.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.second.title}</p>
                            <p className="offerCardSubTitle">
                              {item.second.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.second.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          ): offers === 4 ? (
            <Slide {...properties}>
              {slider4.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.first.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.first.title}</p>
                            <p className="offerCardSubTitle">
                              {item.first.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.first.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.second.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.second.title}</p>
                            <p className="offerCardSubTitle">
                              {item.second.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.second.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          ): offers === 5 ? (
            <Slide {...properties}>
              {slider5.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.first.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.first.title}</p>
                            <p className="offerCardSubTitle">
                              {item.first.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.first.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div className="ind-slide">
                        <div className="imageSection">
                          <img src={item.second.thumbnail_image} alt="" />
                          <p>T&C's Apply</p>
                        </div>
                        <div className="contentSection">
                          <div>
                            <p className="offerCardTitle">{item.second.title}</p>
                            <p className="offerCardSubTitle">
                              {item.second.subTitle}
                            </p>
                            <div className="divider" />
                            <p className="offerCardOffers">{item.second.offer}</p>
                          </div>
                          <div className="knowMore">
                            <p>KNOW MORE</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slide>
          ): (
            offers === 6 && (
              <Slide {...properties}>
                {slider6.map((item) => {
                  return (
                    <div key={item.id}>
                      <div className="each-slide">
                        <div className="ind-slide">
                          <div className="imageSection">
                            <img src={item.first.thumbnail_image} alt="" />
                            <p>T&C's Apply</p>
                          </div>
                          <div className="contentSection">
                            <div>
                              <p className="offerCardTitle">{item.first.title}</p>
                              <p className="offerCardSubTitle">
                                {item.first.subTitle}
                              </p>
                              <div className="divider" />
                              <p className="offerCardOffers">
                                {item.first.offer}
                              </p>
                            </div>
                            <div className="knowMore">
                              <p>KNOW MORE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="each-slide">
                        <div className="ind-slide">
                          <div className="imageSection">
                            <img src={item.second.thumbnail_image} alt="" />
                            <p>T&C's Apply</p>
                          </div>
                          <div className="contentSection">
                            <div>
                              <p className="offerCardTitle">
                                {item.second.title}
                              </p>
                              <p className="offerCardSubTitle">
                                {item.second.subTitle}
                              </p>
                              <div className="divider" />
                              <p className="offerCardOffers">
                                {item.second.offer}
                              </p>
                            </div>
                            <div className="knowMore">
                              <p>KNOW MORE</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slide>
            )
          )
        }
      </div>
    </div>
  );
};
