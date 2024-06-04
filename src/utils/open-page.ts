export default function openPage(target: HTMLTemplateElement, event: Event) {
  const page = (target.getAttribute('page'));
  if (page) {
    window.location.pathname = page;
    event.preventDefault();
  }
}
