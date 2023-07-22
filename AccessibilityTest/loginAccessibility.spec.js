import { t } from 'testcafe'
import { Accessibility } from "./util";

const METRICS = ( 
    'Critical',  'serious', 'moderate', 'minor'
);

fixture('Test Accessibility')
    .page(`https://react-redux.realworld.io/#/login`);
test('Verify login page', async () => {
    await Accessibility.scanPage(t, 'Login');
})

