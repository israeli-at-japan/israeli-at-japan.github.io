document.addEventListener("DOMContentLoaded", function() {
    // 1. קוד ה-HTML של התפריט (העתקנו אותו לפה)
    const menuHTML = `
        <header>
            <div class="logo">ישראלי ביפן</div>
            <nav class="desktop-nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="forum">Forum</a></li>
                    <li><a href="ai-agent">סוכן AI ✨</a></li>
                    <li><a href="general-info">תכנון מסלול ומידע כללי</a></li>
                    <li><a href="tokyo-fuji">טוקיו פוג'י והסביבה</a></li>
                    <li><a href="alps">האלפים היפניים</a></li>
                    <li><a href="kyoto-osaka">קיוטו אוסקה ומה שביניהן</a></li>
                    <li><a href="island-hopping">איילנד הופינג ביפן</a></li>
                </ul>
            </nav>
        </header>

        <div id="floatingBtn" class="floating-menu-btn">☰</div>

        <div id="sideMenu" class="side-menu">
            <div id="closeBtn" class="side-menu-close">&times;</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="forum">Forum</a></li>
                <li><a href="ai-agent">סוכן AI ✨</a></li>
                <li><a href="general-info">תכנון מסלול ומידע כללי</a></li>
                <li><a href="tokyo-fuji">טוקיו פוג'י והסביבה</a></li>
                <li><a href="alps">האלפים היפניים</a></li>
                <li><a href="kyoto-osaka">קיוטו ואוסקה</a></li>
                <li><a href="island-hopping">איילנד הופינג ביפן</a></li>
            </ul>
        </div>
    `;

    // 2. הזרקת ה-HTML לתוך העמוד
    const placeholder = document.getElementById("menu-placeholder");
    if (placeholder) {
        placeholder.innerHTML = menuHTML;
    }

    // 3. הפעלת האנימציות והלחיצות
    const floatingBtn = document.getElementById("floatingBtn");
    const sideMenu = document.getElementById("sideMenu");
    const closeBtn = document.getElementById("closeBtn");

    // הצגת כפתור ההמבורגר מיד במסכים קטנים (והסתרתו במחשב)
    function checkScreenSize() {
        if (window.innerWidth <= 768) {
            floatingBtn.style.display = "flex";
        } else {
            floatingBtn.style.display = "none";
            sideMenu.classList.remove("open"); // סגירת התפריט אם מגדילים מסך
            document.body.classList.remove("no-scroll");
        }
    }
    
    window.addEventListener("resize", checkScreenSize);
    checkScreenSize(); // הרצה ראשונית מיד כשהאתר נטען

    // פתיחת התפריט
    floatingBtn.addEventListener("click", function() {
        sideMenu.classList.add("open");
        document.body.classList.add("no-scroll"); 
    });

    // סגירת התפריט בלחיצה על האיקס
    closeBtn.addEventListener("click", function() {
        sideMenu.classList.remove("open");
        document.body.classList.remove("no-scroll"); 
    });

    // סגירת התפריט בלחיצה על קישור (כדי שהדף לא ייתקע)
    const menuLinks = sideMenu.querySelectorAll("a");
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            sideMenu.classList.remove("open");
            document.body.classList.remove("no-scroll"); 
        });
    });

    // סגירה בלחיצה בכל מקום מחוץ לתפריט
    document.addEventListener("click", function(event) {
        if (sideMenu.classList.contains("open")) {
            if (!sideMenu.contains(event.target) && !floatingBtn.contains(event.target)) {
                sideMenu.classList.remove("open");
                document.body.classList.remove("no-scroll"); 
            }
        }
    });
});
