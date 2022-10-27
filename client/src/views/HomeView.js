import React from "react";

function HomeView() {
  return (
    <div>
      <h1 className="text/centre">Welcome!</h1>
      <h2>Select What you want to practice</h2>

      <h2>Some Simple Cards</h2>
      <div className="row mb-4">
        {/* Put as many cards in a row as will fit */}
        <div className="col my-2">
          <div class="card">
            <img
              src="https://media.istockphoto.com/photos/roller-skates-and-girls-legs-on-pastel-pink-sports-equipment-and-picture-id1340692971?k=20&m=1340692971&s=612x612&w=0&h=J3PBeXwM_6zwQRcVh_SnefDU7Za-nt76pYx-SJMJSZY="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Stops</h5>
              <p class="card-text">
                Learn different ways to break depending on your level
              </p>
              <a href="#" class="btn btn-primary">
                Click here!
              </a>
            </div>
          </div>
        </div>

        <div className="col my-2">
          <div class="card">
            <img
              src="https://media.istockphoto.com/photos/crop-photo-of-legs-in-vintage-quad-roller-skates-shoes-isolated-on-picture-id1036883344?k=20&m=1036883344&s=612x612&w=0&h=83DvGG-hPQswknt3c9IVWO_rFP172cyL5Ww_iz59bSA="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Transitions</h5>
              <p class="card-text">
                Learn different ways to Transition or turn.
              </p>
              <a href="#" class="btn btn-primary">
                Click here!
              </a>
            </div>
          </div>
        </div>

        <div className="col my-2">
          <div class="card">
            <img
              src="https://media.istockphoto.com/photos/white-roller-skate-on-the-pink-and-orange-background-pop-art-poster-picture-id1364491414?k=20&m=1364491414&s=612x612&w=0&h=GDL5pP0puNyIwX8ZOSn_0_nmqQ8_jDvrOlCnsXO3z5A="
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Jumps</h5>
              <p class="card-text">
                Try out various jumps, from beginner to advanced!
              </p>
              <a href="#" class="btn btn-primary">
                Click
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeView;
