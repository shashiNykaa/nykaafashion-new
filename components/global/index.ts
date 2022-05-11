import React from "react";
import { useMediaQuery } from "react-responsive";

export const Desktop = React.memo(({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 768 });
    return  isDesktop ? children: null;
});

export const Mobile = React.memo(({ children } : any) => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return  isMobile ? children: null;
});

Mobile.displayName='Mobile';
Desktop.displayName='Desktop';

export const useIsDesktop = () => {
  return useMediaQuery({ minWidth: 768 });
};
