
	 let myInterval
	window.onload = ()　=> {
		myInterval = window.setInterval(() => setTime('17', '00'), 1000)

		const timeController = document.getElementsByName('offWorkButton')[0]
		timeController.addEventListener('click', () => {
      window.clearInterval(myInterval)
      showme()
		})
	}

	const showme = () => {
		const reg = /^([0-1]{0,1}[0-9]{1}|[2]{1}[0-3]{1})([\:]{1}[0-5]{1}[0-9]{1})$/g
		const show = document.getElementsByName('offWorkInput')[0].value
		const time = show.match(reg)+""

		const array = time.split(":")

		let hour = array[0]
    let minutes = array[1]

		const offWorkTextDom = document.getElementsByClassName('off-work-error-text')[0]

		if(hour && minutes){
			if(hour.length == 1){
				hour = "0" + hour
			}
			if(minutes.length == 1){
				minutes = "0" + minutes
			}

      offWorkTextDom.style.cssText = 'display: none;'

			if(hour && minutes){
        setTime(hour, minutes)
        window.clearInterval(myInterval)
        myInterval = window.setInterval(() => setTime(hour, minutes), 1000)
			}
		}else{
      offWorkTextDom.style.cssText = 'display: inline-block;'
		}
	}

	const setTime = (off_h, off_m) => {
    const onoTextDom = document.getElementsByClassName('ono')[0]
    const yesTextDom = document.getElementsByClassName('yes')[0]
    const oyeahTextDom = document.getElementsByClassName('oyeah')[0]
    const fuckTextDom = document.getElementsByClassName('fuck')[0]

		const time = new Date()

		let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    const oyeah = (off_h - hours) * 60 * 60 + (off_m - minutes) * 60 - seconds

    let fuck
	 	if(hours >= off_h && minutes >= off_m){
			fuck = (hours - off_h) * 60 * 60 + (minutes - off_m) * 60 + seconds

			oyeahTextDom.style.cssText = 'display : none'
			fuckTextDom.style.cssText = ''
	 	}else{
      oyeahTextDom.style.cssText = ''
      fuckTextDom.style.cssText = 'display : none'
		}

    if(hours<10)hours = "0" + hours
    if(minutes<10)minutes = "0" + minutes
    if(seconds<10)seconds = "0" + seconds

    const ono = hours+":"+minutes+":"+seconds
    const yes = off_h + ":" + off_m + ":" + "00"

    onoTextDom.innerHTML = "现在的时间：" + ono
		yesTextDom.innerHTML = "下班的时间：" + yes
		oyeahTextDom.innerHTML = "下班倒计时：" + oyeah +"秒"
		fuckTextDom.innerHTML =  "已加班时间：" + fuck + "秒"
	}
 