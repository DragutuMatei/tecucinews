import React from "react";

function About() {
  return (
    <main className="page">
      <section className="clean-block about-us">
        <div className="container">
          <div className="block-heading">
            <h2 className="text-info">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam
              urna, dignissim nec auctor in, mattis vitae leo.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img
                  className="card-img-top w-100 d-block"
                  src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/87099114_2461872530734670_4855386551611293696_n.jpg?_nc_cat=101&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeGbn9D4PVCZa-JoIuKJ0iqZzku3L-uTrpTOS7cv65OulLafr7RUNprDymV0T9x14jqpgTS6DXg35SxlwZFreVfo&amp;_nc_ohc=Pv4iXKcfzZ4AX8WZzA6&amp;_nc_ht=scontent-otp1-1.xx&amp;oh=00_AT9IB7IqnnlwBTwvmMzJLe3m78y83XwA3qWhsYr4I2VPMQ&amp;oe=624B5CA6"
                />
                <div className="card-body info">
                  <h4 className="card-title">Dragutu Matei</h4>
                  <p className="card-text">FUGA DUPA EI</p>
                  <div className="icons">
                    <a href="https://www.facebook.com/dragutu.matei">
                      <i className="icon-social-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/dragutumatei/">
                      <i className="icon-social-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card text-center clean-card">
                <img
                  className="card-img-top w-100 d-block"
                  src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.6435-9/86695369_2663907933657090_2295697635035578368_n.jpg?_nc_cat=105&amp;ccb=1-5&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeFoBQlR7xQ29Gh8dhY_xJHSxZFpGbXA2ZPFkWkZtcDZk4kKZ_gzTK28W9dVrFbj4gA1ai7mQCrcbK3NZ5j1whxR&amp;_nc_ohc=4vIzpYzVVIQAX8bluM8&amp;_nc_ht=scontent-otp1-1.xx&amp;oh=00_AT-XlrOhVnxFt6Ku5uD-WqWcFtcKStLZiftOLcndPX65yQ&amp;oe=624BC4F3"
                />
                <div className="card-body info">
                  <h4 className="card-title">Hanga Mihail</h4>
                  <p className="card-text">ceva text</p>
                  <div className="icons">
                    <a href="https://www.facebook.com/hanga.mihail">
                      <i className="icon-social-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/mihail.zuzu/">
                      <i className="icon-social-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
