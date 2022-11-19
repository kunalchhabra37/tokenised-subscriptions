import React from 'react';
import Card from './Card';

const CardContainer = () => {
	return (
		<div class="row px-5 justify-content-center flex-wrap py-5">
			<div class="col-sm-6">
				<Card
					title={'Buy Subscription'}
					para={'You can mint NFT from here'}
					target={'/buy'}
					value={'Buy'}
					url={
						'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
					}
				/>
			</div>
			<div class="col-sm-6">
				<Card
					title={'Renew Subscription'}
					para={'You can renew or update your current subscription'}
					target={'/buy'}
					value={'Renew'}
					url={
						'https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
					}
				/>
			</div>
		</div>
	);
};

export default CardContainer;
