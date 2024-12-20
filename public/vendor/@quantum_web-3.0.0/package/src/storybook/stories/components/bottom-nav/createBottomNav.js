import * as BottomNav from "../../../snippets/bottom-nav";
export const createBottomNav = ({
    variant,
    withToc,
    isStepper
} = {
}) => {
    let html = '';

    if(variant == 'Default') {
        html = BottomNav.getBottomNav();
    }else if(variant ==='On Form') {
        html = BottomNav.getBottomNavForm(withToc, isStepper);
    }

    return html;
};
