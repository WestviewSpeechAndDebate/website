export class IMG {
    constructor(src, iW, iH, cpy) {
        
        this.source = src;
      
        this.image = new Image();
      
        this.loaded = false;
      
        this.image.setAttribute('crossOrigin', 'anonymous');
        this.image.setAttribute("style", "display:none");
      
        this.imageData;
      
        this.width;
        this.height;
      
        this.canvas;
      
        if(cpy == null || !cpy) {
          this.image.onload = () => {
            this.canvas = document.createElement("canvas");
            var c = this.canvas.getContext("2d"),
                w = this.canvas.width = iW ? iW : this.image.naturalWidth,
                h = this.canvas.height = iH ? iH : this.image.naturalHeight;
                this.width = w;
                this.height = w;
                this.canvas.setAttribute("style", "display:none");
      
                document.body.appendChild(this.canvas);
      
                c.drawImage(this.image, 0, 0, w, h);
      
                this.imageData = c.getImageData(0, 0, w, h);
      
                this.loaded = true;
          };
        } else {
          this.imageData = src.imageData;
          this.source = src.source;
          this.image = src.image;
          this.loaded = src.loaded;
          this.canvas = src.canvas;
        }
      
        this.image.src = this.source;
    }

    getWidth() {
        if(this.loaded) {
            return this.width;
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }

    getHeight() {
        if(this.loaded) {
            return this.height;
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }

    copy() {
        if(this.loaded) {
            var blank = new IMG(this, true);
            return blank;
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }

    getData() {
        if(this.loaded) {
            return this.imageData.data;
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }

    wait(fn) {
        let runner = setInterval(() => {
            if(this.loaded) {
              fn();
              clearInterval(runner);
            }
        }, 1);
    }

    filter(fn) {
        if(this.loaded) {
            for(var k = 0; k < this.imageData.data.length; k+=4) {
        
              var px = new Pixel(
                this.imageData.data[k],
                this.imageData.data[k+1],
                this.imageData.data[k+2],
                this.imageData.data[k+3],
                k,
                this.image.naturalWidth
              );
        
              var result = fn(px);
        
              this.imageData.data[k] = result.r;
              this.imageData.data[k+1] = result.g;
              this.imageData.data[k+2] = result.b;
              this.imageData.data[k+3] = result.a;
        
            }
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }

    getImage() {
        if(this.loaded) {
            return this.image;
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }

    getImageData() {
        if(this.loaded) {
            return this.imageData;
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }

    get(x, y, w) {
        if(this.loaded) {
            let index = (y * w + x) * 4;
            return new Pixel(this.imageData.data[index],
                            this.imageData.data[index+1],
                            this.imageData.data[index+2],
                            100
                            );
        } else {
            throw new Error("IMG Object must load before calling methods.");
        }
    }
}


export class Pixel {
    constructor(r, g, b, a, i, w) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.x = i / 4 % w;
        this.y = i / 4 / w;
    }
}
  
export class SimpleParticle {
    constructor(size, b1, b2) {
        this.x = randomRange(0, b1);
        this.y = randomRange(0, b2);
        this.vx = randomRange(1, 4);
        this.vy = randomRange(1, 4);

        this.vx *= (Math.random() < 0.5) ? -1 : 1;
        this.vy *= (Math.random() < 0.5) ? -1 : 1;

        this.size = size;
        this.color = "black";
        this.xBound = b1;
        this.yBound = b2;
    }

    setColor(clr) {
        this.color = clr;
    }

    getX() {
        return this.x;
    }

    getFlatX() {
        return Math.floor(this.x);
    }

    getY() {
        return this.y;
    }

    getFlatY() {
        return Math.floor(this.y);
    }

    checkBounds() {
        if(this.x - this.size / 2 <= 0 ||
           this.x + this.size / 2 >= this.xBound) {
            this.vx *= -1;
        }
        if(this.y - this.size / 2 <= 0 ||
           this.y + this.size / 2 >= this.yBound) {
            this.vy *= -1;
        }
    }

    draw(c) {
        this.checkBounds();
        this.x += this.vx;
        this.y += this.vy;
        circle(c, this.x, this.y, this.size, this.color);
    }
}

    
// library functions

export function averagePixels(pixels) {
    let avgR = 0;
    let avgG = 0;
    let avgB = 0;
    let avgA = 0;
  
    pixels.map((pixel) => {
      avgR += pixel.r;
      avgG += pixel.g;
      avgB += pixel.b;
      avgA += pixel.a;
    });
  
    return {
      r: avgR / pixels.length,
      g: avgG / pixels.length,
      b: avgB / pixels.length,
      a: avgA / pixels.length,
    };
}
    
export function ImagifyVideo(video) {
    let fake = document.createElement("canvas");
    fake.width = window.innerWidth;
    fake.height = window.innerHeight;
    fake.setAttribute("style", "display: none");
    document.body.appendChild(fake);

    fake.getContext("2d").drawImage(video, 0, 0, fake.width, fake.height);

    let data = fake.toDataURL();
    return data;
}
    
export function color(r, g, b, a) {
    if(g == null) {
        return "rgba(" + r + ", " + r + ", " + r + ", 1)";
    }
    
      if(a == null) {
        return "rgba(" + r + ", " + g + ", " + b + ", 1)";
    }
    
    a /= 255;
    
    return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
}
    
export function circle(c, x, y, r, clr) {
    c.strokeStyle = clr;
    c.fillStyle = clr;
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI * 2);
    c.fill();
    c.closePath();
}
    
export function distance(p1, p2) {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
}
    
export function randomRange(b1, b2) {
    return Math.random() * (b2 - b1) + b1;
}
    
export function weigh(val, args) {
    let total = val;
    args.map((arg) => {
      total += arg;
    });
  
    return val / total; 
}

export function softPlus(x) {
    return  1 / (1 + Math.pow(Math.E, -x));
}
