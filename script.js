const counters = document.querySelectorAll(".counter");
const animationSpeed = 500;

      const updateCounter = (counter) => {
            const targetCount = +counter.getAttribute("data-target");
            let currentCount = +counter.innerText;
            const animationStep = targetCount / animationSpeed;

            if(currentCount < targetCount){
                counter.classList.add('updating');
                counter.innerText = Math.floor(currentCount + animationStep);
                
                setTimeout(() => {
                    updateCounter(counter);
                }, 1); 
            } else {
                counter.classList.remove('updating');
                counter.innerText = targetCount;
            }
        }

        // Start animation when page loads
        window.addEventListener('load', () => {
            counters.forEach((counter) => {
                updateCounter(counter);
            });
        });
