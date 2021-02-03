var canvas = document.getElementById("code_rain")

const width = (canvas.width = window.screen.width);
const height = (canvas.height = window.screen.height);
const ctx = canvas.getContext("2d");

const p = Array(Math.floor(width / 10) + 1).fill(0);

const random = (items) => items[Math.floor(Math.random() * items.length)];

const hex = "ABCDEFGHIJKLMNOPQRSTUVWXYZ你好".split("");

setInterval(
    () => {
        ctx.fillStyle = "rgba(0,0,0,.05)";
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = "#0f0";
        p.map(
            (v, i) => {
                ctx.fillText(random(hex), i * 10, v);
                p[i] = v >= height || v > 50 + 10000 * Math.random() ? 0 : v + 10;
            }
        );
    },
    1000 / 30
);