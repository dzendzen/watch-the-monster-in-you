import React from 'react';

class Background extends React.Component {
    // constructor() {
    //     super();
    // }

    componentDidMount() {
        let c = document.getElementById("canvas");
        let ctx = c.getContext("2d");
        let w = c.width = window.innerWidth;
        let h = c.height = window.innerHeight;
        let clearColor = 'rgba(0, 0, 0, .1)';
        let max = 30;
        let drops = [];

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }

        function resize() {
            w = c.width = window.innerWidth;
            h = c.height = window.innerHeight;
        }

        function setup() {
            for (let i = 0; i < max; i++) {
                (function (j) {
                    setTimeout(function () {
                        var o = new O();
                        o.init();
                        drops.push(o);
                    }, j * 200)
                }(i));
            }
        }

        function anim() {
            ctx.fillStyle = clearColor;
            ctx.fillRect(0, 0, w, h);
            for (var i in drops) {
                drops[i].draw();
            }
            requestAnimationFrame(anim);
        }

        class O {
            init() {
                this.x = random(0, w);
                this.y = 0;
                this.color = 'hsl(1, 100%, 50%)';
                this.w = 2;
                this.h = 1;
                this.vy = random(4, 5);
                this.vw = 3;
                this.vh = 1;
                this.size = 2;
                this.hit = random(h * .8, h * .9);
                this.a = 1;
                this.va = .96;
            }

            draw() {
                if (this.y > this.hit) {
                    ctx.beginPath();
                    ctx.moveTo(this.x, this.y - this.h / 2);

                    ctx.bezierCurveTo(
                        this.x + this.w / 2, this.y - this.h / 2,
                        this.x + this.w / 2, this.y + this.h / 2,
                        this.x, this.y + this.h / 2);

                    ctx.bezierCurveTo(
                        this.x - this.w / 2, this.y + this.h / 2,
                        this.x - this.w / 2, this.y - this.h / 2,
                        this.x, this.y - this.h / 2);

                    ctx.strokeStyle = 'hsla(1, 100%, 50%, ' + this.a + ')';
                    ctx.stroke();
                    ctx.closePath();

                } else {
                    ctx.fillStyle = this.color;
                    ctx.fillRect(this.x, this.y, this.size, this.size * 5);
                }
                this.update();
            }

            update() {
                if (this.y < this.hit) {
                    this.y += this.vy;
                } else {
                    if (this.a > .03) {
                        this.w += this.vw;
                        this.h += this.vh;
                        if (this.w > 100) {
                            this.a *= this.va;
                            this.vw *= .98;
                            this.vh *= .98;
                        }
                    } else {
                        this.init();
                    }
                }
            }
        }

        window.addEventListener("resize", resize);

        setup();
        anim();

    }

    render() {

        return (
            <canvas id="canvas"></canvas>
        )
    }
}

export default Background;