function getImmutableObject(object) {
    const { Map } = require("immutable");
    return Map(object)
}

export default { getImmutableObject };
