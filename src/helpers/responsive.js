import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 }); // 🔄 Tanpa maxWidth

  return { isMobile, isTablet, isDesktop };
};
