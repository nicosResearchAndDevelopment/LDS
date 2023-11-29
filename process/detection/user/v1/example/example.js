const userDetection = {

    registered_carrier_raw_type: [
        "BASIC",
        "TOKEN"
    ],
    registered_class: [
        "entity:LEAR_NP_VC"
    ],
    pdp_endPoint: "https://pdp.nicos-rd.com/decide/",

    start: function ({input: input = {}}) {
        let user = {};
        return {
            start: undefined,
            end: undefined,
            user: user
        };
    },

    input: {},

    $meta_carrier_property: undefined,
    $meta_carrier_raw: undefined,
    $meta_carrier_raw_type: undefined,
    $meta_carrier_raw_value: undefined,
    $meta_carrier_decoded: undefined,
    $meta_class: undefined,
    $meta_verifiable: false,
    $meta_identifier_property: undefined,
    $meta_identifier_type: undefined,
    $meta_identifier_value: undefined,

    user: {}

};

let input = {
    header: {
        "content-type": ""
    },
    body: ""
};

let output = userDetection.start(input);