import { Enum } from 'src/shared/utils/Enum';

/**
 * SMS_MFA: The user needs to input the code received from SMS message. You can submit the code by Auth.confirmSignIn.
 *
 * SOFTWARE_TOKEN_MFA: The user needs to input the OTP(one time password). You can submit the code by Auth.confirmSignIn.
 *
 * NEW_PASSWORD_REQUIRED: This happens when the user account is created through the Cognito console. The user needs to input the new password and required attributes. You can submit those data by Auth.completeNewPassword.
 *
 * MFA_SETUP: This happens when the MFA method is TOTP(the one time password) which requires the user to go through some steps to generate those passwords. You can start the setup process by Auth.setupTOTP.
 */
export const ChallengeName = Enum('SMS_MFA', 'SOFTWARE_TOKEN_MFA', 'NEW_PASSWORD_REQUIRED', 'MFA_SETUP');
export type ChallengeName = Enum<typeof ChallengeName>;
