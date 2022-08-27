
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const uname = document.getElementById('uname')
const deadline = document.getElementById('deadline')
const team1 = document.getElementById('team1')
const team2 = document.getElementById('team2')
const team3 = document.getElementById('team3')
const team4 = document.getElementById('team4')
const team5 = document.getElementById('team5')
const team6 = document.getElementById('team6')
const team7 = document.getElementById('team7')
const team8 = document.getElementById('team8')
const gteam1 = document.getElementById('gteam1')
const gteam2 = document.getElementById('gteam2')
const gteam3 = document.getElementById('gteam3')
const gteam4 = document.getElementById('gteam4')
const downloadBtn = document.getElementById('download-btn')




const image = new Image()
image.src = 'blank.jpg'
image.onload = function () {
	drawImage();
}

function drawImage() {
	// ctx.clearRect(0, 0, canvas.width, canvas.height)
	// var ratio = image.naturalWidth / image.naturalHeight;
	// var width = canvas.width;
	// var height = width / ratio;

	ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	ctx.textAlign = 'center'
	ctx.font = '15px Mont'
	ctx.fillStyle = ' #656C73'
	ctx.fillText(uname.value, canvas.width/2, 120)
    ctx.textAlign = 'left'
	ctx.font = 'bold 18px Mont'
	ctx.fillStyle = ' #4285F4'
	ctx.fillText(deadline.value, 375, 245)
	ctx.textAlign = 'left'
	ctx.font = '17px Mont'
	ctx.fillStyle = ' #000'
	ctx.fillText(team1.value, 100, 340)
    ctx.fillText(team3.value, 100, 370)
    ctx.fillText(team5.value, 100, 400)
    ctx.fillText(team7.value, 100, 430)

    ctx.fillText(team2.value, 400, 340)
    ctx.fillText(team4.value, 400, 370)
    ctx.fillText(team6.value, 400, 400)
    ctx.fillText(team8.value, 400, 430)

    ctx.fillText(gteam1.value, 100, 540)
    ctx.fillText(gteam3.value, 100, 570)

    ctx.fillText(gteam2.value, 400, 540)
    ctx.fillText(gteam4.value, 400, 570)
   
}

uname.addEventListener('input', function () {
	drawImage()
})
deadline.addEventListener('change', function () {
	drawImage()
})

team1.addEventListener('input', function () {
	drawImage()
})

team2.addEventListener('input', function () {
	drawImage()
})
team3.addEventListener('input', function () {
	drawImage()
})

team4.addEventListener('input', function () {
	drawImage()
})

team5.addEventListener('input', function () {
	drawImage()
})

team6.addEventListener('input', function () {
	drawImage()
})

team7.addEventListener('input', function () {
	drawImage()
})

team8.addEventListener('input', function () {
	drawImage()
})

gteam1.addEventListener('input', function () {
	drawImage()
})
gteam2.addEventListener('input', function () {
	drawImage()
})
gteam3.addEventListener('input', function () {
	drawImage()
})

gteam4.addEventListener('input', function () {
	drawImage()
})



downloadBtn.addEventListener('click', function () {

	// const dataUrl = document.getElementById('canvas').toDataURL('image/jpeg', 1.0); 

	downloadBtn.href = canvas.toDataURL('image/jpg', 1.0)
	downloadBtn.download = 'GDSC-'+uname.value


	
})


