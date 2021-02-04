const btn = document.querySelector("button");

// Cara Terbaek : Karena bisa dua gini:
btn.addEventListener(
    "click",
    () => {
        alert("Awww...");
    },
    {
        once: true,
    }
);
btn.addEventListener(
    "click",
    () => {
        alert("Mbee...");
    },
    {
        capture: false,
        once: false,
    }
);
