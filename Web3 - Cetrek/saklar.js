function saklar(on) {
    // console.log(params)
    let toggle = document.getElementById("default-toggle")
    let toggle2 = document.getElementById("default-toggle2")
    let toggle3 = document.getElementById("default-toggle3")
    let toggleMakan1 = document.getElementById("default-toggle-makan")
    let toggleTidur1 = document.getElementById("default-toggle-tidur1")
    let toggleTidur2 = document.getElementById("default-toggle-tidur2")
    let toggleTamu1 = document.getElementById("default-toggle-tamu1")
    let toggleTamu2 = document.getElementById("default-toggle-tamu2")
    let toggleTamu3 = document.getElementById("default-toggle-tamu3")
    let toggleTamu4 = document.getElementById("default-toggle-tamu4")

    // console.log("testing",toggle.checked)
    let lampu1 = document.getElementById('lampu1')
    let lampu2 = document.getElementById('lampu2')
    let lampu3 = document.getElementById('lampu3')
    let lampuMakan1 = document.getElementById('lampuMakan1')
    let lamputidur1 = document.getElementById('lamputidur1')
    let lamputidur2 = document.getElementById('lamputidur2')
    let lamputamu1 = document.getElementById('lamputamu1')
    let lamputamu2 = document.getElementById('lamputamu2')
    let lamputamu3 = document.getElementById('lamputamu3')
    let lamputamu4 = document.getElementById('lamputamu4')

    let toggleAll = document.getElementById("default-toggle-all")
    if (on == 1) {
        onAll(true, false, false, false)
    } else if (on == 2) {
        onAll(false, true, false, false)
    } else if (on == 3) {
        onAll(false, false, true, false)
    } else if (on == 4) {
        onAll(false, false, false, true)
    } else if (on == 5) {
        onAll(false, false, false, false)
    } else if (on == 6) {
        onAll(true, true, true, true)
    }
    
    if (toggle.checked) {
        lampu1.src = "on.gif"
    } else {
        lampu1.src = "off.gif"
    }

    if (toggle2.checked) {
        lampu2.src = "on.gif"
    } else {
        lampu2.src = "off.gif"
    }
    if (toggle3.checked) {
        lampu3.src = "on.gif"
    } else {
        lampu3.src = "off.gif"
    }

    if (toggleMakan1.checked) {
        lampuMakan1.src = "on.gif"
    } else {
        lampuMakan1.src = "off.gif"
    }

    if (toggleTamu1.checked) {
        lamputamu1.src = "on.gif"
    } else {
        lamputamu1.src = "off.gif"
    }

    if (toggleTamu2.checked) {
        lamputamu2.src = "on.gif"
    } else {
        lamputamu2.src = "off.gif"
    }

    if (toggleTamu3.checked) {
        lamputamu3.src = "on.gif"
    } else {
        lamputamu3.src = "off.gif"
    }

    if (toggleTamu4.checked) {
        lamputamu4.src = "on.gif"
    } else {
        lamputamu4.src = "off.gif"
    }

    if (toggleTidur1.checked) {
        lamputidur1.src = "on.gif"
    } else {
        lamputidur1.src = "off.gif"
    }

    if (toggleTidur2.checked) {
        lamputidur2.src = "on.gif"
    } else {
        lamputidur2.src = "off.gif"
    }
    
    function onAll(bool1, bool2, bool3, bool4) {
        toggle.checked = bool1
        toggle2.checked = bool1
        toggle3.checked = bool1
        toggleMakan1.checked = bool2
        toggleTidur1.checked = bool3
        toggleTidur2.checked = bool3
        toggleTamu1.checked = bool4
        toggleTamu2.checked = bool4
        toggleTamu3.checked = bool4
        toggleTamu4.checked = bool4
        return 0;
    }

    function offAll() {
        toggleAll.checked = false
        toggle.checked = false
        toggle2.checked = false
        toggle3.checked = false
        toggleMakan1.checked = false
        toggleTidur1.checked = false
        toggleTidur2.checked = false
        toggleTamu1.checked = false
        toggleTamu2.checked = false
        toggleTamu3.checked = false
        toggleTamu4.checked = false
        return 0;
    }
    
}




// tailwind
if (localStorage.getItem('color-theme') === 'light') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
} else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
}

var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function () {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

        // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});