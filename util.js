const url = require('url');
const validator = require('./validator');

const DOMAIN = "cms.domain2.com";

module.exports = {
    assignBroadcastEndTime: (asset) => {
        const { broadcastStartTime, duration } = asset;

        const date = new Date(broadcastStartTime);
        date.setSeconds(date.getSeconds() + duration);

        Object.assign(asset, { broadcastEndTime: date.toISOString() });
    },
    changeDomain: (assets = []) => {
        assets.forEach((asset) => {
            const url = new URL(asset.image);
            url.host = DOMAIN;
            asset.image = url.href;
        });
    },
    extractMandatoryFields: (asset) => {
        const { id, title, description, broadcastStartTime, duration, image } = asset;
        const cleanAsset = Object.assign({}, { id, title, description, broadcastStartTime, duration, image });
        
        return (validator.hasMandatoryFieldsInAsset(cleanAsset) ? cleanAsset : null);
    },
    extractMandatoryFieldsInMatch: (match) => {
        if (validator.hasMandatoryFieldsInMatch(match)) {
            return Object.assign(match, {
                homeTeam: {
                    id: match.homeTeam.id,
                    name: match.homeTeam.name,
                    image: match.homeTeam.image
                },
                awayTeam: {
                    id: match.awayTeam.id,
                    name: match.awayTeam.name,
                    image: match.awayTeam.image
                }
            });
        } else {
            return null;
        }
    }
};
