class Addon {
    constructor() {
        //Addon : contient toutes les models liés à un joueur
        this.addons = {};
    }


    hasAddon(addon_name) {
        return this.addons[addon_name] !== undefined;
    }

    getAddon(addon_name) {
        return this.hasAddon(addon_name) ? this.addons[addon_name] : null;
    }

    setAddon(addon_name, addon_value) {
        this.addons[addon_name] = addon_value;
    }
}

module.exports = Addon;