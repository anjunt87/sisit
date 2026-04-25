 //src\scripts\stat-counter.ts
 document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".stat-counter");

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const suffix = counter.getAttribute("data-suffix") || "";
        const count = +counter.innerText.replace(/\D/g, "");
        const increment = Math.ceil(target / 100);

        if (count < target) {
          counter.innerText = count + increment + suffix;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target + suffix;
        }
      };

      updateCount();
    });
  });