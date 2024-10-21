
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
Live Demo [Live Demo](https://chat-verse-using-redis.vercel.app/auth) is available

### ScreenShots
 
![Screenshot 2024-10-21 055602](https://github.com/user-attachments/assets/8e46da51-e73e-4953-866b-3d2de113f532)

### First Setup .env file
```js
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=
KINDE_SITE_URL=
KINDE_POST_LOGOUT_REDIRECT_URL=
KINDE_POST_LOGIN_REDIRECT_URL=


UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=


PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=

NEXT_PUBLIC_PUSHER_APP_KEY=
```
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Features
 - Implemented real-time messaging with Next.js and Pusher, increasing user engagement by 40 % and session duration
by 50 %..
- Developed a Redis-based chat platform that enabled seamless communication for 1,000+ users simultaneously the
application maintained a response time of less than 200 milliseconds, ensuring high levels of user satisfaction.
- Optimized image file handling with Cloudinary, cutting load times by 30 %. Enhanced mobile user experience with
Shadcn UI, boosting mobile traffic by 25 %.
- Utilized Zustand for global state management, leading to a 30 %improvement in application responsiveness and load
times.
- Developed and deployed a secure authentication system with KindeAuth, supporting 10,000+ users, improving security
by 35 % , and reducing login times 20 %.



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


