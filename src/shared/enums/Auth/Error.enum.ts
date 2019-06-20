import { Enum } from 'src/shared/utils/Enum';

export const Error = Enum(
    'UserNotConfirmedException',
    'PasswordResetRequiredException',
    'NotAuthorizedException',
    'UserNotFoundException',
);
export type Error = Enum<typeof Error>;
