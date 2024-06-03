export default function openPage(target: HTMLTemplateElement, event: Event) {
    console.log(target)
    const page = (target.getAttribute('page'));
    if (page) {
        window.location.pathname = page;
        event.preventDefault();
    }
}