import { Auth } from 'aws-amplify';
import { CognitoUser } from '@aws-amplify/auth';
import { ChallengeName } from 'src/shared/enums/Auth';

interface EAppUser extends CognitoUser {
    challengeName: ChallengeName;
    challengeParams: string;
}

export const signIn = async (username: string, password: string, validationData?: { [key: string]: any }) => {
    const authOptions = { username, password, validationData };
    return Auth.signIn(authOptions).then(user => {
        const eAppUser: EAppUser = {
            ...user,
            challengeName: user.challengeName,
            challengeParams: user.challengeParams,
        };
    });
};
