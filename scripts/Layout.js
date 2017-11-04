import React from "react";

import NavigationBar from "./Components/NavigationBar";

import CanvasManipulator from "./CanvasManipulator";

import { IMG, Pixel, SimpleParticle, color  } from "./C5IMG";

export default class Layout extends React.Component {

  constructor() {
    super();

    this.images = [];

    this.images.push(new IMG(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxcmvGfHia7-n40GuTmzZ_UG3dOlH8rdLvw_68Yh4rV4TvInmJ",
      window.innerWidth,
      window.innerHeight
    ),
    new IMG(
      "https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Speech-and-Debate.jpg?ssl=1",
      window.innerWidth,
      window.innerHeight)
    );

    this.imageIndex = 0;

    this.image = this.images[this.imageIndex];
    this.particles = [];

    for(var n = 0; n < 1200; n++) {
      this.particles.push(new SimpleParticle(2, window.innerWidth, window.innerHeight));
    }

    this.ParticleImageFunction = this.ParticleImageFunction.bind(this);
    this.CycleImages = this.CycleImages.bind(this);

  }

  componentDidMount() {
    let canvas = document.getElementsByClassName("background-canvas")[0];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.zIndex = "0";

    CanvasManipulator.use(canvas);


    this.image.wait(() => {
      CanvasManipulator.apply(this.ParticleImageFunction);
      this.CycleImages();
    });

  }

  ParticleImageFunction(c, ctx) {
    this.particles.map((particle) => {
      let { r, g, b, a } = this.image.get(particle.getFlatX(), particle.getFlatY(), window.innerWidth);
      particle.setColor(
        color(r, g, b, a)
      );
      particle.draw(ctx);
    });
  }

  CycleImages() {
    if(this.imageIndex > this.images.length - 1) {
      this.imageIndex = 0;
    }
    this.image = this.images[this.imageIndex];
    this.imageIndex++;
    setTimeout(this.CycleImages, 20000);
  }

  render() {
    return (
      <div className="container">
        <NavigationBar/>
        {this.props.children}
        <canvas className="background-canvas"></canvas>
      </div>
    );
  }
}
