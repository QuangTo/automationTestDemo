/**
 * Understanding :
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG
 * https://www.accessibilitychecker.org/
 */

import { axeCheck } from '@testcafe-community/axe';
import { createHtmlReport } from 'axe-html-reporter';

export const Accessibility = {

    scanPage: async (t, pageName, metrics) => {
        // Run axe check, not using wrapper function that throws error
        const { error, results } = await axeCheck(t); // "context" and "options" parameters are optional

        if (metrics) {
            const numCritical = results.violations.filter((r) => r.impact === "critical").length;
            const numSerious = results.violations.filter((r) => r.impact === "serious").length;
            const numModerate = results.violations.filter((r) => r.impact === "moderate").length;
            const numMinor = results.violations.filter((r) => r.impact === "minor").length;

            metrics.critical += numCritical;
            metrics.serious += numSerious;
            metrics.moderate += numModerate;
            metrics.minor += numMinor;
        }

        // "results" constant contains full axe Results object (https://www.deque.com/axe/core-documentation/api-documentation/#results-object)
        await t.expect(error).eql(null, `axe check failed with an error: ${error}`);

        createHtmlReport({
            results,
            options: {
                projectKey: `"${pageName}"`,
                outputDir: `reports/artifacts/${pageName}`,
            },
        });
    },
};
