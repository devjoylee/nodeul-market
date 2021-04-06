import React from "react";
import { RiHeartAddFill } from "react-icons/ri";

interface InventoryEmptyProps {
	toggleModal: () => void;
}

export function InventoryEmpty({ toggleModal }: InventoryEmptyProps) {
	return (
		<div className="inventory-empty">
			<p>
				Are you sick of wasting food? <br />
				Feel free to share your extra groceries.
				<br />
				<br />
				Join to stop waste and save our earth :)
			</p>

			<button className="addbtn" onClick={() => toggleModal()}>
				<RiHeartAddFill />
				ADD ITEM
			</button>
		</div>
	);
}
