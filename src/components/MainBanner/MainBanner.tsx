import React from "react";

interface MainBannerProps {
	toggleModal: () => void;
}

export function MainBanner({ toggleModal }: MainBannerProps) {
	return (
		<section className="main-banner">
			<p className="main-banner__text">
				Are you sick of wasting food? <br />
				Feel free to share your extra groceries.
				<span>Join to stop waste and save our earth :)</span>
			</p>

			<button className="main-banner__btn" onClick={() => toggleModal()}>
				ADD ITEM
			</button>
		</section>
	);
}
