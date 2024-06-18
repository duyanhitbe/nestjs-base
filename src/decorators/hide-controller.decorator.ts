import {applyDecorators} from '@nestjs/common';
import {ApiExcludeController} from '@nestjs/swagger';

/**
 * This decorator should hide the whole controller on Swagger when your app was released on production
 */
export const HideController = () =>
	applyDecorators(ApiExcludeController(process.env.NODE_ENV === 'production'));
