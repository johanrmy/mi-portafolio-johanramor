export const handleSmoothScroll = (id: string, closeSideMenu?: () => void) => {
  const element = document.getElementById(id);
  if (element) {
    if (closeSideMenu) {
      closeSideMenu();
    }
    const yOffset = window.matchMedia("(min-width: 640px)").matches
      ? -140
      : -60;
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  }
};
