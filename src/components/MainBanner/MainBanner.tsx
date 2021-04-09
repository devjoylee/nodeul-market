import React from "react";
import { RiHeartAddFill } from "react-icons/ri";

interface MainBannerProps {
	toggleModal: () => void;
}

export function MainBanner({ toggleModal }: MainBannerProps) {
	return (
		<section className="main-banner">
			<p className="main-banner__text">
				Are you sick of wasting food? <br />
				Feel free to share your extra groceries.
				<br />
				<br />
				Join to stop waste and save our earth :)
			</p>

			<button className="main-banner__btn" onClick={() => toggleModal()}>
				ADD ITEM
			</button>
		</section>
	);
}
