import prisma from "@/app/libs/prismadb";

export interface IListingsParams {
	userId?: string;
	guestCount?: number;
	roomCount?: number;
	bathroomCount?: number;
	startDate?: string;
	endDate?: string;
	locationValue?: string;
	category?: string;
}

// ✅ Make params optional by giving it a default value of {}
export default async function getListings(params: IListingsParams = {}) {
	try {
		const {
			userId,
			guestCount,
			roomCount,
			bathroomCount,
			startDate,
			endDate,
			locationValue,
			category,
		} = params;

		let query: any = {};

		if (userId) {
			query.userId = userId;
		}

		if (guestCount) {
			query.guestCount = {
				gte: +guestCount,
			};
		}

		if (roomCount) {
			query.roomCount = {
				gte: +roomCount,
			};
		}

		if (bathroomCount) {
			query.bathroomCount = {
				gte: +bathroomCount,
			};
		}

		if (category) {
			query.category = category;
		}

		if (locationValue) {
			query.locationValue = locationValue;
		}

		if (startDate && endDate) {
			query.NOT = {
				reservations: {
					some: {
						OR: [
							{
								endDate: { gte: startDate },
								startDate: { lte: startDate },
							},
							{
								startDate: { lte: endDate },
								endDate: { gte: endDate },
							},
						],
					},
				},
			};
		}

		const listings = await prisma.listing.findMany({
			where: query,
			orderBy: {
				createdAt: "desc",
			},
		});

		const safeListings = listings.map((listing) => ({
			...listing,
			createdAt: listing.createdAt.toISOString(),
		}));

		return safeListings;
	} catch (error: any) {
		console.error("Failed to fetch listings in getListings:", error);
		// You can either rethrow or just return an empty array:
		// throw new Error(error);
		return [];
	}
}
