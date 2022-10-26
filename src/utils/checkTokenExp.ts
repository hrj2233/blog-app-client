import jwt_decode from 'jwt-decode';
import { authActions } from '../redux/reducers/authReducer';
import { getAPI } from './fetchData';

interface IToken {
	exp: number;
	iat: number;
	id: string;
}

export const checkTokenExp = async (token: string, dispatch: any) => {
	const decoded: IToken = jwt_decode(token);

	if (decoded.exp >= Date.now() / 1000) return;

	const res = await getAPI('refresh_token');
	dispatch(authActions.getAuth(res.data));
	return res.data.access_token;
};
