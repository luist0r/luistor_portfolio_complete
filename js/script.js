(() => {
    // Wait for DOM to be fully loaded
    window.addEventListener('DOMContentLoaded', () => {
        console.log("Portfolio script initialized");

        const root = document.documentElement;
        const hero = document.getElementById("hero");
        const echoLayer = document.getElementById("echo-layer");
        const mandala = document.getElementById('mandala-layer');

        if (!hero || !echoLayer) {
            console.error("Required elements (hero or echo-layer) not found");
            return;
        }

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const pointerFine = window.matchMedia("(pointer: fine)").matches;

        let targetX = window.innerWidth * 0.5;
        let targetY = window.innerHeight * 0.5;
        let currentX = targetX;
        let currentY = targetY;
        let lastMoveX = targetX;
        let lastMoveY = targetY;
        let lastMoveTime = performance.now();
        let lastEchoTime = 0;
        let fxTarget = 0;
        let fxCurrent = 0;

        const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

        const setTarget = (x, y) => {
            const rect = hero.getBoundingClientRect();
            targetX = clamp(x - rect.left, 0, rect.width);
            targetY = clamp(y - rect.top, 0, rect.height);
        };

        const spawnEcho = (x, y, speed) => {
            if (reducedMotion) {
                return;
            }
            const now = performance.now();
            if (now - lastEchoTime < 36) {
                return;
            }
            lastEchoTime = now;

            const echo = document.createElement("span");
            echo.className = "echo";
            echo.style.left = `${x}px`;
            echo.style.top = `${y}px`;
            echo.style.opacity = `${Math.min(0.85, 0.36 + speed * 0.16)}`;
            echo.style.width = `${14 + speed * 10}px`;
            echo.style.height = echo.style.width;
            echoLayer.appendChild(echo);

            // Clean up echo after animation
            echo.addEventListener("animationend", () => echo.remove(), { once: true });

            // Fallback cleanup
            setTimeout(() => {
                if (echo.parentNode) echo.remove();
            }, 600);
        };

        hero.addEventListener("pointermove", (event) => {
            setTarget(event.clientX, event.clientY);

            const now = performance.now();
            // Prevent division by zero
            const dt = Math.max(16, now - lastMoveTime);
            const dx = event.clientX - lastMoveX;
            const dy = event.clientY - lastMoveY;
            const speed = Math.hypot(dx, dy) / dt;
            fxTarget = Math.min(1, speed * 1.45);

            if (speed > 0.95 && pointerFine) {
                spawnEcho(targetX, targetY, Math.min(speed, 2.3));
            }

            lastMoveX = event.clientX;
            lastMoveY = event.clientY;
            lastMoveTime = now;
        });

        hero.addEventListener("pointerleave", () => {
            targetX = window.innerWidth * 0.5;
            targetY = window.innerHeight * 0.5;
            fxTarget = 0;
        });

        const serviceItems = document.querySelectorAll('.service-item');
        const REVEAL_RADIUS = 300;

        const loop = () => {
            if (document.hidden) {
                requestAnimationFrame(loop);
                return;
            }

            try {
                // Smooth easing
                currentX += (targetX - currentX) * 0.15;
                currentY += (targetY - currentY) * 0.15;
                fxCurrent += (fxTarget - fxCurrent) * 0.14;
                fxTarget *= 0.92;

                // Update CSS variables
                root.style.setProperty("--spot-x", `${currentX}px`);
                root.style.setProperty("--spot-y", `${currentY}px`);
                root.style.setProperty("--fx-intensity", fxCurrent.toFixed(3));

                const xOffset = (currentX - window.innerWidth * 0.5) * -0.024;
                const yOffset = (currentY - window.innerHeight * 0.5) * -0.024;
                root.style.setProperty("--grid-shift-x", `${xOffset}px`);
                root.style.setProperty("--grid-shift-y", `${yOffset}px`);

                // Service Reveal Logic
                if (serviceItems.length > 0) {
                    serviceItems.forEach(item => {
                        const rect = item.getBoundingClientRect();
                        const itemCenterX = rect.left + rect.width / 2;
                        const itemCenterY = rect.top + rect.height / 2;

                        const dist = Math.hypot(currentX - itemCenterX, currentY - itemCenterY);

                        if (dist < REVEAL_RADIUS) {
                            item.classList.add('revealed');
                        } else {
                            item.classList.remove('revealed');
                        }
                    });
                }

                // Mandala Rotation
                if (mandala) {
                    const rotation = (currentX / window.innerWidth) * 360 * 0.2;
                    mandala.style.transform = `rotate(${rotation}deg) scale(${1 + fxCurrent * 0.1})`;
                }

            } catch (e) {
                console.error("Animation loop error:", e);
            }

            requestAnimationFrame(loop);
        };

        // Start the loop
        loop();
    });
})();
