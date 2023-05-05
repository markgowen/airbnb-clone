import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "@/app/listings/[listingId]/ListingClient";

interface IParams {
	listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
	const listing = await getListingById(params);
	const currentUser = getCurrentUser();

	if (!listing) {
		return (
			<ClientOnly>
				<EmptyState />
			</ClientOnly>
		);
	}
	return (
		<ClientOnly>
			<ListingClient listing={listing} currentUser={currentUser} />
		</ClientOnly>
	);
};

export default ListingPage;
