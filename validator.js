const MANDATORY_FIELDS = ['id', 'title', 'description', 'broadcastStartTime', 'duration', 'image'];
const MANDATORY_MATCH_FIELDS = [
    { homeTeam: ['id', 'name', 'image'] }, { awayTeam: ['id', 'name', 'image'] }
];

const hasMandatoryFields = (obj, fields = []) => {
    for (let i = 0; i < fields.length; i++) {
        if (!obj[fields[i]]) {
            return false;
        }
    }
    return true;
};

module.exports = {
    hasMandatoryFieldsInAsset: (asset) => {
        return hasMandatoryFields(asset, MANDATORY_FIELDS);
    },
    hasMandatoryFieldsInMatch: (match) => {
        const exists = !!(match && match.id && match.homeTeam && match.awayTeam);
    
        if (exists) {
            return hasMandatoryFields(match.homeTeam, MANDATORY_MATCH_FIELDS.homeTeam) 
                && hasMandatoryFields(match.awayTeam, MANDATORY_MATCH_FIELDS.awayTeam);
        } else {
            return false;
        }
    }
};