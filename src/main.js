function open_faq(element) {
    element = element.parentElement.parentElement.parentElement;
    element.querySelector('#faq-contents').classList.remove("hidden");
    element.querySelector('#faq-open').classList.add("hidden");
    element.querySelector('#faq-close').classList.remove("hidden");
}

function close_faq(element) {
    element = element.parentElement.parentElement.parentElement;
    element.querySelector('#faq-contents').classList.add("hidden");
    element.querySelector('#faq-open').classList.remove("hidden");
    element.querySelector('#faq-close').classList.add("hidden");
}