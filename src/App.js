
import { Reset } from './Reset/Reset'
import { Field } from './Field/Field'
import { Information } from './Information/Information'
import { useState, useEffect } from 'react';

export const Game = () => {


	return (
		<>
			<div>
				<label>
					Everything is just beginning
				</label>
			</div>
			<Field />
			<Information />
			<Reset />

		</>

	);
};

