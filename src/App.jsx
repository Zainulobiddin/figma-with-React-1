import "./App.css";
import "./media.css";
import React from "react";
import Cootels from "./assets/Cootels.svg";
import Cootels1 from "./assets/Cootels_white.svg";
import img_home1 from "./assets/img_home1.svg";
import img_home2 from "./assets/img_home2.svg";
import img_home3 from "./assets/img_home3.svg";
import img_Earth_Cootage from "./assets/img_Earth_Cootage.svg";
import Nushoki from "./assets/Nushoki.svg";
import food_img from "./assets/food_img.svg";
import arrow_right from "./assets/arrow_right.svg";
import room1 from "./assets/room1.svg";
import room2 from "./assets/room2.svg";
import room3 from "./assets/room3.svg";
import Arrow_bottom from "./assets/Arrow_bottom.svg";
import Arrow_top from "./assets/Arrow_top.svg";
import nuqtaho from "./assets/nuqtaho.svg";
import woman from "./assets/woman.svg";
import twitter2 from "./assets/twitter2.svg";
import instagram from "./assets/instagram.svg";
import facebook from "./assets/facebook.svg";

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <img className="Cootels" src={Cootels} alt="" />
          <ul>
            <li>Rooms</li>
            <li>Reservation</li>
            <li>Contacs</li>
          </ul>
          <button className="btn_GetStarted">Get Started</button>
        </nav>

        <section className="Home">
          <div className="TextsInformation">
            <h1>Nature, Warmth, and Beauty in One Space</h1>
            <p className="lorem">
              One place to release all the stress, bring back happines, and get
              back to nature. We provide the best room and nature for you. Come
              visit us anytime you want.
            </p>
            <button className="bnt_Reservation btn_GetStarted">
              Reservation
            </button>
          </div>

          <div className="imgOfHome ">
            <img className="img_home1" src={img_home1} alt="" />
            <img className="img_home2" src={img_home2} alt="" />
            <img className="img_home3" src={img_home3} alt="" />
          </div>
        </section>
      </header>

      <main>
        <section className="Hotel">
          <img className="img_Earth_Cootage" src={img_Earth_Cootage} alt="" />
          <div className="TextsInformation">
            <h2 className="h2_paragraph">
              Cozy and Down to Earth Cootage Hotel in Norway.
            </h2>
            <p className="lorem">
              Our Cootage Hotel is an intimate hideway concieved for dicerning
              travelers. It faces directly the unique and spectacular panorama
              of the Hallerbos Jungle.
            </p>
            <p className="lorem">
              Cootels extends along a private, quiet, and beautiful nature. Stay
              away from crowd and enjoy the cozy and beauty with us.
            </p>
            <button className="bnt_Reservation">Learn More</button>
          </div>
        </section>

        <section className="Hotel Cabin">
          <div className="TextsInformation">
            <h2 className="h2_paragraph">Cabin Activities</h2>
            <p className="lorem">
              Don’t worry to get bored easily in our cabin. We have so many
              cabin activities for you to do it alone or with group. Maybe this
              is the best chance for you to make new friends or even a lover.
            </p>
          </div>
          <img className="Nushoki" src={Nushoki} alt="" />
        </section>

        <section className="Hotel">
          <img className="food_img" src={food_img} alt="" />
          <div className="TextsInformation">
            <h2 className="h2_paragraph">100% Organic Food</h2>
            <p className="lorem">
              We served 100% organic, low process and delicious food. We allow
              our guest to have breakfast or dinner request.What ever made your
              taste buds happy.
            </p>
          </div>
        </section>

        <section className="manyRooms">
          <h2 className="h2_paragraph">Many Rooms to Choose</h2>
          <p className="lorem">
            There is a room for every needs. We have room for individuals until
            family size, we also have a cabin for more private experience
          </p>
          <button className="Button">Explore more</button>
        </section>

        <section className="boxRooms">
          <div className="room">
            <img className="room1" src={room1} alt="" />
            <h4 className="nameRoom">Single Room</h4>
            <p className="lorem">
              Best for a brave lone wolf who need comfort and quiet quality
              time, but you still have a chance to meet others.
            </p>
            <div className="btn">
              <button className="lorem">Learn more </button>
              <img src={arrow_right} alt="" />
            </div>
          </div>

          <div className="room">
            <img className="room2" src={room2} alt="" />
            <h4 className="nameRoom">Double Room</h4>
            <p className="lorem">
              Best for couple, seek happiness in intimacy without worry of being
              disturbed. Feel the whole world just for you two
            </p>
            <div className="btn">
              <button className="lorem">Learn more </button>
              <img src={arrow_right} alt="" />
            </div>
          </div>

          <div className="room">
            <img className="room3" src={room3} alt="" />
            <h4 className="nameRoom">Cootage</h4>
            <p className="lorem">
              Best for family or group. One cootage can fit up to 5 people. Made
              stronger bond with your family or friends
            </p>
            <div className="btn">
              <button className="lorem">Learn more </button>
              <img src={arrow_right} alt="" />
            </div>
          </div>
        </section>

        <section className="chooseRoom">
          <div className="getRoom">
            <p style={{ color: "#424F7B" }}>Start your journey!</p>
            <h2 className="h2_paragraph">How to Get My Room?</h2>
            <p className="lorem">
              You can contact us by phone or email us. Easily tap the contact
              button below and it will take you to our contact point
            </p>
            <div className="buttons">
              <button className="Button">Contact us</button>
              <button style={{ color: "#0E1734" }}>Explore more room</button>
            </div>
          </div>

          <div className="choose">
            <div className="first">
              <h3>1. Choose a room and date</h3>
              <img className="Arrow_bottom" src={Arrow_bottom} alt="" />
            </div>

            <div className="second">
              <div>
                <h3>2. Check for room availability</h3>
                <p className="lorem">
                  Contact us via phone or email, ask for availability of you
                  choice of room. We might offer you something exciting.
                </p>
              </div>
              <img className="Arrow_top" src={Arrow_top} alt="" />
            </div>
            <div className="first">
              <h3>3. Enjoy your room</h3>
              <img className="Arrow_bottom" src={Arrow_bottom} alt="" />
            </div>
          </div>
        </section>

        <section className="happy">
          <h2 className="h2_paragraph">Hear From Our Happy Customers</h2>
          <img src={woman} alt="" />
          <p className="lorem">
            “Great service, great food, great people. The scenery is also
            beautiful, you can do so much activity even with your famility.
            Worth every penny! you should come and see for your self. 5 out of
            5! the waffle is great!”
          </p>

          <div className="name">
            <h5>Kirana Dunham</h5>
            <img src={nuqtaho} alt="" />
          </div>
        </section>
      </main>


      <footer>
        <div className="footer">
          <div className="footer_left">
            <img src={Cootels1} alt="" />
            <p>Your Best Private Hideway From Crowd. Back to Nature.</p>
            <div className="logo_Company">
              <img src={twitter2} alt="" />
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </div>
          </div>

          <div className="footer_right">
            <div className="category">
              <p className="white">Rooms</p>
              <p>Single Room</p>
              <p>Double Room</p>
              <p>Cabin</p>
              <p>Custom Room</p>
            </div>

            <div className="category">
              <p className="white">Reservation</p>
              <p>See the Steps</p>
              <p>Best Time</p>
            </div>

            <div className="category">
              <p className="white">Contact</p>
              <p>Our Number</p>
              <p>Our Email</p>
              <p>Our Location</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
