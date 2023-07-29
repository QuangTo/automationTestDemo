import { t } from 'testcafe'
import { Accessibility } from "./util";

fixture('Test Accessibility')
    .page(`https://google.com/`);
test('Verify login page', async () => {
    await Accessibility.scanPage(t, 'Login');
})

