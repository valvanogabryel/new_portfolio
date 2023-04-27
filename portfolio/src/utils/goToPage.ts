export default function goToPage(goTo: string) {
  const link = goTo;

  setTimeout(() => {
    window.open(link, '_blank');
  }, 1000);
}