const util = require('./util');
const data = require('./data');

const start = (assets = []) => {
    const cleanAssets = assets.reduce((acc, curr) => {
        const asset = util.extractMandatoryFields(curr);
        if (asset) {
            util.assignBroadcastEndTime(asset);
            util.changeDomain([asset]);

            const match = util.extractMandatoryFieldsInMatch(curr.match);
            if (match) {
                util.changeDomain([match.homeTeam, match.awayTeam]);
                Object.assign(asset, { match })
            }

            acc.push(asset);
        }
        return acc;
    }, []).sort((d1, d2) => (new Date(d1.broadcastStartTime) - new Date(d2.broadcastStartTime)));

    return cleanAssets;
};

console.log(JSON.stringify(start(data)));
