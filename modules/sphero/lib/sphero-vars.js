const SPHERO_VARS = {
    BALL_1 : "SB-5D1C",  // Atelier 1 (Labyrinthe)
    BALL_2 : "SB-2020", // Atelier 2 (Transformation)
    BALL_3 : "SB-0994", // Atelier 3 (Stockage)
    BEFORE_NEXT_SPAM: 1000,
    SPAM: 8,

    STATES : {
        INACTIVE:  "INACTIVE",
        NECTAR: "NECTAR",
        MIEL: "MIEL"
    },

    ACTIVE_MODULE : 2,
    getModuleOf: (ball) => {
        return (ball === SPHERO_VARS.BALL_1) ? 1 : ( (ball === SPHERO_VARS.BALL_2) ? 2 : 3);
    },
    isModuleActive: (id) => {
        return id === SPHERO_VARS.ACTIVE_MODULE
    }
};

module.exports.SPHERO_VARS = SPHERO_VARS;