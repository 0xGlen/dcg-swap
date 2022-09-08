import Moralis from "moralis";
import Constants from "../config/constants";

export default ({ app }, inject) => {
    Moralis.start({
        serverUrl: Constants.moralisServerUrl,
        appId: Constants.moralisAppId,
    });
    inject('moralis', Moralis)
}