const text = "Hi, I'm Roland 👋";
    let i = 0;
    function typeEffect() {
      if (i < text.length) {
        document.querySelector(".typing").textContent += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
      }
    }
    window.onload = typeEffect;

    // Scroll reveal
    const sections = document.querySelectorAll("section");
    const reveal = () => {
      const triggerBottom = window.innerHeight * 0.8;
      sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if (top < triggerBottom) sec.classList.add("show");
      });
    };
    window.addEventListener("scroll", reveal);
    reveal();

    document.getElementById("hamburger").addEventListener("click", function(){
          var navLinks = document.querySelector(".nav-links");
          navLinks.classList.toggle("active");
          
          var bar1 = document.querySelector(".bar-1");
          var bar2 = document.querySelector(".bar-2");
          var bar3 = document.querySelector(".bar-3");
          if (bar2.style.display === "none") {
            bar2.style.display = "block";
          } else {
            bar2.style.display = "none";
          }
          if (bar1.style.transform === "rotate(45deg)") {
            bar1.style.transform = "rotate(0deg)";
          } else {
            bar1.style.transform = "rotate(45deg)";
          }
          if (bar3.style.transform === "rotate(-45deg)") {
            bar3.style.transform = "rotate(0deg)";
            bar3.style.top = "0px";
          } else {
            bar3.style.transform = "rotate(-45deg)";
            bar3.style.position = "relative";
            bar3.style.top = "-14px";
          }
        });

    // Dark mode default
    const toggleBtn = document.getElementById("themeToggle");
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️ Light";
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️ Light";
      } else {
        toggleBtn.textContent = "🌙 Dark";
      }
    });
