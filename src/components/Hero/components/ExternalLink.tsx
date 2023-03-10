import type { PropsWithChildren } from "react";

export type ExternalLinkProps = {
    title?: string;
    href?: string;
}

export const ExternalLink = ({
    title,
    href,
    children
}: PropsWithChildren<ExternalLinkProps>) => {
    return (
        <a 
            href={href ?? ""} 
            target="_blank" 
            rel="no-referrer noopener" 
            title={title ?? ""}>
            { children }
        </a>
    );
}