import * as Footer from "../../../snippets/footer";
export const createFooter = ({
    variant,
    borderless,
    hideOnMobile,
} = {
}) => {
    const html = `
    ${Footer.getFooter(variant, borderless, hideOnMobile)}
    `;

    return html;
};
