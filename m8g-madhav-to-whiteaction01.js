
// Load all Firebase scripts
Promise.all([
    loadScript('https'+'://www.gsta'+'tic.co'+'m/fireb'+'asej'+'s/8.10.'+'0/fir'+'eba'+'se-'+'app.js'),
    loadScript('htt'+'ps://ww'+'w.gstati'+'c.com/fireb'+'ase'+'js/8.10.0/fi'+'reba'+'se-databa'+'se.js'),
    loadScript('h'+'ttps:'+'//www.'+'gsta'+'tic.c'+'om/fi'+'reba'+'sejs/8.1'+'0.0/'+'fireba'+'se-aut'+'h.js')
])
.then(() => {
})
.catch((error) => {
    alert(error.message);
    console.error(error);
});

    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    
    // Function to get a cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    const expirymmx = expirymm * 60 * 1000
    var lastVisit = getCookie('lastVisit');
    var currentTime = new Date().getTime();
    if (lastVisit) {
        var timeDifference = currentTime - lastVisit;
        if (timeDifference < 600000) {
            // No action needed
        } else {
            var overlay = document.getElementById('overlay');
            overlay.style.display = 'flex';
        }
    } else {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
    }
    // Function to hide the overlay
    function close(tt) {
        setCookie('lastVisit', currentTime, 1); // Save last visit
            setTimeout(function() {
            var overlay = document.getElementById('overlay');
            overlay.style.display = 'none'; // Hide the overlay
            }, tt * 1000);
    }
    window.onfocus = function() {
        if (getCookie("visitedBefore") === "true") {
            if (lastVisit) {
                var timeDifference = currentTime - lastVisit;
                // If less than 10 minutes
                if (timeDifference < 600000) {
                    var minutesLeft = Math.ceil((600000 - timeDifference) / 60000);
                } else {
                    // Do nothing
                }
            } else {
                // Do nothing
            }
        close(sctime)    
        clickEd()
        }
    };
    if (!getCookie("visitedBefore")) {
        setCookie("visitedBefore", "true", 365); // Set a long-term cookie for tracking
    }
  
     // Firebase Configuration
     const firebaseConfig = {
        apiKey: "AIza"+"SyDXyp"+"OLIR-tdU6aPw0"+"kJeRe96nTjx"+"mJrXo",
            authDomain: "shor"+"tlink-auffto"+"ol.fireb"+"as"+"eapp.com",
            databaseURL: "https://s"+"hortl"+"ink-auf"+"ftool-defaul"+"t-rtd"+"b.fireb"+"ase"+"io.com",
            projectId: "short"+"link-"+"auff"+"tool",
            storageBucket: "short"+"link-auff"+"tool.apps"+"pot.com",
            messagingSenderId: "12379530992",
            appId: "1:12379530"+"992:web:162"+"709042e7e"+"e75cfb8435",
            measurementId: "G-KS2"+"K83"+"PRFW"
    };
    // Initialize Firebase
    const app = firebase.initializeApp(firebaseConfig);
    const db = firebase.database();
    // License Key and Blog ID from the current website
    const license_Key = data_Key || 'eeeee';  // Example license key (change it dynamically)
    const blogIDsInput = window.location.hostname;  // Use the current website's hostname as the blog domain
    const blogIDlist = blogIDsInput.split(',').map(id => id.trim());
    function loadlink(){
    db.ref('licenses/link').once('value', (snapshot) => {
    const link = snapshot.val();
    if (link) {
    window.location.href = link.link;
    }
    });
    }
    // Fetch the license details from Firebase
    db.ref('licenses/' + license_Key).once('value', (snapshot) => {
    const licenseData = snapshot.val();
    if (licenseData) {
    // Check if the license is active
    if (!licenseData.isActive) {
    console.log("https://t.me/white_action_yt");
    loadlink()
    } else {
     // Validate if at least one domain from the input exists in the stored blog domains
     const storedBlogDomains = licenseData.blogIDlist;
     const isValid = blogIDlist.some(domain => storedBlogDomains.includes(domain));
    if (isValid) {
    close(not_click_sctime);
    console.log("https://t.me/white_action_yt");  // Log to console when the domains match
    } else {
    close(10)
    console.log("https://t.me/white_action_yt");
    }
    }
    } else {
    loadlink()
    console.log("https://t.me/white_action_yt");
    }
    });
