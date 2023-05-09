# Airbnb Clone

This project is an Airbnb clone built with Next.js, Tailwind CSS, Prisma, and MongoDB. It was developed by following a tutorial by Code with Antonio.

## Features

- Users can search for properties based on location and dates.
- Users can view property details, including descriptions, images, and pricing information.
- Users can book properties by selecting dates and providing payment information.
- Property owners can create listings by providing property details and uploading images.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running the following command in the project directory:

```bash
npm install
```

3. Set up a MongoDB database and update the `DATABASE_URL` environment variable in the `.env` file.
4. Run the following command to start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open `http://localhost:3000` in your web browser to view the app.

## Technologies Used

- [Next.js](https://nextjs.org/) - a React framework for building server-side rendered and statically generated applications.
- [Tailwind CSS](https://tailwindcss.com/) - a utility-first CSS framework.
- [Prisma](https://www.prisma.io/) - a modern database toolkit for Node.js.
- [MongoDB](https://www.mongodb.com/) - a NoSQL document database.

## Deployment

To deploy this project on Vercel, follow these steps:

1. Fork this repository and create a new project on [Vercel](https://vercel.com/).
2. Connect your Vercel project to your forked repository.
3. Set up the necessary environment variables in the Vercel dashboard, including `DATABASE_URL`.
4. Deploy the project to Vercel and wait for the deployment to complete.
5. Open the URL provided by Vercel to view the deployed app.

Note: Make sure to keep your environment variables private and never share them publicly.

## Credits

This project was developed by following a tutorial by [Code with Antonio](https://www.youtube.com/@codewithantonio). Thank you to Antonio for creating such a helpful resource!

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use and modify this code for your own purposes.
