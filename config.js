module.exports = {
    groupId: 12987314,
    maximumRank: 253,
    prefix: '-',
    logChannelId: 'false',
    shoutChannelId: 'false',
    auditLogChannelId: 'false',
    legacyCommands: true,
    colors: {
        info: '#5b57d9',
        error: '#de554e',
        neutral: '#f2f255',
        success: '#43d177'
    },
    verificationChecks: true,
    firedRank: 0,
    xpRankup: {
        enabled: true,
        roles: [
            // Example: {
            //     rank: 2,
            //     xpNeeded: 10
            // }
        ]
    },
    memberCount: {
        enabled: false,
        groupIconURL: '',
        channelId: '',
        milestones: []
    },
    antiAbuse: {
        enabled: false,
        bypassRank: 255,
        duration: 120,
        threshold: 5,
        actionRank: null,
        actionLogChannelId: ''
    }
}
