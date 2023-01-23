import { FC, PropsWithChildren } from "react";

interface FooterLinkProps {
   href:string; 
}

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({ href, children }) => {
    return (
        <li>
            <a 
                className="font-bold text-sm text-gray-400 hover:text-gray-300 hover:underline" 
                href={href}>{children}
            </a>
        </li>
    );  
};