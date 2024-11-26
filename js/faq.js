function toggleFAQ(id) {
    var answer = document.getElementById(id);
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
document.querySelectorAll('nav a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
    });

// FAQ Search Function
function searchFAQ() {
    let input = document.getElementById("faq-search").value.toLowerCase();
    let faqs = document.getElementsByClassName("faq");

    for (let faq of faqs) {
        let question = faq.getElementsByClassName("faq-question")[0].innerText.toLowerCase();
        if (question.includes(input)) {
            faq.style.display = "block";
        } else {
            faq.style.display = "none";
        }
    }
}