import PushServer from "pusher";

import PushClient from "pusher-js";


// we will create  a global instance of pusher to avoid creating multiple instances

declare global {
	var pusherServer: PushServer | undefined;
	var pusherClient: PushClient | undefined;
}

export const pusherServer =
	global.pusherServer ||
	new PushServer({
		appId: process.env.PUSHER_APP_ID!,
		key: process.env.PUSHER_APP_KEY!,
		secret: process.env.PUSHER_APP_SECRET!,
		cluster:"ap2",
		useTLS: true,
	});

export const pusherClient =
	global.pusherClient || new PushClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, { cluster:"ap2"});