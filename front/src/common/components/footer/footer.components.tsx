import { FooterLink } from "../footer-link/footer-link.components"

export const Footer = () => {
    return (
        <div className="bg-gray-900 pt-12 px-12 pb-8">
            <div>
                <div className="mb-4 font-bold text-sm text-zinc-500">
                    <span className="uppercase">Contact</span>
                </div>
                <div className="mb-8">
                    <ul>
                        <FooterLink href="tel:+48555555555">+48 555 555 555</FooterLink>
                        <FooterLink href="mailto:example@gmail.com">example@gmail.com</FooterLink>
                    </ul>
                </div>
                <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500 mb-8" />
                <div>
                    <span className="text-xl font-semibold text-white">🍕PizzaStack</span>
                </div>
            </div>
        </div>
    );
    
};