document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: "smooth"
                });
            }
        });
    });

    // Join button animation
    const joinBtn = document.querySelector(".join-btn");
    if (joinBtn) {
        joinBtn.addEventListener("mouseover", () => {
            joinBtn.style.transform = "scale(1.1)";
        });
        joinBtn.addEventListener("mouseout", () => {
            joinBtn.style.transform = "scale(1)";
        });
    }

    // Simple counter animation for stats
    function animateCount(element, target) {
        let count = 0;
        const increment = target / 50; // Speed of animation
        const updateCount = () => {
            count += increment;
            if (count >= target) {
                element.innerText = target;
            } else {
                element.innerText = Math.floor(count);
                requestAnimationFrame(updateCount);
            }
        };
        updateCount();
    }

    const statNumbers = document.querySelectorAll(".stat-item span");
    statNumbers.forEach(stat => {
        const targetValue = parseInt(stat.innerText, 10);
        stat.innerText = "0";
        animateCount(stat, targetValue);
    });
});

document.getElementById("upload-btn").addEventListener("click", function() {
    document.getElementById("upload-input").click();
});

document.getElementById("join-btn").addEventListener("click", function() {
    alert("Thank you for joining the movement! 🌱");
});
