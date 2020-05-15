// Update these four variables with values from your B2C tenant in the Azure portal
const clientID = "f6b24feb-fecc-4df7-86bf-a7576a216c48"; // Application (client) ID of your API's application registration
const b2cDomainHost = "berberichb2c.b2clogin.com";
const tenantId = "berberichb2c.onmicrosoft.com"; // Alternatively, you can use your Directory (tenant) ID (a GUID)
const policyName = "B2C_1_signupsignin1";

const config = {
    identityMetadata: "https://" + b2cDomainHost + "/" + tenantId + "/" + policyName + "/v2.0/.well-known/openid-configuration/",
    clientID: clientID,
    policyName: policyName,
    isB2C: true,
    validateIssuer: false,
    loggingLevel: 'info',
    loggingNoPII: false,
    passReqToCallback: false
}

module.exports = config;
