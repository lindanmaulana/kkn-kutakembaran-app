import axios from 'axios';
import { APIBASEURL } from './config';

const APIURL = APIBASEURL;

export const api = axios.create({
	baseURL: APIURL,
});
