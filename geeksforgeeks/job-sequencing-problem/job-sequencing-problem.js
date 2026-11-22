/**
 * @param {number[]} deadline
 * @param {number[]} profit
 * @returns {number[]}
 */

class Solution {
    jobSequencing(deadline, profit) {

        let maxD = 0;

        let jobs = [];

        for (let i = 0; i < deadline.length; i++) {
            jobs.push([profit[i], deadline[i]]);
        }

        jobs.sort((a, b) => b[0] - a[0]);

        for (let i = 0; i < deadline.length; i++) {
            maxD = Math.max(maxD, deadline[i]);
        }

        maxD = Math.min(maxD, deadline.length);

        const infill = Array(maxD + 1);

        for (let i = 0; i <= maxD; i++) {
            infill[i] = i;
        }

        let Tprofit = 0;
        let cnt = 0;

        for (let j = 0; j < deadline.length; j++) {

            let cp = jobs[j][0];
            let cd = jobs[j][1];

            cd = Math.min(cd, maxD);

            let k = cd;
            let path = [];

            while (k > 0 && infill[k] !== k) {
                path.push(k);
                k = infill[k];
            }

            // Path compression
            for (let x of path) {
                infill[x] = k;
            }

            if (k > 0 && cp > 0) {

                cnt++;
                Tprofit += cp;

                infill[k] = k - 1;
            }

            if (cnt == maxD) {
                break;
            }
        }

        return [cnt, Tprofit];
    }
}