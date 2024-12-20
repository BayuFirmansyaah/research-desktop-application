import * as Header from "../../../snippets/header";
export const createHeader = ({
    subheaderVariant,
    withBottomNav
} = {
}) => {
    const html = `
    ${Header.getHeader(subheaderVariant, withBottomNav)}
    `;

    return html;
};
