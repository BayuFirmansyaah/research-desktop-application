import * as Sidebar from "../../../snippets/sidebar";
export const createSidebar = ({
} = {
}) => {
    const html = `
    ${Sidebar.getSidebar()}
    `;

    return html;
};
