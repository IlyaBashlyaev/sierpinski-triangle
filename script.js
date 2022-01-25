const canv = document.querySelector('canvas'),
      ctx = canv.getContext('2d')
var attempts = 0

canv.width = 1038
canv.height = 899

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function drawTriangle(a, b, c, step) {
    if (attempts <= 366)
        attempts++

    if (attempts < 366) {
        await sleep(100)
        if (step == 1)
            ctx.fillStyle = '#fff'
        ctx.beginPath()

        ctx.moveTo(a[0], a[1])
        ctx.lineTo(b[0], b[1])
        ctx.lineTo(c[0], c[1])

        ctx.closePath()
        ctx.fill()

        if (step == 0) {
            drawTriangle(
                [Math.round(c[0] / 4), Math.round(a[1] / 2)],
                [Math.round(c[0] * 0.75), Math.round(a[1] / 2)],
                [Math.round(c[0] / 2), a[1]], 1
            )
        }

        else if (step == 1) {
            var width = b[0] - a[0],
                height = c[1] - a[1]

            drawTriangle(
                [Math.round(a[0] + width / 4), Math.round(a[1] - height / 2)],
                [Math.round(a[0] + width * 0.75), Math.round(a[1] - height / 2)],
                [Math.round(a[0] + width / 2), a[1]], 1
            )

            drawTriangle(
                [Math.round(a[0] - width / 4), Math.round(a[1] + height / 2)],
                [Math.round(a[0] + width / 4), Math.round(a[1] + height / 2)],
                [Math.round(a[0]), c[1]], 1
            )

            drawTriangle(
                [Math.round(a[0] + width * 0.75), Math.round(a[1] + height / 2)],
                [Math.round(b[0] + width / 4), Math.round(a[1] + height / 2)],
                [Math.round(b[0]), c[1]], 1
            )
        }
    }
}

drawTriangle(
    [0, 899], [519, 0], [1038, 899], 0
)